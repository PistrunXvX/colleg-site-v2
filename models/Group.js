const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: [true, 'Такая группа уже существует'],
        maxlength: [100, 'Превышен лимит символов'],
    },
    faculty: {
        type: String,
        required: true,
    },
    students: [],
});

module.exports = mongoose.models.Group || mongoose.model('Group', GroupSchema);