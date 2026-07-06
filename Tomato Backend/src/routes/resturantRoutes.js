import express from "express";
import { add, deleteResturant } from "../Controllers/resturantController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import { restaurantSchema } from "../validators/resturantValidators.js";

const router=express.Router();

router.use(authMiddleware);

router.post("/add",validateRequest(restaurantSchema),add);

router.delete("/:id",deleteResturant);

export default router;