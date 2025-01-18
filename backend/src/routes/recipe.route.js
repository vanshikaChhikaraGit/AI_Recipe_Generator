import e from "express";
import { generateRecipe, saveRecipe } from "../controllers/recipe.controller.js";
import { authMiddleWare } from "../middleware/auth.middleware.js";

const router = e.Router()

router.post("/generate-recipe",authMiddleWare,generateRecipe)
router.post("/save-recipe",authMiddleWare,saveRecipe)

export default router