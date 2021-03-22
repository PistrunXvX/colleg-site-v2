import dbConnect from '../../../utils/dbConnect';
import TeacherSchema from '../../../models/Teacher';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch(method) {
        case 'GET':
            try {
                const teachers = await TeacherSchema.find({});

                res.status(200).json({ success: true, data: teachers });
            } catch (error) {
                res.status(400).json({ success: false });
            }
        break;

        case 'POST':
            try {
                const teacher = await TeacherSchema.create(req.body);

                res.status(201).json({ success: true, data: teacher });
            } catch (error) {
                res.status(400).json({ success: false });
            }
        break;

        default:
            res.status(400).json({ success: false });
    }

}