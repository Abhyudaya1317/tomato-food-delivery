import zod from "zod";

export const foodSchema = zod.object({
    name: zod
        .string()
        .trim()
        .min(3, "Food name must be at least 3 characters long"),

    price: zod
        .number()
        .positive("Price must be greater than 0"),

    image: zod
        .string()
        .url("Image must be a valid URL"),

    category: zod.enum([
        "Pizza",
        "Burger",
        "Chinese",
        "North Indian",
        "South Indian",
        "Dessert",
        "Beverage",
    ]),

    isVeg: zod.boolean().optional(),
});

