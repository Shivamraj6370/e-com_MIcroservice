import axios from "axios"

export const userSinup = async (req, res) => {
    try {
        const details = await axios({
            url: `http://localhost:8001/v1/user/singup`,
            method: "post",
            data: req.body,
        });
        return res.status(200).json({ data: details.data });
    } catch (error) {
        throw { status: 404, error: error.data };
    }


}
export const userLogin = async (req, res) => {
    try {
        const details = await axios({
            url: `http://localhost:8001/v1/user/login`,
            method: "post",
            data: req.body,
        });
        return res.status(200).json({ data: details.data });
    } catch (error) {
        throw { status: 404, error: error.data };
    }


}

export const userUpdate = () => {


}

