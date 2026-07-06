import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "../model/userModel.js";
import dns from "dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);
dotenv.config();

const seedUsers = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB Connected");

        // Delete existing users (optional)
        //await User.deleteMany();

        const hashedPassword = await bcrypt.hash("Password@123", 10);

        await User.insertMany([
            {
                name: "Arjun Mehta",
                email: "arjun.mehta@gmail.com",
                password: hashedPassword
            },
            {
                name: "Riya Sharma",
                email: "riya.sharma@gmail.com",
                password: hashedPassword
            },
            {
                name: "Kabir Verma",
                email: "kabir.verma@gmail.com",
                password: hashedPassword
            },
            {
                name: "Sneha Kapoor",
                email: "sneha.kapoor@gmail.com",
                password: hashedPassword
            },
            {
                name: "Vivaan Singh",
                email: "vivaan.singh@gmail.com",
                password: hashedPassword
            },
            {
                name: "Ananya Gupta",
                email: "ananya.gupta@gmail.com",
                password: hashedPassword
            },
            {
                name: "Karan Malhotra",
                email: "karan.malhotra@gmail.com",
                password: hashedPassword
            },
            {
                name: "Ishita Jain",
                email: "ishita.jain@gmail.com",
                password: hashedPassword
            },
            {
                name: "Aarav Bansal",
                email: "aarav.bansal@gmail.com",
                password: hashedPassword
            },
            {
                name: "Meera Nair",
                email: "meera.nair@gmail.com",
                password: hashedPassword
            },
            {
                name: "Dev Patel",
                email: "dev.patel@gmail.com",
                password: hashedPassword
            },
            {
                name: "Priya Chawla",
                email: "priya.chawla@gmail.com",
                password: hashedPassword
            },
            {
                name: "Yash Khanna",
                email: "yash.khanna@gmail.com",
                password: hashedPassword
            },
            {
                name: "Neha Sethi",
                email: "neha.sethi@gmail.com",
                password: hashedPassword
            },
            {
                name: "Rohan Desai",
                email: "rohan.desai@gmail.com",
                password: hashedPassword
            },
        ]);

        console.log("15 users inserted successfully!");

        await mongoose.disconnect();
        console.log("MongoDB Disconnected");
        process.exit(0);

    } catch (error) {
        console.error(error);
        await mongoose.disconnect();
        console.log("MongoDB Disconnected");
        process.exit(1);
    }
};

seedUsers();