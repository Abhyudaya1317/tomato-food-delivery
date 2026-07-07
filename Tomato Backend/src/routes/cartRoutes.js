import express from "express";
import { addToCart, getCart, removeFromCart, updateQuantity } from "../Controllers/cartController.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import { addToCartSchema, updateSchema } from "../validators/cartValidators.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";


const router=express.Router();

router.use(authMiddleware);

router.get("/get",getCart);

router.post("/add",validateRequest(addToCartSchema), addToCart);

router.patch("/update",validateRequest(updateSchema),updateQuantity);

router.delete("/:id",removeFromCart);

export default router;