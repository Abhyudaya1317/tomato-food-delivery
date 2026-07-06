import zod from "zod";

const registerSchema = zod.object({
    name:zod.string().trim().min(3, "Name must be at least 3 characters long"),
    email:zod.string().trim().toLowerCase().email("Invalid email address"),
    password:zod.string().min(6, "Password must be at least 6 characters long"),
    phone:zod.coerce.number().min(1000000000, "Phone number must be at least 10 digits long").max(9999999999, "Phone number must be exactly 10 digits long").optional(),
    profileImage:zod.string().optional()
})

const loginSchema = zod.object({
    email:zod.string().trim().toLowerCase().email("Invalid email address"),
    password:zod.string().min(6, "Password must be at least 6 characters long")
})

export {registerSchema, loginSchema}