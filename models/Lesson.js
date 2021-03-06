const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: [60, 'Превышен лимит символов'],
    },
    teacher: {
        type: String,
        require: true,
    },
    cabinet: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.models.Lesson || mongoose.model('Lesson', LessonSchema);