const Employee = require('../models/Employee');


exports.createEmployee = async (req, res) => {
    try {
        const { name, email, contact, position } = req.body;
        const photo = req.file ? `/uploads/${req.file.filename}` : '';
        const newEmployee = new Employee({ name, email, contact, position, photo });
        await newEmployee.save();
        res.status(201).json(newEmployee);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateEmployee = async (req, res) => {
    try {
        const { name, email, contact, position } = req.body;
        let photo = req.file ? `/uploads/${req.file.filename}` : undefined;
        const updatedEmployee = await Employee.findByIdAndUpdate(
            req.params.id,
            { name, email, contact, position, ...(photo && { photo }) },
            { new: true }
        );
        res.status(200).json(updatedEmployee);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteEmployee = async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Employee deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
