CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR(60) NOT NULL,
  "email" VARCHAR(30) NOT NULL,
  "password" VARCHAR(400),
  "user_created_at_" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP),
  "user_updated_at" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE "pages" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR(60) NOT NULL,
  "user_id" INT NOT NULL,
  "dad_id" int,
  "page_created_at" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP),
  "page_updated_at" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE "notes" (
  "id" SERIAL PRIMARY KEY,
  "content" TEXT,
  "page_id" INT NOT NULL,
  "notes_created_at" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP),
  "notes_updated_at" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP)
);

ALTER TABLE "pages" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "notes" ADD FOREIGN KEY ("page_id") REFERENCES "pages" ("id") ON DELETE CASCADE;
