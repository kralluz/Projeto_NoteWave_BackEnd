import { app, logger } from "./app";
import "dotenv/config";
import { startDatabase } from "./database";

const PORT = process.env.PORT || 3010;

app.listen(PORT, async () => {
    startDatabase();
    console.log("Api Ligada com Sucesso!");
    logger.info(`Servidor rodando na porta ${PORT}`);
}); 