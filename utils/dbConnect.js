import mongoose, { Connection } from 'mongoose';

const connection = {};

async function dbConnect() {
    if(connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true, 
    });

    connection.isConnected = db.connections.readyState;

    console.log(Connection.isConnected);
};

export default dbConnect;