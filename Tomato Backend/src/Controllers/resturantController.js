import Resturant from "../model/resturantModel.js";

// GET RESTAURANT
const getRestaurant = async (req, res) => {
    const restaurant = await Restaurant.findOne({
        owner: req.user._id,
    });

    if (!restaurant) {
        return res.status(404).json({
            error: "Restaurant not found",
        });
    }

    res.status(200).json({
        status: "success",
        restaurant,
    });
};







// ADD RESTAURANT
const add = async (req, res) => {
    const {
        name,
        image,
        email,
        address,
        cuisine
    } = req.body;

    // Check if restaurant already exists
    const resturantExists = await Resturant.findOne({ email });

    if (resturantExists) {
        return res.status(400).json({
            error: "Restaurant is already registered with this email",
        });
    }

    // Create new restaurant
    const newResturant = await Resturant.create({
        name,
        image,
        owner: req.user._id,
        email,
        address,
        cuisine
    });

    res.status(201).json({
        status: "success",
        restaurant_info: {
            id: newResturant._id,
            name,
            owner: req.user._id,
            email,
            address,
        },
    });
};





// UPDATE RESTAURANT
const updateRestaurant = async (req, res) => {
    const {
        name,
        image,
        email,
        address,
        cuisine,
    } = req.body;

    const restaurant = await Restaurant.findOne({
        owner: req.user._id,
    });

    if (!restaurant) {
        return res.status(404).json({
            error: "Restaurant not found",
        });
    }

    restaurant.name = name || restaurant.name;
    restaurant.image = image || restaurant.image;
    restaurant.email = email || restaurant.email;
    restaurant.address = address || restaurant.address;
    restaurant.cuisine = cuisine || restaurant.cuisine;

    const updatedRestaurant = await restaurant.save();

    res.status(200).json({
        status: "success",
        message: "Restaurant updated successfully",
        restaurant: updatedRestaurant,
    });
};





// DELETE RESTAURANT
const deleteResturant = async (req, res) => {
    // Find restaurant
    const resturant = await Resturant.findById(req.params.id);

    if (!resturant) {
        return res.status(404).json({
            error: "Restaurant not found",
        });
    }

    // Check ownership
    if (!resturant.owner.equals(req.user._id)) {
        return res.status(403).json({
            error: "You are not authorized to delete this restaurant",
        });
    }

    // Delete restaurant
    await resturant.deleteOne();

    res.status(200).json({
        status: "success",
        message: "Restaurant deleted successfully",
    });
};

export { getRestaurant, add,updateRestaurant, deleteResturant };