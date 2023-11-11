CREATE TABLE
    "users" (
        "id" SERIAL PRIMARY KEY,
        "username" VARCHAR(60) NOT NULL,
        "email" VARCHAR(30) NOT NULL,
        "password" VARCHAR(400)
    );

CREATE TABLE
    "pages" (
        "id" SERIAL PRIMARY KEY,
        "title" VARCHAR(60) NOT NULL,
        "user_id" INT,
        FOREIGN KEY ("user_id") REFERENCES "users" ("id")
    );

CREATE TABLE "subpages" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(60) NOT NULL,
    "page_id" INT,
    FOREIGN KEY ("page_id") REFERENCES "pages" ("id")
);

ALTER TABLE "subpages" ADD CONSTRAINT "page_id" FOREIGN KEY ("page_id") REFERENCES "pages" ("id") ON DELETE CASCADE;

CREATE TABLE "notes" (
    "id" SERIAL PRIMARY KEY,
    "content" TEXT,
    "subpages_id" INT,
    "page_id" INT,
    FOREIGN KEY ("page_id") REFERENCES "pages" ("id"),
    FOREIGN KEY ("subpages_id") REFERENCES "subpages" ("id")
);

ALTER TABLE "notes" ADD CONSTRAINT "notes_pages_id_fkey" FOREIGN KEY ("pages_id") REFERENCES "pages" ("id") ON DELETE CASCADE;
ALTER TABLE "notes" ADD CONSTRAINT "notes_subpages_id_fkey" FOREIGN KEY ("subpages_id") REFERENCES "subpages" ("id") ON DELETE CASCADE;