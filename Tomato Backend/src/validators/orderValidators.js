import zod from "zod";

export const placeOrderSchema = zod.object({
    customerName: zod
        .string()
        .trim()
        .min(3, "Customer name must be at least 3 characters long"),

    phone: zod
        .string()
        .length(10, "Phone number must be exactly 10 digits"),

    deliveryAddress: zod
        .string()
        .trim()
        .min(10, "Delivery address must be at least 10 characters long"),

    paymentMethod: zod.enum(
        ["Cash", "Card", "UPI"],
        {
            error: "Payment method must be Cash, Card or UPI",
        }
    ),
});