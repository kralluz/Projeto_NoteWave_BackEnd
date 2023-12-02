import format from "pg-format";
import { client } from "../database";
import { CreateUser } from "../interfaces/user.interface";
import { hash } from "bcryptjs";

class UserService {
    static async createUsers(body: CreateUser): Promise<any> {
        const username = body.username;
        const email = body.email;
        body.password = await hash(body.password, 13)
        const password = body.password;
        const { rows } = await client.query(
            `INSERT INTO 
            "user" (username, email, password) VALUES ($1, $2, $3) RETURNING id, is_admin, username, email, user_created_at, user_updated_at;`,
            [username, email, password]
        );
        const response = rows[0];
        return response;
    }

    static async readUserById(userId: string): Promise<any> {
        const queryString = `
        SELECT
            id,
            is_admin, 
            username, 
            email,
            user_created_at, 
            user_updated_at 
        FROM 
            "user"
        WHERE
            id = $1;
        `;
        const queryResult = await client.query(queryString, [userId]);
        const response = queryResult.rows[0];
        return response;
    }

    static async updateUserById(
        userId: string,
        updateFields: any
    ): Promise<any> {
        const fieldNames = Object.keys(updateFields);
        const fieldValues = Object.values(updateFields);
        
        const setClause = fieldNames
            .map((fieldName, index) => {
                return format("%I = %L", fieldName, fieldValues[index]);
            })
            .join(", ");
    
        const queryConfig = format(
            `UPDATE "user" SET %s WHERE id = %L RETURNING *`,
            setClause,
            userId
        );
    
            const query = await client.query(queryConfig);
            return query.rows[0];
    }

    static async deleteUserById(id: string): Promise<any> {
        const queryConfig = `
            DELETE FROM "user"
            WHERE id = $1;
        `;
        const queryResult = await client.query(queryConfig, [id]);
        const response = queryResult.rows[0];
        return response;
    }
}

export { UserService };
