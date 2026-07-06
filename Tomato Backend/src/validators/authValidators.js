import zod from "zod";

export const registerSchema = z.object({
    name:z.string().trim().min(3, "Name must be at least 3 characters long"),
    email:z.string().trim().toLowerCase().email("Invalid email address"),
    password:z.string().min(6, "Password must be at least 6 characters long"),
    phone:z.coerce.number().min(1000000000, "Phone number must be at least 10 digits long").max(9999999999, "Phone number must be exactly 10 digits long").optional(),
    profileImage:z.string().optional()
})

export const loginSchema = z.object({
    email:z.string().trim().toLowerCase().email("Invalid email address"),
    password:z.string().min(6, "Password must be at least 6 characters long")
})
