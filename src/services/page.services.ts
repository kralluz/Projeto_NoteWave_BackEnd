import { client } from "../database";
import { Page, PageResult } from "../interfaces/page.interface";

class PageService {
    static async createPageByUserId(
        user_id: string,
        dad_id: string | null,
        title: string
    ): Promise<Page> {
        const queryString: string = `
        INSERT INTO page (
            user_id,
            dad_id,
            title
        )
        VALUES (
            $1,
            $2,
            $3
        )
        RETURNING *;
        `;
        const queryResult: PageResult = await client.query(queryString, [
            user_id,
            dad_id,
            title,
        ]);
        const response: Page = queryResult.rows[0];
        return response;
    }

    static async readPageByUserId(
        pageId: string,
        userId: string
    ): Promise<Page> {
        const queryString: string = `
        SELECT
            "u"."id" AS "userId",
            "u"."username" AS "userName",
            "u"."email" AS "userEmail",
            "u"."user_created_at" AS "userCreated",
            "u"."user_updated_at" AS "userUpdated",
            json_agg(
                json_build_object(
                    'id', "p"."id",
                    'user_id', "p"."user_id",
                    'dad_id', "p"."dad_id",
                    'title', "p"."title",
                    'page_created_at', "p"."page_created_at",
                    'page_updated_at', "p"."page_updated_at"
                )
            ) AS pages
        FROM
            "user" AS "u"
        LEFT JOIN "page" AS "p" ON "u"."id" = "p"."user_id"
        WHERE
            "u"."id" = $1
        AND 
            "p"."id" = $2
        GROUP BY
            "u"."id";
        `;
        const queryResult: PageResult = await client.query(queryString, [
            pageId,
            userId,
        ]);
        const response: Page = queryResult.rows[0];
        return response;
    }

    static async readAllPagesByUserId(id: string): Promise<Page> {
        const queryString: string = `
        SELECT
            "u"."id" AS "userId",
            "u"."username" AS "userName",
            "u"."email" AS "userEmail",
            "u"."user_created_at" AS "userCreated",
            "u"."user_updated_at" AS "userUpdated",
            json_agg(
                json_build_object(
                    'id', "p"."id",
                    'user_id', "p"."user_id",
                    'dad_id', "p"."dad_id",
                    'title', "p"."title",
                    'page_created_at', "p"."page_created_at",
                    'page_updated_at', "p"."page_updated_at"
                )
            ) AS pages
        FROM
            "user" AS "u"
        LEFT JOIN "page" AS "p" ON "u"."id" = "p"."user_id"
        WHERE
            "u"."id" = $1
        GROUP BY
            "u"."id";
        `;
        const queryResult: PageResult = await client.query(queryString, [id]);
        const response: Page = queryResult.rows[0];
        return response;
    }

    static async updatePageByUserId(
        pageId: string,
        title: string
    ) {
        const queryString: string = `
        UPDATE
            page
        SET
            title = $1
        WHERE
            id = $2
        RETURNING *;
        `;
        const queryResult: PageResult = await client.query(queryString, [
            title,
            pageId,
        ]);
        const response: Page = queryResult.rows[0];
        return response;
    }

    static async deletePageByUserId(pageId: string) {
        const queryString: string = `
        DELETE FROM
            page
        WHERE
            id = $1
        RETURNING *;
        `;
        const queryResult: PageResult = await client.query(queryString, [
            pageId,
        ]);
        const response: Page = queryResult.rows[0];
        return response;
    }
}

export { PageService };
