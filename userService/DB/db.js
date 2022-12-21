import { get } from '../config/config';
import mongoose from 'mongoose';
const db = get(process.env.NODE_ENV).DB
const CONNECTION_URL = `mongodb://${db.username}:${db.password}@${db.host}:${db.portno}/${db.dbname}`;
export const dbconnection = async () => {
    try {
        await mongoose.connect((CONNECTION_URL), () => { console.log(`Connected to ${process.env.NODE_ENV} `); })
    } catch (e) { console.log(e); }

}