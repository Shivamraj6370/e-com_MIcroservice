import axios from 'axios';

const baseUel = "http://localhost:8002/order"


export const orders = async (req, res) => {
    console.log(req.body)
    try {
        const details = await axios({
            url: `${baseUel}/create`,
            method: "post",
            data: req.body,
            headers: { "Content-Type": "multipart/form-data" },
        });
        console.log(details.data)
        res.status(200).json("add order")
    } catch (e) {
        console.log(e)
    }
}

export const orderList = () => { }


export const orderDetails = () => { }



export const orderDelete = () => { }