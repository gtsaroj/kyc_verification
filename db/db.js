import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async () => {
    try {
        const connectInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) 
        console.log(`MongoDB connected ! DB hosted : ${connectInstance.connection.host}`)
    } catch (error) {
console.log(`connection failed : ${error}`)
    }
}