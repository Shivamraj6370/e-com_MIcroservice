import express from 'express';
import { orders } from '../conreoller /order'


const router = express.Router();
router.post("/create", orders)
// router.post("/user/login", userLogin)

export default router