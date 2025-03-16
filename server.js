require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const employeeRoutes = require('./routes/employeeRoutes');

const app = express();

// Middleware
app.use(express.json());
// app.use(cors());
app.use(cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: true, // Allow cookies if needed
  }));
  

app.use('/uploads', express.static('uploads'));

// Connect to Database
connectDB();

// Routes
app.use('/employees', employeeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
