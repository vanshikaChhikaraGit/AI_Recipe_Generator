import jwt from "jsonwebtoken"
import User from "../models/user.model.js"
import bcrypt from "bcrypt"
import { generateJWT } from "../lib/utils.js"

export const signup = async(req,res)=>{
    const { fullName,email,password } = req.body
    try {
        if(!fullName||!email||!password){
            return res.status(400).json({message:"all fields are required"})
        }
        if(password.length<6){
            return res.status(400).json({message:"password must have atleast 6 characters"})
        }
        const user = await User.findOne({ email })
        if(user){
            return res.status(400).json({message:"user with this email already exists"})
        }
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password,salt)

        const newUser = new User({
            email,
            fullName,
            password:hashPassword
        })

        if(newUser){
            generateJWT(newUser._id,res)
            await newUser.save()
            res.status(200).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            email:newUser.email,
            })
        }else{
            res.status(400).json({message:"invalid user data input"})
        }

    } catch (error) {
        console.log("error in the signup controller "+ error)
        res.status(500).json({message:"internal server error"})
    }

}
export const login = async(req,res)=>{

    const { email,password } = req.body
    try {
        if(!email||!password){
            return res.status(400).json({message:"all fields are required"})
        }
        if(password.length<6){
            return res.status(400).json({message:"password must have atleast 6 characters"})
        }
        const existingUser = await User.findOne({ email })
        if(!existingUser){
            return res.status(400).json({message:"user with this email does not exists"})
        }

        const isPasswordCorrect = await bcrypt.compare(password,existingUser.password)
        if(!isPasswordCorrect){
            return res.status(400).json({message:"incorrect user credentials"})
        }

         generateJWT(existingUser._id,res)
         res.status(200).json({
            _id:existingUser._id,
            fullName:existingUser.fullName,
            email:existingUser.email,
            })

    } catch (error) {
        console.log("error in the login controller "+ error)
        res.status(500).json({message:"internal server error"})
    }

}
export const logout = (req,res)=>{
    try {
     res.cookie("jwt","",{ maxAge:0 })
     res.status(200).json({message:"logged out successfully!"})
    } catch (error) {
     console.log("error in the logout controller "+ error)
     res.status(500).json({ message:"internal server error" })
    }
 }
export const initiateOAuth = (req,res)=>{
    const client_id = process.env.CLIENT_ID
    const redirectUri = process.env.REDIRECT_URI;
    const scope = "email profile";
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&access_type=offline`;

    res.redirect(authUrl)
}
export const handleOAuthCallback = async (req, res) => {
  const code = req.query.code;
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;
  const redirectUri = process.env.REDIRECT_URI;

  try {
    // Exchange authorization code for access token
    const authorizeToken = await axios.post("https://oauth2.googleapis.com/token", {
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: "authorization_code",
    });

    const { access_token } = authorizeToken.data;

    // Fetch user information from Google
    const userResponse = await axios.get("https://www.googleapis.com/oauth2/v2/userinfo", {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    const user = userResponse.data;

    // Check if the user already exists
    const existingUser = await User.findOne({ email: user.email });
    let userId;

    if (!existingUser) {
      // Create a new user if not found
      const newUser = new User({
        email: user.email,
        fullName: user.name,
        googleId: user.id,
      });

      await newUser.save();
      userId = newUser._id;

      res.status(201).json({
        message: "User registered successfully",
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
      });
    } else {
      // Existing user
      userId = existingUser._id;

      res.status(200).json({
        message: "User logged in successfully",
        _id: existingUser._id,
        fullName: existingUser.fullName,
        email: existingUser.email,
      });
    }

    // Generate and set the JWT token
    generateJWT(userId, res);

  } catch (error) {
    console.error("Error in OAuth callback:", error.message, error.stack);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};
