import mongoose from "mongoose";

export default async function connect(){
   await mongoose.connect(process.env.MONOGO_URL)
    console.log("DataBase Connected");
}