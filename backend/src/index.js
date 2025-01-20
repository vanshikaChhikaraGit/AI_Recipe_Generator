import dotenv from "dotenv"
import express from "express"
import { connectDB } from "./lib/db.js"
import authRoutes from "./routes/auth.routes.js"
import cookieParser from "cookie-parser"
import recipeRoutes from "./routes/recipe.route.js"
import cors from "cors"
import path from "path"

dotenv.config();
const app = express()
const port = process.env.PORT
const __dirname = path.resolve()
app.use(cors({
    origin:"http://127.0.0.1:5173",
    Credential:true}
))
app.use(cookieParser())
app.use(express.json())
if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))
  
    app.get("*",(req,res)=>{
      res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
    })
  }

app.use("/api/auth",authRoutes)
app.use("/api/recipe",recipeRoutes)

// Ping route to keep the app awake
app.get('/ping', (req, res) => {
    res.send('Pong');
  });
app.listen(port,()=>{
    console.log("server running on port:"+port)
    connectDB()
})
