import mongoose from "mongoose";

require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/studentApp";

mongoose.set('strictQuery', false);

const db = async () => {
    try {
        await mongoose.connect(MONGODB_URI)
        console.log("Connected to MongoDB");
    }catch (error){
        console.error("Error connecting to MongoDB:", error);
    }
}

export default db;  