import Food from "../model/foodModel.js";

const food =async (req,res) => {
    const {resturant,name,price,image,category,isVeg,isAvailable} =req.body;

    // Check if food already exists
        const foodExists= await Food.findOne({email})
        if(foodExists){
            return res.status(400).json({error:"Email is already registered"})
        }
}