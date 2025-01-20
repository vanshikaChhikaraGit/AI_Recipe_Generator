import mongoose from "mongoose"

export const connectDB = async()=>{
    try {
        const success = await mongoose.connect(process.env.MONGODB_URI);
        console.log("successfully connected to database!")
    } catch (error) {
        console.log("error in database connection component:- lib/db.js",error)
    }
}