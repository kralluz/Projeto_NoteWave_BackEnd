import express from "express";
import cors from 'cors';
import {
    readProducts,
} from "./logic";

export const app = express();
app.use(cors());

app.use(express.json());

app.get("/", readProducts);


