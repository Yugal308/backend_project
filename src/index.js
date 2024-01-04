// require('dotenv').config()
import dotenv from "dotenv"
import connectDB from './db/index.js'
import { app } from "./app.js"

dotenv.config()

connectDB()
.then(()=>{
    app.on("error",(err)=>{
        console.log("ERRR: ",err);
        throw err;
    })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("MongoDB Connection failed",error);
})