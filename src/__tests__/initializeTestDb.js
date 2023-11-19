const sqlite3 = require("sqlite3").verbose();

function initializeTestDb() {
    const db = new sqlite3.Database(":memory:");

    db.serialize(() => {
        db.run(`
    CREATE TABLE "pages" (
        "id" INTEGER PRIMARY KEY AUTOINCREMENT,
        "title" TEXT NOT NULL,
        "user_id" INTEGER NOT NULL,
        "dad_id" INTEGER,
        "page_created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        "page_updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    `);

        db.run(`
    CREATE TABLE "notes" (
        "id" INTEGER PRIMARY KEY AUTOINCREMENT,
        "content" TEXT,
        "page_id" INTEGER NOT NULL,
        "notes_created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        "notes_updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY("page_id") REFERENCES "pages"("id") ON DELETE CASCADE
    );
    `);

        db.run(
            `INSERT INTO pages (title, user_id) VALUES (?, ?)`,
            ["Test Page", 1],
            function (err) {
                if (err) {
                    return console.log(err.message);
                }
                let lastPageId = this.lastID;

                db.run(
                    `INSERT INTO notes (content, page_id) VALUES (?, ?)`,
                    ["This is a test note", lastPageId],
                    function (err) {
                        if (err) {
                            return console.log(err.message);
                        }
                        console.log(
                            `A test note has been inserted with the page id ${lastPageId}`
                        );
                    }
                );
            }
        );

    });

    db.close();
} 

module.exports = initializeTestDb;
