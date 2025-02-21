import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"



const connectDB = async () => {
    try {
        const connectDB = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("Database connected securely");

    } catch (error) {
        console.log("Failed to connect the database");


    }
}

export default connectDB;