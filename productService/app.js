import express from 'express';
import bodyParser from 'body-parser';
import productRoute from './routes/productRoute'
import cors from 'cors';
import { mongoconnecton } from './db';
mongoconnecton();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

app.use('/products', productRoute);
app.get("/", (req, res) => {

    res.send("productService working on http://localhost:8003")


})
app.use("/public/uploads", express.static("public/uploads"))
export default app;
