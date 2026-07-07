import Food from "../model/foodModel.js";
import Restaurant from "../model/resturantModel.js";

const addfood =async (req,res) => {
    const {name,price,image,category,isVeg} =req.body;

    //Find the restaurant owned by user:
        const restaurant=await Restaurant.findOne({
            owner: req.user._id
        })
    
        if (!restaurant) {
            return res.status(404).json({
            error: "You don't own any restaurant.",
        });
        }

    // Check if food already exists
        const foodExists= await Food.findOne({
            restaurant: restaurant._id,
            name
        })

        if(foodExists){
            return res.status(400).json({error:"Food already added"})
        }

   //add food:
   //The food isn't stored inside the restaurant document. Instead, it stores a reference to the restaurant.

   const newfood= await Food.create({
    restaurant: restaurant._id,
    name,
    price,
    image,
    category,
    isVeg
   })

   res.status(201).json({
        status:"success",
        food_info:{
            id:newfood._id,
            name,
            price,
            category,
            restaurant: restaurant.name
        }
   })
        
}


// DELETE FOOD
const deletefood = async (req, res) => {
    // Find food
    const food = await Food.findById(req.params.id);

    if (!food) {
        return res.status(404).json({
            error: "food not found",
        });
    }

    // Check ownership
    const restaurant = await Restaurant.findById(food.restaurant);

    if (!restaurant.owner.equals(req.user._id)) {
        return res.status(403).json({
            error: "You are not authorized to delete this food",
        });
    }

    // Delete food
    await food.deleteOne();

    res.status(200).json({
        status: "success",
        message: "food deleted successfully",
    });
};

export {addfood, deletefood};