import express from 'express';
import { AddProduct, DeleteProduct, GetProduct, ProductDetails } from "../conreoller /productGatway"
import { uploadOptions } from "../middleware/imageUpload"
const router = express.Router()
router.post("/addProduct", uploadOptions.single("image"), AddProduct)
router.delete("/delete", DeleteProduct)
router.get("/list", GetProduct)
router.get("/details", ProductDetails)

export default router