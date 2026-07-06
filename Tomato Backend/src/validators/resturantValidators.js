import zod  from "zod";
export const restaurantSchema = zod.object({
    name: zod.string().trim().min(3),

    image: zod.string().optional(),

    email: zod.string().email(),

    address: zod.string().trim().min(5),

    cuisine: zod.enum([
        "North Indian",
        "South Indian",
        "Chinese",
        "Italian",
        "Fast Food",
        "Cafe",
        "Dessert",
    ]),
});