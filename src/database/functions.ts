import client from "./config";

export const resetTableDevelopment = async () => {
    try {
        const queryString = `
        DROP TABLE "pages" CASCADE;
        DROP TABLE "subpages" CASCADE;
        DROP TABLE "notes" CASCADE; 

    CREATE TABLE "pages" (
            "id" SERIAL PRIMARY KEY,
            "title" VARCHAR(60) NOT NULL,
            "user_id" INT,
            "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    
    CREATE TABLE
        "subpages" (
            "id" SERIAL PRIMARY KEY,
            "title" VARCHAR(60) NOT NULL,
            "page_id" INT,
            "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY ("page_id") REFERENCES "pages" ("id") ON DELETE CASCADE
        );
    
    CREATE TABLE
        "notes" (
            "id" SERIAL PRIMARY KEY,
            "content" TEXT,
            "page_id" INT,
            "subpages_id" INT,
            "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY ("page_id") REFERENCES "pages" ("id") ON DELETE CASCADE,
            FOREIGN KEY ("subpages_id") REFERENCES "subpages" ("id") ON DELETE CASCADE
        );
        `;
        await client.query(queryString);
        console.log("Tabela reiniciada com sucesso.");
    } catch (error) {
        console.log(error); 
    }
};

export const resetTableProduction = async () => {
    try {
        const queryString = `
        DROP TABLE users CASCADE;
        DROP TABLE pages CASCADE;
        DROP TABLE subpages CASCADE;

        CREATE TABLE "users" (
            "id" SERIAL PRIMARY KEY,
            "username" VARCHAR(60) NOT NULL,
            "email" VARCHAR(30) NOT NULL,
            "password" VARCHAR(400),
            "user_created_at_" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            "user_updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
        );
    
    CREATE TABLE "pages" (
            "id" SERIAL PRIMARY KEY,
            "title" VARCHAR(60) NOT NULL,
            "user_id" INT,
            "page_created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
            "page_updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
            FOREIGN KEY ("user_id") REFERENCES "users" ("id")
        );
    
    CREATE TABLE "subpages" (
        "id" SERIAL PRIMARY KEY,
        "title" VARCHAR(60) NOT NULL,
        "page_id" INT,
        "subpage_created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
        "subpage_updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
        FOREIGN KEY ("page_id") REFERENCES "pages" ("id") ON DELETE CASCADE
    );
    
    CREATE TABLE "notes" (
        "id" SERIAL PRIMARY KEY,
        "content" TEXT,
        "page_id" INT,
        "subpages_id" INT,
        "notes_created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
        "notes_updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
        FOREIGN KEY ("page_id") REFERENCES "pages" ("id") ON DELETE CASCADE,
        FOREIGN KEY ("subpages_id") REFERENCES "subpages" ("id") ON DELETE CASCADE
    );
    `;
        await client.query(queryString);
        console.log("Tabela reiniciada com sucesso!!");
    } catch (error) {
        console.log(error);
    }
};

export const insertTextTest = async () => {
    try {
        const queryString = `
        INSERT INTO pages (title, user_id) VALUES ('Teste', 1);
        INSERT INTO subpages (title, page_id) VALUES ('Teste', 1);
        INSERT INTO notes (content, page_id, subpages_id) VALUES ('Teste', 1, 1);
        `;
        await client.query(queryString);
        console.log("Texto de teste inserido com sucesso.");
    } catch (error) {
        console.log(error);
    }
}

export const searchTextTest = async () => {
    try {
        const queryString = `
        SELECT *
        FROM "pages"
        JOIN "subpages" ON "pages"."id" = "subpages"."page_id"
        JOIN "notes" ON "pages"."id" = "notes"."page_id";
        `;
        const result = await client.query(queryString);
        console.log("Query de busca executada com sucesso.");
        console.log(result.rows);
    } catch (error) {
        console.log(error);
    }
}