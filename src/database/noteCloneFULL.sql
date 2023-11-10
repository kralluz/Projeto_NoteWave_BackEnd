-- Criar a tabela "users"
CREATE TABLE
  "users" (
    "id" serial PRIMARY KEY,
    "username" varchar(255) NOT NULL,
    "email" varchar(255) UNIQUE NOT NULL,
    "password_hash" varchar(255) NOT NULL
  );

CREATE TABLE
  "pages" (
    "id" serial PRIMARY KEY,
    "title" varchar(255) NOT NULL,
    "user_id" int,
    FOREIGN KEY ("user_id") REFERENCES "users" ("id")
  );

CREATE TABLE
  "subpages" (
    "id" serial PRIMARY KEY,
    "title" varchar(255) NOT NULL,
    "page_id" int
  );

ALTER TABLE "subpages" ADD CONSTRAINT "subpages_page_id_fkey" FOREIGN KEY ("page_id") REFERENCES "pages" ("id") ON DELETE CASCADE;

CREATE TABLE
  "notes" (
    "id" serial PRIMARY KEY,
    "title" varchar(255) NOT NULL,
    "content" text,
    "subpage_id" int
  );

ALTER TABLE "notes" ADD CONSTRAINT "notes_subpage_id_fkey" FOREIGN KEY ("subpage_id") REFERENCES "subpages" ("id");