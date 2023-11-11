import client from "./config";
import { insertTextTest, resetTableDevelopment, searchTextTest } from "./functions";

const startDatabase = async (): Promise<void> => {
    await client.connect();
    await resetTableDevelopment();
    await insertTextTest();
    await searchTextTest();
    console.log("Database pronta para uso.");
};

export default startDatabase;
