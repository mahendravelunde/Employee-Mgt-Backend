const express = require('express');
const { createEmployee, getEmployees, updateEmployee, deleteEmployee } = require('../controllers/employeeController');
const upload = require('../middleware/uploadMiddleware');

const router = express.Router();

router.post('/', upload.single('photo'), createEmployee);
router.get('/', getEmployees);
router.put('/:id', upload.single('photo'), updateEmployee);
router.delete('/:id', deleteEmployee);

module.exports = router;
