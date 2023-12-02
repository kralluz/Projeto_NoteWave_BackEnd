import { client } from "../database";
import { Page, PageResult } from "../interfaces/page.interface";

class NotesService {
    static async createNotesByPageId(
        id: string,
        content: string
    ): Promise<Page> {
        const queryString: string = `
        INSERT INTO
            note (page_id, content)
        VALUES
            ($1, $2)
        RETURNING *;
        `;
        const queryResult: PageResult = await client.query(queryString, [
            id,
            content,
        ]);
        const response: Page = queryResult.rows[0];
        return response;
    }

    static async readAllNotesByPageId(id: string): Promise<Page> {
        const queryString: string = `
        SELECT
            p.id as "pageId",
            p.user_id,
            p.dad_id,
            p.page_created_at,
            p.page_updated_at,
            p.title,
            json_agg(
                json_build_object(
                    'id', n.id,
                    'page_id', n.page_id,
                    'content', n.content,
                    'notes_created_at', n.notes_created_at,
                    'notes_updated_at', n.notes_updated_at
                )
            ) as notes
        FROM
            page p
        LEFT JOIN note n ON p.id = n.page_id
        WHERE
            p.id = $1
        GROUP BY
            p.id;
        `;
        const queryResult: PageResult = await client.query(queryString, [id]);
        const response: Page = queryResult.rows[0];
        return response;
    }

    static async updateNotesById(pageNumber: string, content: string) {
        const queryString: string = `
        UPDATE
            note
        SET
            content = $1
        WHERE
            id = $2
        RETURNING *;
        `;
        const queryResult: PageResult = await client.query(queryString, [
            content,
            pageNumber,
        ]);
        const response: Page = queryResult.rows[0];
        return response;
    }

    static async deleteNotesById(id: string) {
        const queryString: string = `
        DELETE FROM
            note
        WHERE
            id = $1
        RETURNING *;
        `;
        const queryResult: PageResult = await client.query(queryString, [id]);
        const response: Page = queryResult.rows[0];
        return response;
    }
}

export { NotesService };
