import { client } from "../database";

class NotesService {
    static async read() {
        const queryString = `
        SELECT * FROM notes; `;
        const movie = await client.query(queryString);
        return movie.rows;
    }
};

export { NotesService };