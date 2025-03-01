const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contact: { type: String, required: true },
    position: { type: String, required: true },
    photo: { type: String },
});

module.exports = mongoose.model('Employee', employeeSchema);
