const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);
    if (extName && mimeType) {
        return cb(null, true);
    } else {
        return cb(new Error('Only .jpeg, .jpg, .png files are allowed'));
    }
};

module.exports = multer({ 
    storage, 
    limits: { fileSize: 2 * 1024 * 1024 }, // 2MB limit
    fileFilter
});
