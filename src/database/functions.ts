import client from "./config";

export const resetTableDevelopment = async () => {
    try {
        const queryString = `
        DROP TABLE page CASCADE;
        DROP TABLE note CASCADE; 

        CREATE TABLE "page" (
            "id" SERIAL PRIMARY KEY,
            "user_id" INT NOT NULL,
            "dad_id" int,
            "title" VARCHAR(60) NOT NULL,
            "page_created_at" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP),
            "page_updated_at" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP)
        );
        
        CREATE TABLE "note" (
            "id" SERIAL PRIMARY KEY,
            "page_id" INT NOT NULL,
            "content" TEXT,
            "notes_created_at" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP),
            "notes_updated_at" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP)
        );
        
        ALTER TABLE "note" ADD FOREIGN KEY ("page_id") REFERENCES "page" ("id") ON DELETE CASCADE;
        
        `;
        await client.query(queryString);
        console.log("Tabela reiniciada com sucesso.");
    } catch (error) {
        console.log(error);
    }
};

export const populatingTablesDevelopment = async () => {
    try {
        const queryString = `
        INSERT INTO page (title, user_id, dad_id)
        VALUES 
            ('Título da Página 1', 1, NULL),
            ('Título da Página 2', 2, NULL),
            ('Título da Página 3', 1, 1);

        INSERT INTO note (content, page_id)
        VALUES 
            ('Conteúdo da Nota 1', 1),
            ('Conteúdo da Nota 2', 1),
            ('Conteúdo da Nota 3', 2);
        `;
        await client.query(queryString);
        console.log("Tabela populada com sucesso.");
    } catch (error) {
        console.log(error);
    }
};

export const getAllTables = async () => {
    try {
        const queryString = `
        SELECT *
        FROM page ;
        `;
        const response = await client.query(queryString);
        console.log("🚀 ~ file: functions.ts ~ line 121 ~ getAllTables ~ response:", response.rows);
    } catch (error) {
        console.log(error);
    }
}

export const resetTableProduction = async () => {
    try {
        const queryString = `
        DROP TABLE user CASCADE;
        DROP TABLE page CASCADE;
        DROP TABLE "note" CASCADE;

        CREATE TABLE "user" ( 
            "id" SERIAL PRIMARY KEY,
            "username" VARCHAR(60) NOT NULL,
            "email" VARCHAR(30) NOT NULL,
            "password" VARCHAR(400),
            "user_created_at_" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP),
            "user_updated_at" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP)
        );
        
        CREATE TABLE "page" (
            "id" SERIAL PRIMARY KEY,
            "title" VARCHAR(60) NOT NULL,
            "user_id" INT NOT NULL,
            "dad_id" int,
            "page_created_at" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP),
            "page_updated_at" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP)
        );
        
        CREATE TABLE "note" (
            "id" SERIAL PRIMARY KEY,
            "content" TEXT,
            "page_id" INT NOT NULL,
            "notes_created_at" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP),
            "notes_updated_at" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP)
        );
        
        ALTER TABLE "page" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");
        
        ALTER TABLE "note" ADD FOREIGN KEY ("page_id") REFERENCES "page" ("id") ON DELETE CASCADE;
        
    `;
        await client.query(queryString);
        console.log("Tabela reiniciada com sucesso!!");
    } catch (error) {
        console.log(error);
    }
};
