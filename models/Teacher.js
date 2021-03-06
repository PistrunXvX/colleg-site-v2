const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        maxlength: [40, 'Превышен лимит символов'],
    },
    firstName: {
        type: String,
        required: true,
        maxlength: [40, 'Превышен лимит символов'],
    },
    secondName: {
        type: String,
        required: true,
        maxlength: [40, 'Превышен лимит символов'],
    },
    phone: {
        type: Number,
        required: true,
        unique: [true, 'Такой телефон уже зарегистрирован'],
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'Такой email уже зарегистрирован'],
    }
});

module.exports = mongoose.models.Teacher || mongoose.model('Teacher', TeacherSchema);