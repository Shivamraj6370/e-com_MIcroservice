import mongoose from "mongoose";

//Schema
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: '',
        required: false
    },
    price: {
        type: Number,
        default: 0,
        required: true
    },
    countInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    isDeletd: {
        type: Boolean,
        default: false,
        enm: [false, true]
    }
});
const productdata = mongoose.model("microproducts", productSchema);
export default productdata;
