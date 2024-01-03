import mongoose from "mongoose";
import {DB_NAME} from '../constants.js';

const connectDB = async () => {
    try{
        const connectionInst = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB Connected!! DB host: ${connectionInst.connection.host}`)
    } catch (err){
        console.log("MONGODB connection Failed!!!", err)
        process.exit(1);
    }
}

export default connectDB;