import dotenv from "dotenv";

dotenv.config();

import mysql, {
  OkPacket,
  ResultSetHeader,
  RowDataPacket,
} from "mysql2/promise";

const connection = mysql.createPool({
  connectionLimit: 99,
  host: process.env.HOST,
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: "url_service",
});
// wrapper around the execution of query
const queryUrlServiceDbClient = async (
  sql: string,
  params: any[]
): Promise<{
  results:
    | RowDataPacket[]
    | RowDataPacket[][]
    | OkPacket
    | OkPacket[]
    | ResultSetHeader;
  fields: mysql.FieldPacket[];
}> => {
  const [results, fields] = await connection.query(sql, params);

  return { results, fields };
};

export { queryUrlServiceDbClient };
