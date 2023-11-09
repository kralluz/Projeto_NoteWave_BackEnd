import { Router } from "express";
import { readProducts } from "../logic";

export const moviesRoutes = Router();

moviesRoutes.get("/", readProducts);
