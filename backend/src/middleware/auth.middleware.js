import User from "../models/user.model.js";
import jwt from "jsonwebtoken"

export const authMiddleWare = async(req,res,next)=>{
    try {
        const token = req.cookies.jwt
        if(!token){
            res.status(400).json({message:"unauthorized- token not found"})
        }
        const decode = jwt.verify(token,process.env.JWT_SECRET)
        if(!decode){
            return res.status(401).json({ message: "Unauthorized - Invalid Token" });
        }
    
        const user = await User.findById(decode.userId).select("-password")
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        req.user = user
        next()
    } catch (error) {
        console.error("Error in auth middleware:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}