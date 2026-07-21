import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String
    },

    owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },

    cuisine: {
      type: String,
      enum: [
        "North Indian",
        "South Indian",
        "Chinese",
        "Italian",
        "Fast Food",
        "Cafe",
        "Dessert",
      ],
      required: true,
    },

    rating: {
      type: Number,
      default: 0,
    }

  },
  {
    timestamps: true,
  }
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;