const mongoose = require('mongoose');

const FacultySchema = new mongoose.Schema({
    faculty: {
        type: String,
        required: true,
        unique: [true, 'Такое направление уже существует'],
        maxlength: [100, 'Превышен лимит символов'],
    },
});

module.exports = mongoose.models.Faculty || mongoose.model('Faculty', FacultySchema);