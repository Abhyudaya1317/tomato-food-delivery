import zod  from "zod";

export const addToCartSchema = zod.object({
    foodId: zod.string().min(1, "Food ID is required"),
});

export const updateSchema = zod.object({
    quantity: zod
        .number()
        .int()
        .min(1, "Quantity must be at least 1"),
});