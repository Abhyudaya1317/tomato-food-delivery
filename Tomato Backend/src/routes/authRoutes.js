import express from "express";
import {register,login,logout}  from "../Controllers/authController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

// router.use(authMiddleware);

router.post("/register", register);

router.post("/login",authMiddleware, login);

router.post("/logout", logout);

export default router;



