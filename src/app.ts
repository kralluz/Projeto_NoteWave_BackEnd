import express from "express";
import { notesRoutes } from './routes/notes.routes';
import cors from 'cors';
import {
    readProducts,
} from "./logic";

export const app = express();
app.use(cors());

app.use(express.json());

app.use('/notes', notesRoutes);

app.get("/", readProducts);


