import User from "../model/userModel.js";

const deleteUser = async (req, res) => {
    // Find the user
    const user = await User.findById(req.user._id);

    if (!user) {
        return res.status(404).json({
            error: "User not found",
        });
    }

    // Delete the user
    await User.findByIdAndDelete(req.user._id);

    // Clear JWT cookie
    res.clearCookie("jwt", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
    });

    res.status(200).json({
        status: "success",
        message: "User deleted successfully",
    });
};

export { deleteUser };