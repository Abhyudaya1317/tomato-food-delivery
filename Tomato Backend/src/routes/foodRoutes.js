import express from "express";
const router=express.Router();

router.get("/", (req,res) => {
    res.json({message:"Get request"})
});

router.post("/", (req,res) => {
    res.json({message:"Post request"})
});

router.put("/", (req,res) => {
    res.json({message:"Put request"})
});

router.delete("/", (req,res) => {
    res.json({message:"Delete request"})
});



export default router;