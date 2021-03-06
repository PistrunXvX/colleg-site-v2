import dbConnect from '../../../utils/dbConnect';
import LessonSchema from '../../../models/Lesson';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch(method) {
        case 'GET':
            try {
                const lessons = await LessonSchema.find({});

                res.status(200).json({ success: true, data: lessons });
            } catch (error) {
                res.status(400).json({ success: false });
            }
        break;

        case 'POST':
            try {
                const lesson = await LessonSchema.create(req.body);

                res.status(201).json({ success: true, data: lesson });
            } catch (error) {
                res.status(400).json({ success: false });
            }
        break;

        default:
            res.status(400).json({ success: false });
    }

}