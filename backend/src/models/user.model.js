import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email:{
            type:String,
            required:true,
            unique:true
        },
        fullName:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required: function() {
              return !this.googleId; // password is required if googleId is not provided
            },
            minLength:6
        },
        googleId:{
            type:String
        },
        savedRecipes: [
            {
              title: {
                type: String,
                required: true,
              },
              description: {
                type: String,
                required: true,
              },
              servings: {
                type: String, // Number of servings
              },
              prepTime:{
                type:String,
              },
              ingredients: {
                type: [String], // Array of ingredients
                required: true,
              },
              steps: {
                type: [String], // Array of steps for the recipe
                required: true,
              },
            },
          ],
    },
    {timestamps:true}
)

const User = mongoose.model('User', userSchema);

export default User;

