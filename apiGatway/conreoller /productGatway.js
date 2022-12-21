import axios from 'axios';
import fs from 'fs';
import FormData from 'form-data';
export const AddProduct = async (req, res) => {
    try {
        const imagepath = req.file.path;
        const { name, description, countInStock, price } = req.body;
        var imagefile = await fs.createReadStream(imagepath);
        const formData = new FormData();
        formData.append("image", imagefile);
        formData.append("name", name);
        formData.append("description", description);
        formData.append("countInStock", countInStock);
        formData.append("price", price);
        const details = await axios({
            url: `http://localhost:8003/products/add`,
            method: "post",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        });

        fs.unlinkSync(imagepath)
        return res.status(200).json({ data: details.data });
    } catch (error) {
        return res.send({ status: 404, error: error.data });
    }


}

export const EditProduct = () => {
}
export const DeleteProduct = async (req, res) => {
    const { id } = req.query
    try {
        const update = await axios.delete(`http://localhost:8003/products/deleteproduct/${id}`)
        return res.status(200).json(update.data);
    }
    catch (e) {
        return res.status(200).json(e)

    }

}

export const GetProduct = async (req, res) => {
    try {
        const result = await axios.get(`http://localhost:8003/products/list`)
        return res.status(200).json(result.data)
    } catch (e) {
        return res.status(404).json(e)
    }


}

export const ProductDetails = async (req, res) => {
    try {
        const result = await axios.get(`http://localhost:8003/products/productdetail/${req.query.id}`)
        return res.status(200).json(result.data)
    } catch (e) {
        return res.status(200).json(e)
    }

}