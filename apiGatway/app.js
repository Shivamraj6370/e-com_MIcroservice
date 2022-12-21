import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { mongoconnecton } from './db';
import router from "./apiRouts/api.web"
import product from "./apiRouts/apiProduct"
import Order from "./apiRouts/api.order"
mongoconnecton();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));
app.use("/g1", router)
app.use("/v1/product", product)
app.use("/v1/order", Order)
app.get("/", (req, res) => {
    res.send("apiGatway  Is Working on http://localhost:9090")
})
export default app;
