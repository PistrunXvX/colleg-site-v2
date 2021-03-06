import dbConnect from '../../../utils/dbConnect';
import FacultySchema from '../../../models/Faculty';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch(method) {
        case 'GET':
            try {
                const facultys = await FacultySchema.find({});

                res.status(200).json({ success: true, data: facultys });
            } catch (error) {
                res.status(400).json({ success: false });
            }
        break;

        case 'POST':
            try {
                const faculty = await FacultySchema.create(req.body);

                res.status(201).json({ success: true, data: faculty });
            } catch (error) {
                res.status(400).json({ success: false });
            }
        break;

        default:
            res.status(400).json({ success: false });
    }

}