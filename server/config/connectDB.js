import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

if(!process.env.MONGO_URI) {
    throw new Error(
        "Please Provide MONGODB_URI in the .env file"
    )
}

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected DB")
    } catch (error) {
        console.log("MongoDB connect Error", error)
        process.exit(1)}
}

export default connectDB;