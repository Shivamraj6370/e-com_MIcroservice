import express from "express"
import { userSinup, userLogin } from "../controller/auth.user";
const router = express.Router()

router.post("/singup", userSinup)
router.post("/login", userLogin)



export default router;