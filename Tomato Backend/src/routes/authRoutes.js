import express from "express";

import {register,login,logout}  from "../Controllers/authController.js";
import { deleteUser } from "../Controllers/deleteController.js";

import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import { registerSchema, loginSchema } from "../validators/authValidators.js";
const router = express.Router();

// router.use(authMiddleware);

router.post("/register",validateRequest(registerSchema), register);

router.post("/login",validateRequest(loginSchema), authMiddleware, login);

router.post("/logout", logout);

router.delete("/:id", authMiddleware, deleteUser);

export default router;



