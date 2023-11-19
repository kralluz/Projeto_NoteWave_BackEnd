import client from "./config";
import { populatingTablesDevelopment, resetTableDevelopment } from "./functions";

const startDatabase = async (): Promise<void> => {
    await client.connect();
    await resetTableDevelopment();
    await populatingTablesDevelopment();
    console.log("Database pronta para uso.");
};

export default startDatabase;
