// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const bcrypt = require('bcrypt'); // For hashing passwords
// const jwt = require('jsonwebtoken'); // For generating tokens

// const app = express(); 

// app.use(bodyParser.json()); 
// app.use(cors()); 

// // MongoDB Connection
// mongoose
//   .connect("mongodb://127.0.0.1:27017/schooldb1")
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("Error connecting to MongoDB:", err));

// // Import the User model
// const User = require('./models/User');

// // Import the Student model
// const Student = require('./models/Student');

// // Import the Course model
// const Course = require('./models/Course');

// // Import student routes
// const studentRoutes = require('./routes/studentRoutes');

// // Import course routes
// const courseRoutes = require('./routes/courseRoutes');

// // Login endpoint
// app.post('/api/login', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ id: user._id, email: user.email }, 'your_jwt_secret', { expiresIn: '1h' });
//     res.status(200).json({ token, user: { email: user.email, role: user.role } });
//   } catch (err) {
//     console.error("Error logging in:", err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // PUT endpoint to update a user
// app.put('/api/users/:id', async (req, res) => {
//   const { fullName, email, role } = req.body;
//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, {
//       fullName,
//       email,
//       role
//     }, { new: true });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.status(200).json(user);
//   } catch (err) {
//     console.error("Error updating user:", err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // DELETE endpoint to delete a user
// app.delete('/api/users/:id', async (req, res) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.status(200).json({ message: 'User deleted successfully' });
//   } catch (err) {
//     console.error("Error deleting user:", err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Endpoint to get all users
// app.get("/api/users", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (err) {
//     console.error("Error fetching users:", err);
//     res.status(500).json({ message: "Server error." });
//   }
// });

// // Use student routes
// app.use('/api/students', studentRoutes);

// // Use course routes
// // server.js or app.js

// // Import the Course model
// // const Course = require('./models/Course');

// // Endpoint to get all courses
// app.get('/api/courses', async (req, res) => {
//   try {
//     const courses = await Course.find();
//     res.json(courses);
//   } catch (err) {
//     console.error("Error fetching courses:", err);
//     res.status(500).json({ message: "Error fetching courses" });
//   }
// });

// // Server Listening
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });



// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const bcrypt = require('bcrypt'); // For hashing passwords
// const jwt = require('jsonwebtoken'); // For generating tokens

// const app = express();

// app.use(bodyParser.json());
// app.use(cors());

// // MongoDB Connection
// mongoose
//   .connect("mongodb://127.0.0.1:27017/schooldb1")
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("Error connecting to MongoDB:", err));

// // Import models
// const User = require('./models/User');
// const Student = require('./models/Student');
// const Course = require('./models/Course');

// // Import routes
// const studentRoutes = require('./routes/studentRoutes');
// const courseRoutes = require('./routes/courseRoutes');
// const feeRoutes = require('./routes/feeRoutes');

// // Login endpoint
// app.post('/api/login', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ id: user._id, email: user.email }, 'your_jwt_secret', { expiresIn: '1h' });
//     res.status(200).json({ token, user: { email: user.email, role: user.role } });
//   } catch (err) {
//     console.error("Error logging in:", err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // PUT endpoint to update a user
// app.put('/api/users/:id', async (req, res) => {
//   const { fullName, email, role } = req.body;
//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, {
//       fullName,
//       email,
//       role
//     }, { new: true });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.status(200).json(user);
//   } catch (err) {
//     console.error("Error updating user:", err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // DELETE endpoint to delete a user
// app.delete('/api/users/:id', async (req, res) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.status(200).json({ message: 'User deleted successfully' });
//   } catch (err) {
//     console.error("Error deleting user:", err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Endpoint to get all users
// app.get("/api/users", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (err) {
//     console.error("Error fetching users:", err);
//     res.status(500).json({ message: "Server error." });
//   }
// });

// // Use routes
// app.use('/api/students', studentRoutes);
// app.use('/api/courses', courseRoutes);
// app.use('/api/fee', feeRoutes);

// // Server Listening
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });






//3
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require('bcrypt'); // For hashing passwords
const jwt = require('jsonwebtoken'); // For generating tokens

const app = express();

app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/schooldb1")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Import models
const User = require('./models/User');
const Student = require('./models/Student');
const Course = require('./models/Course');
const Settings = require('./models/Settings');

