const express = require("express");
const { orderC, ShowAllOrder, DeleteOrderById } = require("../controller/order");
const router = express.Router();

router.post("/create", orderC);
router.get("/list", ShowAllOrder);
router.delete("/delete/:_id", DeleteOrderById);

export default router;