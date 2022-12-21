import express from 'express';
import { userSinup, userLogin } from '../conreoller /apiGatway';
import { AddProduct } from "../conreoller /productGatway"


const router = express.Router();
router.post("/user/register", userSinup)
router.post("/user/login", userLogin)

export default router