// Import routes
const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');
const feeRoutes = require('./routes/feeRoutes');
const settingsRoutes = require('./routes/settingsRoutes');

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, 'your_jwt_secret', { expiresIn: '1h' });
    res.status(200).json({ token, user: { email: user.email, role: user.role } });
  } catch (err) {
    console.error("Error logging in:", err);
    res.status(500).json({ message: 'Server error' });
  }
});

// PUT endpoint to update a user
app.put('/api/users/:id', async (req, res) => {
  const { fullName, email, role } = req.body;
  try {
    const user = await User.findByIdAndUpdate(req.params.id, {
      fullName,
      email,
      role
    }, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE endpoint to delete a user
app.delete('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Endpoint to get all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ message: "Server error." });
  }
});
// Import routes
//const studentRoutes = require('./routes/studentRoutes');
//const courseRoutes = require('./routes/courseRoutes');

// Use routes
app.use('/api/students', studentRoutes);  // Endpoint for students
app.use('/api/courses', courseRoutes);    // Endpoint for courses

// Use routes
app.use('/api/students', studentRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/fee', feeRoutes);
app.use('/api/settings', settingsRoutes);

// Server Listening
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


















































































































































































































































// const express = require("express");
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const studentRoutes = require('./routes/studentRoutes'); // Import student routes
// const routes = require('./routes'); // Import other routes, if any

// const app = express(); // Initialize app before using routes

// app.use(bodyParser.json()); // Parse JSON data
// app.use(cors()); // Enable CORS

// // MongoDB Connection
// mongoose
//   .connect("mongodb://127.0.0.1:27017/schooldb1", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("Error connecting to MongoDB:", err));

// // User Schema and Model
// const userSchema = new mongoose.Schema({
//   fullName: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now },
// });

// const User = mongoose.model("User", userSchema);

// // Routes

// // Registration Endpoint
// app.post("/api/register", async (req, res) => {
//   const { fullName, email, password, role } = req.body;

//   // Input validation
//   if (!fullName || !email || !password || !role) {
//     return res.status(400).json({ message: "All fields are required." });
//   }

//   try {
//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create and save user
//     const newUser = new User({
//       fullName,
//       email,
//       password: hashedPassword,
//       role,
//     });

//     await newUser.save();
//     res.status(201).json({ message: "User registered successfully!" });
//   } catch (err) {
//     if (err.code === 11000) {
//       return res.status(400).json({ message: "Email already exists." });
//     }
//     console.error("Error registering user:", err);
//     res.status(500).json({ message: "Server error." });
//   }
// });

// // Login Endpoint
// app.post("/api/login", async (req, res) => {
//   const { email, password } = req.body;

//   // Input validation
//   if (!email || !password) {
//     return res.status(400).json({ message: "Email and password are required." });
//   }

//   try {
//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: "User not found." });
//     }

//     // Compare passwords
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid credentials." });
//     }

//     res.status(200).json({ message: "Login successful!", user });
//   } catch (err) {
//     console.error("Error logging in user:", err);
//     res.status(500).json({ message: "Server error." });
//   }
// });

// // Student Routes
// app.use('/api/students', studentRoutes); // Use student routes for handling student-related API requests

// // Server Listening
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });




























































































// // // File: server.js

// // const express = require('express');
// // const mongoose = require('mongoose');
// // const dotenv = require('dotenv');
// // const userRoutes = require('./routes/userRoutes');
// // const studentRoutes = require('./routes/studentRoutes');

// // const app = express();

// // dotenv.config();

// // // Middleware
// // app.use(express.json());

// // // MongoDB Connection
// // mongoose.connect('mongodb://localhost:27017/schooldb1')
// //     .then(() => console.log('Database connected'))
// //     .catch(err => console.log(err));


// // // Routes
// // app.use('/api/users', userRoutes);
// // app.use('/api/students', studentRoutes);

// // // Start Server
// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));























































// // const express = require('express');
// // const mongoose = require('mongoose');
// // const bcrypt = require('bcrypt');
// // const jwt = require('jsonwebtoken');
// // const cors = require('cors');
// // const studentRoutes = require('./routes/studentRoutes'); // Import student routes
// // const userRoutes = require('./routes/userRoutes'); // Import user routes

// // const app = express();
// // app.use(express.json());
// // app.use(cors());

// // // MongoDB Connection
// // mongoose.connect('mongodb://localhost:27017/schoolDB', { useNewUrlParser: true, useUnifiedTopology: true })
// //   .then(() => {
// //     console.log('Database connected successfully');
// //   })
// //   .catch((error) => {
// //     console.error('Error connecting to the database:', error);
// //   });

// // // Admin Schema
// // const adminSchema = new mongoose.Schema({
// //     username: String,
// //     email: { type: String, unique: true },
// //     password: String,
// // });

// // const Admin = mongoose.model('Admin', adminSchema);

// // // Login API
// // app.post('/api/login', async (req, res) => {
// //   const { email, password } = req.body;
// //   console.log(`Login request received for email: ${email}`); // Debug log

// //   try {
// //       const admin = await Admin.findOne({ email });
// //       if (!admin) {
// //           console.log(`User not found for email: ${email}`); // Debug log
// //           return res.status(404).json({ message: 'Admin not found' });
// //       }

// //       const isMatch = await bcrypt.compare(password, admin.password);
// //       if (!isMatch) {
// //           console.log(`Invalid credentials for email: ${email}`); // Debug log
// //           return res.status(400).json({ message: 'Invalid credentials' });
// //       }

// //       const token = jwt.sign({ id: admin._id }, 'secret', { expiresIn: '1h' });
// //       res.json({ message: 'Login successful', token, role: 'Admin' });
// //   } catch (error) {
// //       console.error(`Server error for email: ${email}`, error); // Debug log
// //       res.status(500).json({ message: 'Server error' });
// //   }
// // });

// // // Register API
// // app.post('/api/register', async (req, res) => {
// //     const { username, email, password } = req.body;

// //     try {
// //         const hashedPassword = await bcrypt.hash(password, 10);
// //         const admin = new Admin({ username, email, password: hashedPassword });
// //         await admin.save();
// //         res.json({ message: 'Admin registered successfully' });
// //     } catch (error) {
// //         res.status(500).json({ message: 'Server error' });
// //     }
// // });

// // // Use the student routes
// // app.use('/api/student', studentRoutes); 

// // // Use the user routes
// // app.use('/api/users', userRoutes);

// // const PORT = 5000;
// // app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));




// // // const express = require('express');
// // // const mongoose = require('mongoose');
// // // const cors = require('cors');
// // // const userRoutes = require('./routes/userRoutes'); // Import user routes
// // // const bcrypt = require('bcrypt');
// // // const jwt = require('jsonwebtoken');
// // // const User = require('./models/User'); // Import the User model

// // // const app = express();
// // // app.use(express.json());
// // // app.use(cors());

// // // // MongoDB Connection
// // // mongoose.connect('mongodb://localhost:27017/schoolDB', {
// // //   useNewUrlParser: true,
// // //   useUnifiedTopology: true,
// // // })
// // //   .then(() => {
// // //     console.log('Database connected successfully');
// // //   })
// // //   .catch((error) => {
// // //     console.error('Error connecting to the database:', error);
// // //   });

// // // // Login API
// // // app.post('/api/login', async (req, res) => {
// // //   const { email, password } = req.body;

// // //   try {
// // //     console.log('Login request received for email:', email); // Log email
// // //     const user = await User.findOne({ email });
// // //     if (!user) {
// // //       console.log('User not found for email:', email); // Log if user not found
// // //       return res.status(404).json({ message: 'User not found' });
// // //     }

// // //     const isMatch = await bcrypt.compare(password, user.password);
// // //     if (!isMatch) {
// // //       console.log('Invalid credentials for email:', email); // Log if password doesn't match
// // //       return res.status(400).json({ message: 'Invalid credentials' });
// // //     }

// // //     const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });
// // //     res.json({ message: 'Login successful', token, role: user.role });
// // //   } catch (error) {
// // //     console.error('Server error during login:', error); // Log server error
// // //     res.status(500).json({ message: 'Server error' });
// // //   }
// // // });

// // // // Register API
// // // app.post('/api/register', async (req, res) => {
// // //   const { fullName, email, password, role } = req.body;

// // //   try {
// // //     const hashedPassword = await bcrypt.hash(password, 10);
// // //     const newUser = new User({ fullName, email, password: hashedPassword, role });
// // //     await newUser.save();
// // //     res.json({ message: 'User registered successfully' });
// // //   } catch (error) {
// // //     res.status(500).json({ message: 'Server error' });
// // //   }
// // // });

// // // // Use the user routes
// // // app.use('/api/users', userRoutes);

// // // const PORT = 5000;
// // // app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));












// server.js
// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const bcrypt = require("bcryptjs");
// const User = require("./models/User"); // Import User model

// const app = express(); // Initialize app

// app.use(bodyParser.json()); // Parse JSON data
// app.use(cors()); // Enable CORS

// // MongoDB Connection
// mongoose
//   .connect("mongodb://127.0.0.1:27017/schooldb1")
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("Error connecting to MongoDB:", err));

