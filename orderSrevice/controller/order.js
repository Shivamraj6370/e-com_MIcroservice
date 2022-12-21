const mongoose = require("mongoose");
const orderSchema = require("../model/order");
const order = mongoose.model("order", orderSchema);

exports.orderC = async (req, res) => {
  try {
    const orderData = new order({
      userId: req.body.userId,
      productId: req.body.productId,
      status: req.body.status,
    });
    const orderDetails = await orderData.save();
    if (orderDetails) {
      res.send({
        isSuccess: true,
        message: "Order added successfully",
        data: orderDetails,
      });
    }
  } catch (err) {
    res.send({
      isSuccess: false,
      message: err,
    });
  }
};

// Show All User Data (Listing)
exports.ShowAllOrder = async (req, res) => {
  try {
    const result = await order.find({});
    if (result) {
      res.send({
        status: true,
        message: "This Is Your Requested List",
        result: result,
      });
    }
  } catch (e) {
    res.send({ status: false, messgae: "Oops!! No Results Found", Result: e });
  }
};


// Delete Order Data Using ID
exports.DeleteOrderById = async (req, res) => {
  try {
    let _id = req.params._id;
    // console.log(_id)
    const user = await order.deleteOne({
      _id: mongoose.Types.ObjectId(_id),
    });
    if (user) {
      res.send({
        status: true,
        message: "Data Has Been Removed Successfully",
        result: user,
      });
    }
  } catch (e) {
    res.send({
      status: false,
      messgae: "Oops!! Something Went Wrong",
      Result: e,
    });
  }
};