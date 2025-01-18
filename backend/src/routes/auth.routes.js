import e from "express";
import { login, logout, signup,initiateOAuth,handleOAuthCallback } from "../controllers/auth.controller.js";

const router = e.Router()

router.post("/login",login)
router.post("/signup",signup)
router.post("/logout",logout)

// OAuth routes
router.get("/oauth/google", initiateOAuth);
router.get("/oauth/google/callback", handleOAuthCallback);

export default router