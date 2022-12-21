import user from "../model/user";
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";
export const userSinup = async (req, res) => {

    let { name, email, password, contact, role, } = req.body;
    try {
        if (name.length < 1 || email.length < 1 || password.length < 2 || contact.length === 0 || role.length === 0) {
            return res.send({ message: "Please enter all fields " })
        }
        else {
            let isMailRegistered = await user.find({ email })

            if (isMailRegistered.length > 0) {

                res.send({ message: "alrady registerd" })
            }
            else {
                const UserData = new user({ name, email: email.toLowerCase(), password: bcrypt.hashSync(password), contact, role, })
                const result = await UserData.save()
                return res.send({
                    message: "singup success",
                    result: result
                })
            }
        }

    }
    catch (err) {

        return res.send({ message: err.message }).send
    }
}

export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        if (email.length < 1 || password.length === 0) {
            res.send({ message: "Please enter all fields" })
        } else {
            let isMail = await user.findOne({ email })
            if (!isMail) {
                res.send({
                    message: "email is not registered"
                })
            }
            const isValid = bcrypt.compareSync(password, isMail.password);
            if (isValid) {

                let payload = {};
                payload._id = isMail._id;
                payload.email = isMail.email

                jwt.sign(
                    payload, "SECRET_KEY", { expiresIn: "24h" }, (err, token) => {
                        res.send({
                            status: true,
                            message: "Successfully Login",
                            result: token,
                        });
                    });
            }
        }
    }
    catch (err) {
        console.log(err)
    }
}

export const updateUserDetails = async (req, res) => {


    let data = {};

    if (req.body.name) {
        data.name = req.body.name;
    }
    if (req.body.email) {
        data.email = req.body.email;
    }
    if (req.body.contact) {
        data.contact = req.body.contact;
    }
    if (req.body.password) {
        data.password = req.body.password;
    }


    const result = await user.updateOne(
        { _id: mongoose.Types.ObjectId(req.body._id) },
        { $set: data },
        { new: true }
    );

    if (result) {
        res.send({ messages: "user details updated successfully" })

    }
}