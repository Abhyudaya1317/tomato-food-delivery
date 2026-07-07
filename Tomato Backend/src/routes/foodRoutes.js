import express from "express";
import { addfood,deletefood } from "../Controllers/foodController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import { foodSchema } from "../validators/foodValidators.js";


const router=express.Router();

router.use(authMiddleware);

router.post("/add",validateRequest(foodSchema), addfood);

router.delete("/:id", deletefood)

export default router;