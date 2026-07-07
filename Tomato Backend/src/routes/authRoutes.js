import express from "express";

import { getProfile, register, login, logout, updateProfile }  from "../Controllers/authController.js";
import { deleteUser } from "../Controllers/deleteController.js";

import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import { registerSchema, loginSchema } from "../validators/authValidators.js";
const router = express.Router();

router.get("/view", getProfile);

router.post("/register",validateRequest(registerSchema), register);

router.post("/login",validateRequest(loginSchema), authMiddleware, login);

router.post("/logout", logout);

router.patch("/update",updateProfile)

router.delete("/:id", authMiddleware, deleteUser);

export default router;



