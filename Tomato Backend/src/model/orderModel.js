import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart",
        required: true,
    },

    deliveryAddress: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
    },

    customerName: {
    type: String,
    required: true,
    },

    paymentMethod: {
      type: String,
      enum: ["Cash", "Card", "UPI"],
      required: true,
    },

    paymentStatus: {
        type: String,
        enum: ["Pending", "Paid"],
        default: "Pending",
    },

    orderStatus: {
        type: String,
        enum: [
            "Placed",
            "Preparing",
            "Out for Delivery",
            "Delivered",
            "Cancelled",
        ],
        default: "Placed",
    }
});
export const Order = mongoose.model("Order", orderSchema);

export default Order;