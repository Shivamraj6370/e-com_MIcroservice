import express from 'express';
import bodyParser from 'body-parser';
import { dbconnection } from './DB/db';
import router from './routes/api';
const app = express();
dbconnection()


app.use(bodyParser.urlencoded(
    {
        extended: true
    }
));
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('userService   working on  8001'));
app.use("/v1/user", router)

export default app;