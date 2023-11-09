import { app } from "./app";
import "dotenv/config";
import { connectDatabase } from "./database";

const PORT = process.env.PORT || 3010;

app.listen(PORT, async () => {
    await connectDatabase();
    console.log("Api Ligada com Sucesso!");
    console.log(`Ouvindo na porta ${PORT}`);
}); 