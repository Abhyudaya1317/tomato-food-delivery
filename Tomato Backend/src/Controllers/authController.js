import User from "../model/userModel.js";
import bcrypt from "bcryptjs";

const register = async (req, res) => {
    const { name, email, password, phone } = req.body;

    // Check if user already exists
    const userExists= await User.findOne({email})
    if(userExists){
        res.status(400).json({error:"Email is already registered"})
    }

    //Hash Passqword
    const salt= await bcrypt.genSalt(10);
    const hashedPassword= await bcrypt.hash(password,salt);


    //Creates a new user in the database
    const safeUser= await User.create({    
        name,
        email,
        password: hashedPassword,
        phone
        });

    
    //returns the created user object
    res.status(201).json({  
        status:"success",
            user_info:{
                id:safeUser._id,
                name:name,
                email:email,
                phone:phone
            
        }
    }); 
};

const login= async (req,res) => {
    const {email,password}=req.body;


const userExists=await User.findOne({email});
if (!userExists){

}   

}










export default register;