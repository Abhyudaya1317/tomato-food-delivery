import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";

import Restaurant from "../model/restaurantModel.js";
import User from "../model/userModel.js";

dns.setServers(["1.1.1.1", "8.8.8.8"]);
dotenv.config();

const seedRestaurant = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    // Optional
    // await Restaurant.deleteMany();

    const users = await User.find();

    if (users.length < 10) {
      throw new Error("Please seed users first.");
    }

    await Restaurant.insertMany([
      {
        name: "Spice Junction",
        image: "spice-junction.jpg",
        owner: users[0]._id,
        email: "spicejunction@gmail.com",
        address: "Model Town, Ludhiana",
        cuisine: "North Indian",
        rating: 4.5,
      },
      {
        name: "Madras Kitchen",
        image: "madras-kitchen.jpg",
        owner: users[1]._id,
        email: "madraskitchen@gmail.com",
        address: "Civil Lines, Jalandhar",
        cuisine: "South Indian",
        rating: 4.4,
      },
      {
        name: "Dragon Wok",
        image: "dragon-wok.jpg",
        owner: users[2]._id,
        email: "dragonwok@gmail.com",
        address: "Sector 22, Chandigarh",
        cuisine: "Chinese",
        rating: 4.3,
      },
      {
        name: "Bella Italia",
        image: "bella-italia.jpg",
        owner: users[3]._id,
        email: "bellaitalia@gmail.com",
        address: "GT Road, Amritsar",
        cuisine: "Italian",
        rating: 4.6,
      },
      {
        name: "Burger Hub",
        image: "burger-hub.jpg",
        owner: users[4]._id,
        email: "burgerhub@gmail.com",
        address: "Sector 35, Chandigarh",
        cuisine: "Fast Food",
        rating: 4.2,
      },
      {
        name: "Cafe Aroma",
        image: "cafe-aroma.jpg",
        owner: users[5]._id,
        email: "cafearoma@gmail.com",
        address: "LPU Campus, Phagwara",
        cuisine: "Cafe",
        rating: 4.7,
      },
      {
        name: "Sweet Bliss",
        image: "sweet-bliss.jpg",
        owner: users[6]._id,
        email: "sweetbliss@gmail.com",
        address: "Urban Estate, Jalandhar",
        cuisine: "Dessert",
        rating: 4.8,
      },
      {
        name: "Tandoori Tales",
        image: "tandoori-tales.jpg",
        owner: users[7]._id,
        email: "tandooritales@gmail.com",
        address: "Mall Road, Ludhiana",
        cuisine: "North Indian",
        rating: 4.4,
      },
      {
        name: "Dosa Express",
        image: "dosa-express.jpg",
        owner: users[8]._id,
        email: "dosaexpress@gmail.com",
        address: "Sector 17, Chandigarh",
        cuisine: "South Indian",
        rating: 4.5,
      },
      {
        name: "Pizza Corner",
        image: "pizza-corner.jpg",
        owner: users[9]._id,
        email: "pizzacorner@gmail.com",
        address: "Railway Road, Phagwara",
        cuisine: "Italian",
        rating: 4.3,
      },
    ]);

    console.log("10 restaurants inserted successfully!");

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

seedRestaurant();