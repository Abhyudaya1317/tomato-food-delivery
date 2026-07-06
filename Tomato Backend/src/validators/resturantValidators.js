import zod  from "zod";

export const restaurantSchema = zod.object({
    name: zod
        .string()
        .trim()
        .min(3, "Restaurant name must be at least 3 characters"),

    description: zod
        .string()
        .trim()
        .min(10, "Description must be at least 10 characters"),

    address: zod
        .string()
        .trim()
        .min(5, "Address is required"),

    phone: zod
        .string()
        .length(10, "Phone number must be exactly 10 digits"),

    email: zod
        .string()
        .email("Invalid email address"),

    cuisine: zod
        .array(zod.string())
        .min(1, "At least one cuisine is required"),

    deliveryTime: zod
        .number()
        .positive("Delivery time must be greater than 0"),

    minimumOrder: zod
        .number()
        .nonnegative("Minimum order cannot be negative"),

    isOpen: zod.boolean()
});