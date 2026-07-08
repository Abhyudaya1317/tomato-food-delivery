import Cart from "../model/cartModel.js";
import Food from "../model/foodModel.js";


// GET CART
const getCart = async (req, res) => {
    const cart = await Cart.findOne({
        user: req.user._id,
     }).populate("items.food"); //returns more detailed object about food

    if (!cart) {
        return res.status(404).json({
            error: "Cart is empty",
        });
    }

    res.status(200).json({
        status: "success",
        cart,
    });
};





// ADD TO CART
const addToCart = async (req, res) => {
    const { foodId } = req.body;

    // Check if food exists
    const food = await Food.findById(foodId);

    if (!food) {
        return res.status(404).json({
            error: "Food not found",
        });
    }

    // Find user's cart
    let cart = await Cart.findOne({
        user: req.user._id,
    });

    // Create cart if it doesn't exist
    if (!cart) {
        cart = await Cart.create({
            user: req.user._id,
            items: [],
        });
    }

    // Check if food already exists in cart
    const item = cart.items.find(
         (item) => item.food.toString() === foodId
    );

    if (item) {
        item.quantity += 1;
    } else {
        cart.items.push({
            food: foodId,
            quantity: 1,
        });
    }

     await cart.save();

    res.status(200).json({
        status: "success",
        message: "Food added to cart",
        cart,
    });
};




// REMOVE ITEM FROM CART
const removeFromCart = async (req, res) => {
    const { foodId } = req.params;

    const cart = await Cart.findOne({
        user: req.user._id,
    });

    if (!cart) {
        return res.status(404).json({
            error: "Cart not found",
        });
    }

     cart.items = cart.items.filter(          //filter remove only the required item and keeps the remaining elements
         (item) => item.food.toString() !== foodId
     );


    //saves in MongoDB ,you're never directly modifying the database.
    //  You're modifying a Mongoose document in memory (cart),
    //  then calling save()
    await cart.save();


    res.status(200).json({
        status: "success",
        message: "Item removed from cart",
    });
};




// UPDATE QUANTITY
const updateQuantity = async (req, res) => {
    const { foodId } = req.params;
    const { quantity } = req.body;

    const cart = await Cart.findOne({
        user: req.user._id,
    });

    if (!cart) {
        return res.status(404).json({
            error: "Cart not found",
        });
    }

    const item = cart.items.find(
         (item) => item.food.toString() === foodId
    );

    if (!item) {
        return res.status(404).json({
            error: "Food not found in cart",
        });
    }

    item.quantity = quantity;

    await cart.save();

    res.status(200).json({
        status: "success",
        message: "Quantity updated",
        cart,
    });
};

export {
    addToCart,
    getCart,
    removeFromCart,
    updateQuantity,
};