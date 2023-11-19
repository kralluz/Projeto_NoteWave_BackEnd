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
