import { sign } from "jsonwebtoken";
import { client } from "../database";
import { User, UserResult } from "../interfaces/user.interface";
import AppError from "../errors/error";
import "dotenv/config";
import { SessionCreate } from "../interfaces/session.interface";


class SessionService {
    static async startSession(data: SessionCreate): Promise<any> {
        /**
         * 1. Validar se o username existe no banco [X]
         * 2. Validar se a senha informada é a mesma do usuario no banco [X]
         * 3. Gerar o token
         */

        const query: UserResult = await client.query(
            'SELECT * FROM "users" WHERE "username" = $1;',
            [data.username]
        );

        if (query.rowCount === 0) {
            throw new AppError("Username or password is incorrect.", 401);
        }

        const user: User = query.rows[0];
        if (user.password !== data.password) {
            throw new AppError("Username or password is incorrect.", 401);
        }
        // const secret = process.env.JWT_SECRET! -> ! tira o tipo undefined da variável, garantindo que essa variável existe de fato
        const token: string = sign(
            { username: user.username, admin: user.is_admin },
            process.env.JWT_SECRET!,
            {
                subject: user.id.toString(),
                expiresIn: process.env.JWT_EXPIRES_IN!,
            }
        );
        return { token };
    }
}

export { SessionService };
