import mongoose from "mongoose";
import Validator from "validator";

const userShcema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        validate: [Validator.isEmail, "Please enter a valid email"],
        unique: true,

    },
    password: {
        type: String,
        required: [true, "Please enter your password!"],
        minlength: [8, "Password should be greater than 8 characters"],

    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    contact: {
        type: Number,
        required: true
    },

}, { timestamps: true },);
export default mongoose.model("user", userShcema);

