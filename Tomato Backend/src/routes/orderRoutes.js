import express from "express";
import { getOrder,place,deleteOrder } from "../Controllers/orderController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import { placeOrderSchema } from "../validators/orderValidators.js";

const router=express.Router();


router.get("/view",authMiddleware,getOrder);

router.post("/place",validateRequest(placeOrderSchema),authMiddleware,place);

router.delete("/:id",authMiddleware,deleteOrder);

export default router;