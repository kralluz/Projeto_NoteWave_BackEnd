import express from "express";
import cors from 'cors';
import swaggerUiExpress from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import { notesRoutes } from './routes/notes.routes';

export const app = express();
app.use(cors());

app.use(express.json());

app.use('/', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocument));
app.use('/notes', notesRoutes);