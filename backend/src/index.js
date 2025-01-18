import dotenv from "dotenv"
import path from "path"
import express from "express"
import { connectDB } from "./lib/db.js"
import authRoutes from "./routes/auth.routes.js"
import cookieParser from "cookie-parser"
import recipeRoutes from "./routes/recipe.route.js"
import cors from "cors"
dotenv.config();
const app = express()
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use("/api/auth",authRoutes)
app.use("/api/recipe",recipeRoutes)
app.listen('5001',()=>{
    console.log("server running on port 5001")
    connectDB()
})