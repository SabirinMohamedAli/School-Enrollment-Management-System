const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes'); // Import student routes
const userRoutes = require('./routes/userRoutes'); // Import user routes

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/schoolDB', { useNewUrlParser: true, useUnifiedTopology: true })
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
  console.log(`Login request received for email: ${email}`); // Debug log

  try {
      const admin = await Admin.findOne({ email });
      if (!admin) {
          console.log(`User not found for email: ${email}`); // Debug log
          return res.status(404).json({ message: 'Admin not found' });
      }

      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) {
          console.log(`Invalid credentials for email: ${email}`); // Debug log
          return res.status(400).json({ message: 'Invalid credentials' });
      }

      const token = jwt.sign({ id: admin._id }, 'secret', { expiresIn: '1h' });
      res.json({ message: 'Login successful', token, role: 'Admin' });
  } catch (error) {
      console.error(`Server error for email: ${email}`, error); // Debug log
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

// Use the user routes
app.use('/api/users', userRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));




// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const userRoutes = require('./routes/userRoutes'); // Import user routes
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const User = require('./models/User'); // Import the User model

// const app = express();
// app.use(express.json());
// app.use(cors());

// // MongoDB Connection
// mongoose.connect('mongodb://localhost:27017/schoolDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log('Database connected successfully');
//   })
//   .catch((error) => {
//     console.error('Error connecting to the database:', error);
//   });

// // Login API
// app.post('/api/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     console.log('Login request received for email:', email); // Log email
//     const user = await User.findOne({ email });
//     if (!user) {
//       console.log('User not found for email:', email); // Log if user not found
//       return res.status(404).json({ message: 'User not found' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       console.log('Invalid credentials for email:', email); // Log if password doesn't match
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });
//     res.json({ message: 'Login successful', token, role: user.role });
//   } catch (error) {
//     console.error('Server error during login:', error); // Log server error
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Register API
// app.post('/api/register', async (req, res) => {
//   const { fullName, email, password, role } = req.body;

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ fullName, email, password: hashedPassword, role });
//     await newUser.save();
//     res.json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Use the user routes
// app.use('/api/users', userRoutes);

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
