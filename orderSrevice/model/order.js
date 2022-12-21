const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new Schema({
    userId : {type: ObjectId, required: true, ref: "User"},
    productId : {type: ObjectId, required: true, ref: "Product"},
    status: {type:String,enum:["Ordered","Processing","On the way","Completed"],default:"Ordered"},
},
{
    timestamps:true,
})

module.exports = orderSchema;