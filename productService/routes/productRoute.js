import express from 'express';
import { productAdd,productList,getProductById,updateProduct,deleteProduct} from '../controller/productController';
const router = express.Router();
import {uploadOptions} from '../middleware/imageUpload'

//Product---------------------------------------------------
router.post("/add",uploadOptions.single('image'),productAdd);
router.get("/list",productList);
router.get("/productdetail/:id",getProductById);
router.put("/updateproduct/:id", updateProduct);
router.delete("/deleteproduct/:id",deleteProduct)

export default router;
