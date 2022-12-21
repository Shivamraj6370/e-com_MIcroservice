import express from 'express'
import bodyParser from 'body-parser'
const app = express();
import cors from 'cors'
import { mongoconnection } from './db';
import order from "./router/order"
mongoconnection();
app.use(cors({ origin: "*" }));

app.use(bodyParser.urlencoded(
    {
        extended: true
    }));
app.use(bodyParser.json());

app.use("/order", order)
app.get("/", (req, res) => {

    res.send("orderService working on http://localhost:8002")


})

export default app;