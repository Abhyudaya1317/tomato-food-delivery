import Resturant from "../model/resturantModel.js";

// ADD RESTAURANT
const add = async (req, res) => {
    const {
        name,
        description,
        image,
        ownerName,
        email,
        phone,
        address,
        cuisine,
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
        description,
        image,
        ownerName,
        owner: req.user._id,
        email,
        phone,
        address,
        cuisine,
    });

    res.status(201).json({
        status: "success",
        restaurant_info: {
            id: newResturant._id,
            name: newResturant.name,
            owner: newResturant.owner,
            email: newResturant.email,
            address: newResturant.address,
        },
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

export { add, deleteResturant };