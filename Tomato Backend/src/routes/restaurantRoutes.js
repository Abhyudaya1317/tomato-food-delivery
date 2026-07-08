import express from "express";
import { getRestaurant, add,updateRestaurant, deleteResturant } from "../Controllers/restaurantController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import { restaurantSchema } from "../validators/resturantValidators.js";

const router=express.Router();

router.get("/view",validateRequest(restaurantSchema),authMiddleware,getRestaurant)

router.post("/add",validateRequest(restaurantSchema),authMiddleware, add);

router.put("/update",authMiddleware,updateRestaurant)

router.delete("/:id",authMiddleware, deleteResturant);

export default router;