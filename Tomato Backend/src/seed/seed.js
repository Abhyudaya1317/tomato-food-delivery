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
                password: hashedPassword,
                phone: "9876500001",
            },
            {
                name: "Riya Sharma",
                email: "riya.sharma@gmail.com",
                password: hashedPassword,
                phone: "9876500002",
            },
            {
                name: "Kabir Verma",
                email: "kabir.verma@gmail.com",
                password: hashedPassword,
                phone: "9876500003",
            },
            {
                name: "Sneha Kapoor",
                email: "sneha.kapoor@gmail.com",
                password: hashedPassword,
                phone: "9876500004",
            },
            {
                name: "Vivaan Singh",
                email: "vivaan.singh@gmail.com",
                password: hashedPassword,
                phone: "9876500005",
            },
            {
                name: "Ananya Gupta",
                email: "ananya.gupta@gmail.com",
                password: hashedPassword,
                phone: "9876500006",
            },
            {
                name: "Karan Malhotra",
                email: "karan.malhotra@gmail.com",
                password: hashedPassword,
                phone: "9876500007",
            },
            {
                name: "Ishita Jain",
                email: "ishita.jain@gmail.com",
                password: hashedPassword,
                phone: "9876500008",
            },
            {
                name: "Aarav Bansal",
                email: "aarav.bansal@gmail.com",
                password: hashedPassword,
                phone: "9876500009",
            },
            {
                name: "Meera Nair",
                email: "meera.nair@gmail.com",
                password: hashedPassword,
                phone: "9876500010",
            },
            {
                name: "Dev Patel",
                email: "dev.patel@gmail.com",
                password: hashedPassword,
                phone: "9876500011",
            },
            {
                name: "Priya Chawla",
                email: "priya.chawla@gmail.com",
                password: hashedPassword,
                phone: "9876500012",
            },
            {
                name: "Yash Khanna",
                email: "yash.khanna@gmail.com",
                password: hashedPassword,
                phone: "9876500013",
            },
            {
                name: "Neha Sethi",
                email: "neha.sethi@gmail.com",
                password: hashedPassword,
                phone: "9876500014",
            },
            {
                name: "Rohan Desai",
                email: "rohan.desai@gmail.com",
                password: hashedPassword,
                phone: "9876500015",
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