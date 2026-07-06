import express from "express";

const router=express.Router();

router.post("/add", (req,res) => {
    res.json({message:"Post request"})
});

export default router;