import User from "../model/userModel.js";
import bcrypt from "bcryptjs";
import generateToken from "../routes/utils/generateToken.js";

// GET USER PROFILE
const getProfile = async (req, res) => {
    const user = req.user;

    res.status(200).json({
        status: "success",
        user_info: {
            id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            profileImage: user.profileImage,
        },
    });
};






//REGISTER
const register = async (req, res) => {
    const {name, email, password} = req.body;

    // Check if user already exists
    const userExists= await User.findOne({email})
    if(userExists){
        return res.status(400).json({error:"Email is already registered"})
    }

    //Hash Passqword
    const salt= await bcrypt.genSalt(10);
    const hashedPassword= await bcrypt.hash(password,salt);


    //Creates a new user in the database
    const safeUser= await User.create({    
        name,
        email,
        password: hashedPassword
        });

    
    //generate token
    const token= generateToken(safeUser.id, res)

    //returns the created user object
    res.status(201).json({  
        status:"success",
            user_info:{
                id:safeUser._id,
                name,
                email
        }, token
    }); 
};


//LOGIN

const login= async (req,res) => {
    const {email,password}=req.body;

//Check if user exists
const user=await User.findOne({email});
if (!user){
    return res.status(400).json({error: "Invalid email or password"});
}   

//check if the password is correct
const isPasswordValid=await bcrypt.compare(password,user.password)
if(!isPasswordValid){
    return res.status(400).json({error:"Invalid email or password"})
}


//Generate JWT token
const token= generateToken(user.id, res)


res.status(200).json({
    status:"success",
    user_info:{
        id:user.id,
        email,
    },
    token
});

};

//LOGOUT
const logout= async (req,res) => {
    res.cookie("jwt","",{
    httpOnly: true,
    expires: new Date(0)
    });

    res.status(200).json({
        status: "success",
        message: "Logged out successful"
    })
}





// UPDATE USER PROFILE
const updateProfile = async (req, res) => {
    const { name, phone, profileImage } = req.body;

    const user = await User.findById(req.user._id);

    if (!user) {
        return res.status(404).json({
            error: "User not found",
        });
    }

    user.name = name || user.name;
    user.phone = phone || user.phone;
    user.profileImage = profileImage || user.profileImage;

    const updatedUser = await user.save();

    res.status(200).json({
        status: "success",
        message: "Profile updated successfully",
        user_info: {
            id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            phone: updatedUser.phone,
            profileImage: updatedUser.profileImage,
        },
    });
};




export { getProfile, register, login, logout, updateProfile };