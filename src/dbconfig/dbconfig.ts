// import { log } from "console";
import mongoose, { connection } from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection=mongoose.connection;
        connection.on('connected',()=>{
            console.log("mongo connect");
            
        })
        connection.on('error',(err)=>{
            console.log("err"+ err);
            process.exit();
            
        })
    } catch (error) {
        console.log(error);
        
    }
}