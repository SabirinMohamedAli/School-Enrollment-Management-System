const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes'); // Import student routes

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/schoolDB')
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });


// Admin Schema
const adminSchema = new mongoose.Schema({
    username: String,
    email: { type: String, unique: true },
    password: String,
});

const Admin = mongoose.model('Admin', adminSchema);

// Login API
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const admin = await Admin.findOne({ email });
        if (!admin) return res.status(404).json({ message: 'Admin not found' });

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: admin._id }, 'secret', { expiresIn: '1h' });
        res.json({ message: 'Login successful', token, role: 'Admin' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Register API
app.post('/api/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const admin = new Admin({ username, email, password: hashedPassword });
        await admin.save();
        res.json({ message: 'Admin registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Use the student routes
app.use('/api/student', studentRoutes); 
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));