// // Registration Endpoint
// app.post("/api/register", async (req, res) => {
//   const { fullName, email, password, role } = req.body;

//   // Input validation
//   if (!fullName || !email || !password || !role) {
//     return res.status(400).json({ message: "All fields are required." });
//   }

//   try {
//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create and save user
//     const newUser = new User({
//       fullName,
//       email,
//       password: hashedPassword,
//       role,
//     });

//     await newUser.save();
//     res.status(201).json({ message: "User registered successfully!" });
//   } catch (err) {
//     if (err.code === 11000) {
//       return res.status(400).json({ message: "Email already exists." });
//     }
//     console.error("Error registering user:", err);
//     res.status(500).json({ message: "Server error." });
//   }
// });

// // Login Endpoint
// app.post("/api/login", async (req, res) => {
//   const { email, password } = req.body;

//   // Input validation
//   if (!email || !password) {
//     return res.status(400).json({ message: "Email and password are required." });
//   }

//   try {
//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: "User not found." });
//     }

//     // Compare passwords
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid credentials." });
//     }

//     res.status(200).json({ message: "Login successful!", user });
//   } catch (err) {
//     console.error("Error logging in user:", err);
//     res.status(500).json({ message: "Server error." });
//   }
// });

// // Endpoint to get all users
// app.get("/api/users", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (err) {
//     console.error("Error fetching users:", err);
//     res.status(500).json({ message: "Server error." });
//   }
// });


