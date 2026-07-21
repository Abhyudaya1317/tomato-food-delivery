import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";

import Food from "../model/foodModel.js";
import Restaurant from "../model/restaurantModel.js";

dns.setServers(["1.1.1.1", "8.8.8.8"]);
dotenv.config();

const seedFood = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    // Optional
    // await Food.deleteMany();

    const restaurants = await Restaurant.find();

    if (restaurants.length < 10) {
      throw new Error("Please seed restaurants first.");
    }

    await Food.insertMany([
      // Spice Junction
      {
        restaurant: restaurants[0]._id,
        name: "Paneer Butter Masala",
        price: 289,
        image: "paneer-butter-masala.jpg",
        category: "North Indian",
        isVeg: true,
      },
      {
        restaurant: restaurants[0]._id,
        name: "Dal Makhani",
        price: 249,
        image: "dal-makhani.jpg",
        category: "North Indian",
        isVeg: true,
      },

      // Madras Kitchen
      {
        restaurant: restaurants[1]._id,
        name: "Masala Dosa",
        price: 199,
        image: "masala-dosa.jpg",
        category: "South Indian",
        isVeg: true,
      },
      {
        restaurant: restaurants[1]._id,
        name: "Idli Sambar",
        price: 159,
        image: "idli-sambar.jpg",
        category: "South Indian",
        isVeg: true,
      },

      // Dragon Wok
      {
        restaurant: restaurants[2]._id,
        name: "Veg Hakka Noodles",
        price: 229,
        image: "veg-hakka-noodles.jpg",
        category: "Chinese",
        isVeg: true,
      },
      {
        restaurant: restaurants[2]._id,
        name: "Veg Fried Rice",
        price: 219,
        image: "veg-fried-rice.jpg",
        category: "Chinese",
        isVeg: true,
      },

      // Bella Italia
      {
        restaurant: restaurants[3]._id,
        name: "Margherita Pizza",
        price: 299,
        image: "margherita-pizza.jpg",
        category: "Pizza",
        isVeg: true,
      },
      {
        restaurant: restaurants[3]._id,
        name: "Farmhouse Pizza",
        price: 399,
        image: "farmhouse-pizza.jpg",
        category: "Pizza",
        isVeg: true,
      },

      // Burger Hub
      {
        restaurant: restaurants[4]._id,
        name: "Veg Burger",
        price: 149,
        image: "veg-burger.jpg",
        category: "Burger",
        isVeg: true,
      },
      {
        restaurant: restaurants[4]._id,
        name: "Paneer Burger",
        price: 179,
        image: "paneer-burger.jpg",
        category: "Burger",
        isVeg: true,
      },

      // Cafe Aroma
      {
        restaurant: restaurants[5]._id,
        name: "Cold Coffee",
        price: 129,
        image: "cold-coffee.jpg",
        category: "Beverage",
        isVeg: true,
      },
      {
        restaurant: restaurants[5]._id,
        name: "Cappuccino",
        price: 159,
        image: "cappuccino.jpg",
        category: "Beverage",
        isVeg: true,
      },

      // Sweet Bliss
      {
        restaurant: restaurants[6]._id,
        name: "Chocolate Brownie",
        price: 149,
        image: "brownie.jpg",
        category: "Dessert",
        isVeg: true,
      },
      {
        restaurant: restaurants[6]._id,
        name: "Vanilla Ice Cream",
        price: 99,
        image: "vanilla-icecream.jpg",
        category: "Dessert",
        isVeg: true,
      },

      // Tandoori Tales
      {
        restaurant: restaurants[7]._id,
        name: "Shahi Paneer",
        price: 279,
        image: "shahi-paneer.jpg",
        category: "North Indian",
        isVeg: true,
      },
      {
        restaurant: restaurants[7]._id,
        name: "Veg Biryani",
        price: 259,
        image: "veg-biryani.jpg",
        category: "North Indian",
        isVeg: true,
      },

      // Dosa Express
      {
        restaurant: restaurants[8]._id,
        name: "Onion Uttapam",
        price: 189,
        image: "onion-uttapam.jpg",
        category: "South Indian",
        isVeg: true,
      },
      {
        restaurant: restaurants[8]._id,
        name: "Plain Dosa",
        price: 149,
        image: "plain-dosa.jpg",
        category: "South Indian",
        isVeg: true,
      },

      // Pizza Corner
      {
        restaurant: restaurants[9]._id,
        name: "Cheese Burst Pizza",
        price: 449,
        image: "cheese-burst-pizza.jpg",
        category: "Pizza",
        isVeg: true,
      },
      {
        restaurant: restaurants[9]._id,
        name: "Veg Supreme Pizza",
        price: 429,
        image: "veg-supreme-pizza.jpg",
        category: "Pizza",
        isVeg: true,
      },
    ]);

    console.log("20 food items inserted successfully!");

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

seedFood();