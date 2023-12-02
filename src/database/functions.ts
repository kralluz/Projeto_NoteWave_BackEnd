import client from "./config";

export const resetTableDevelopment = async () => {
    try {
        const queryString = `
        DROP TABLE IF EXISTS "page" CASCADE;
        DROP TABLE IF EXISTS "note" CASCADE; 
        DROP TABLE IF EXISTS "user" CASCADE; 
        
        CREATE TABLE "user" (
            "id" SERIAL PRIMARY KEY,
            "is_admin" BOOLEAN DEFAULT FALSE,
            "username" VARCHAR(60) NOT NULL,
            "email" VARCHAR(30) NOT NULL,
            "password" VARCHAR(400),
            "user_created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            "user_updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        
        CREATE TABLE "page" (
            "id" SERIAL PRIMARY KEY,
            "user_id" INT NOT NULL,
            "dad_id" int,
            "title" VARCHAR(60) NOT NULL,
            "page_created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            "page_updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        
        CREATE TABLE "note" (
            "id" SERIAL PRIMARY KEY,
            "page_id" INT NOT NULL,
            "content" TEXT,
            "notes_created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            "notes_updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        
        ALTER TABLE "page" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id") ON DELETE CASCADE;
        
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
        INSERT INTO "user" ("username", "email", "password") VALUES 
        ('Maria', 'maria.pereira@email.com', 'senha2'),
        ('João Silva', 'joao.silva@email.com', 'senha1'),
        ('Carlos Santos', 'carlos.santos@email.com', 'senha3'),
        ('Ana Costa', 'ana.costa@email.com', 'senha4'),
        ('Pedro Oliveira', 'pedro.oliveira@email.com', 'senha5');
        
        INSERT INTO "page" ("title", "user_id") VALUES 
        ('Página do João', 1),
        ('Página da Maria', 2),
        ('Página do Carlos', 3),
        ('Página da Ana', 4),
        ('Página do Pedro', 5);
        
        INSERT INTO "note" ("content", "page_id") VALUES 
        ('Nota do João', 1),
        ('Nota da Maria', 2),
        ('Nota do Carlos', 3),
        ('Nota da Ana', 4),
        ('Nota do Pedro', 5);
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
        
        ALTER TABLE "page" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id") ON DELETE CASCADE;
        
        ALTER TABLE "note" ADD FOREIGN KEY ("page_id") REFERENCES "page" ("id") ON DELETE CASCADE;
        
    `;
        await client.query(queryString);
        console.log("Tabela reiniciada com sucesso!!");
    } catch (error) {
        console.log(error);
    }
};
