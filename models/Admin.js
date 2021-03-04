const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
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
        required: [true, 'Необходимо задать имя'],
        maxlength: [30, 'Максимальный размер 30 символов'],
    },
    firstName: {
        type: String,
        required: [true, 'Необходимо задать фамилию'],
        maxlength: [40, 'Максимальный размер 40 символов'],
    },
    secondName: {
        type: String,
        required: [true, 'Необходимо задать отчество'],
        maxlength: [40, 'Максимальный размер 40 символов'],
    },
    phone: {
        type: Number,
        required: [true, 'Необходимо указать номер'],
        unique: [true, 'Такой номер телефона уже зарегистрирован'],
    },
    email: {
        type: String,
        required: [true, 'Необходимо задать email'],
        maxlength: [100, 'Превышен лимит символов'],
        unique: [true, 'Такой email уже зарегистрирован'],
    },
});

module.exports = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);