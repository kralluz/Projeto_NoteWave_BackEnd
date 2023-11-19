import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import swaggerUiExpress from "swagger-ui-express";
import morgan from "morgan";
import winston from "winston";
import path from "path";

import swaggerDocument from "./swagger.json";
import { pageRoutes } from "./routes/notes.routes";
import { handleErrors } from "./middlewares/handleErrors.middleware";

// Configuração do Logger
function createLogger() {
    return winston.createLogger({
        level: "info",
        format: winston.format.combine(winston.format.json()),
        transports: [
            new winston.transports.File({
                filename: path.join(__dirname, "combined.log"),
            }),
        ],
    });
}

export const logger = createLogger();
export const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(
    morgan("combined", {
        stream: { write: (message) => logger.info(message.trim()) },
    })
);

// Documentação Swagger
app.use(
    "/documentation",
    swaggerUiExpress.serve,
    swaggerUiExpress.setup(swaggerDocument)
);

// Rotas
app.use("/pages", pageRoutes);

// Tratamento de Erros
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error(error.stack);
    res.status(500).send("Internal server error");
});

app.use(handleErrors);

module.exports = app;