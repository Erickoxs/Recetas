import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {

    try {

        await mongoose.connect(process.env.MONGO_URI || '');
        console.log('MongoDb connected');
    } catch (error){
        console.error(`Error: ${error}`);
        process.exit(1);
    }
    
};

export default connectDB;