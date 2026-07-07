import express from "express";
import {getFoods, addfood,updateFood, deletefood} from "../Controllers/foodController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import { foodSchema } from "../validators/foodValidators.js";


const router=express.Router();

router.get("/view",getFoods);

router.post("/add",validateRequest(foodSchema),authMiddleware, addfood);

router.put("/update",authMiddleware, updateFood);

router.delete("/:id",authMiddleware, deletefood);

export default router;