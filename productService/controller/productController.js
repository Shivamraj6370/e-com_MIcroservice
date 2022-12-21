import microproducts from '../model/productModel'

//Add a new product------------------
export const productAdd = async (req, res) => {
    try {
        const file = req.file;
        if (!file) return res.status(400).send("No Image in the request")
        const fileName = req.file.filename
        const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;
        const product = new microproducts({
            name: req.body.name,
            description: req.body.description,
            image: `${basePath}${fileName}`, // "http://localhost:8003/public/upload/image-2323232",
            price: req.body.price,
            countInStock: req.body.countInStock
        })
        const products = await product.save();
        if (!products) {
            res.send({ status: 500, messgae: "Product cannot be add" });
        }
        else {
            res.send({ status: 200, messgae: "Product Added successfully", result: products });
        }
    }
    catch (e) {
        res.send({ status: 400, messgae: "No Results Found", result: e });
    }
};

//Get a product list--------------------
export const productList = async (req, res) => {
    try {
        const productList = await microproducts.find({ isDeletd: false });
        if (!productList) {
            res.send({ status: 500, messgae: "No Product List Found" });
        }
        else {
            res.send({ status: 200, messgae: "Product List", result: productList });
        }
    }
    catch (e) {
        res.send({ status: 400, messgae: "No Results Found", result: e });
    }
}

//Get a product By Id------------------------
export const getProductById = async (req, res) => {
    try {
        const product = await microproducts.findById(req.params.id);
        if (!product) {
            res.send({ status: 500, messgae: "No Product Found" });
        }
        else {
            res.send({ status: 200, messgae: "Product Detail", result: product });
        }
    }
    catch (e) {
        res.send({ status: 400, messgae: "No Results Found", result: e });
    }
};

// Update Product--------------------------------
export const updateProduct = async (req, res) => {
    try {
        const productupdate = await microproducts.findByIdAndUpdate(req.params.id, {
            description: req.body.description,
            price: req.body.price,
            countInStock: req.body.countInStock,
        },
            { new: true }
        )
        if (!productupdate) {
            res.send({ status: 400, messgae: "The Product can not updated" });
        } else {
            res.send({ status: 200, messgae: "The Product updated", result: productupdate });
        }
    }
    catch (e) {
        res.send({ status: 400, messgae: "No Results Found", result: e });
    }
}

// Delete Product--------------------------------
export const deleteProduct = async (req, res) => {

    try {
        const update = await microproducts.findByIdAndUpdate(req.params.id, { isDeletd: true }, { new: true })

        if (update) {
            res.send({ status: 200, messgae: "The product is deleted" });
        }
        else {
            res.send({ status: 404, messgae: "The product is  not deleted" });
        }

    }
    catch (e) {
        res.send({ status: 400, messgae: "No Results Found", result: e });
    }
}