// // DELETE endpoint to delete a user
// app.delete('/api/users/:id', async (req, res) => {
//   try {
//     await User.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: 'User deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // PUT endpoint to update a user
// app.put('/api/users/:id', async (req, res) => {
//   const { fullName, email, role } = req.body;
//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, {
//       fullName,
//       email,
//       role
//     }, { new: true });
//     res.status(200).json(user);
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Server Listening
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });






































// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const bcrypt = require('bcrypt'); // For hashing passwords
// const jwt = require('jsonwebtoken'); // For generating tokens

// const app = express(); 

// app.use(bodyParser.json()); 
// app.use(cors()); 

// // MongoDB Connection
// mongoose
//   .connect("mongodb://127.0.0.1:27017/schooldb1")
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("Error connecting to MongoDB:", err));

// // Import the User model
// const User = require('./models/User');

// // Import the Student model
// const Student = require('./models/Student');

// // Import student routes
// const studentRoutes = require('./routes/studentRoutes');

// // Login endpoint
// app.post('/api/login', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ id: user._id, email: user.email }, 'your_jwt_secret', { expiresIn: '1h' });
//     res.status(200).json({ token, user: { email: user.email, role: user.role } });
//   } catch (err) {
//     console.error("Error logging in:", err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // PUT endpoint to update a user
// app.put('/api/users/:id', async (req, res) => {
//   const { fullName, email, role } = req.body;
//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, {
//       fullName,
//       email,
//       role
//     }, { new: true });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.status(200).json(user);
//   } catch (err) {
//     console.error("Error updating user:", err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // DELETE endpoint to delete a user
// app.delete('/api/users/:id', async (req, res) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.status(200).json({ message: 'User deleted successfully' });
//   } catch (err) {
//     console.error("Error deleting user:", err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Endpoint to get all users
// app.get("/api/users", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (err) {
//     console.error("Error fetching users:", err);
//     res.status(500).json({ message: "Server error." });
//   }
// });

// // Use student routes
// app.use('/api/students', studentRoutes);

// // Server Listening
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });