import Order from "../model/orderModel.js";
import Cart from "../model/cartModel.js";
import Food from "../model/foodModel.js";



const getOrder= async(req,res) => {
    const order= await Order.find({
        user:req.user._id,
    }).populate({
    path: "cart",
    populate: {
        path: "items.food"
    }

    
})

    if (order.length === 0) {
        return res.status(404).json({
        error: "No orders found",
        });
    }
    

    res.status(200).json({
        status: "success",
        order,
    });

}



    


//place order
const place = async(req,res) =>{
    const {deliveryAddress,phone,customerName,paymentMethod} = req.body;

    //find user's cart
    const cart= await Cart.findOne({
        user: req.user._id
    }).populate("items.food");

    if(!cart){
        res.status(400).json({error: "fill your cart"})
    }

    if (cart.items.length === 0) {
        return res.status(400).json({
            error: "Cart is empty"
         });
}


    //calculating total cost
    let totalAmount = 0;

    cart.items.forEach((item) => {
        totalAmount += item.food.price * item.quantity;
    });

    const existingOrder = await Order.findOne({
    cart: cart._id,
    orderStatus: {
        $in: ["Placed", "Preparing", "Out for Delivery"],
    },
    });



    //prevent duplicate order
    if (existingOrder) {
        return res.status(400).json({
          error: "You already have an active order.",
         });
    }

    const order= await Order.create({
        user: req.user._id,
        cart: cart._id,
        deliveryAddress,
        phone,
        customerName,
        paymentMethod,
        totalAmount
    })

    res.status(200).json({
        status: "success",
        order_info:order


});
}





//delete order
const deleteOrder=async(req,res) => {
    const order= await Order.findById(req.params.id)

     if (!order) {
        return res.status(404).json({
            error: "order not found",
        });
    }

    //check ownership
    if (!order.user.equals(req.user._id)) {
    return res.status(403).json({
        error: "You are not authorized to delete this order",
    });
    }


    res.status(200).json({
        status: "success",
        message: "Order deleted successfully",
    });


    await order.deleteOne();
}

export {getOrder, place,deleteOrder};