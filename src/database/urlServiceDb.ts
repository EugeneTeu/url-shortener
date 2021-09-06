import dotenv from "dotenv";
import fs from "fs";
import path from "path";
dotenv.config();

import mysql, {
  OkPacket,
  ResultSetHeader,
  RowDataPacket,
} from "mysql2/promise";

const sqlFilePath = path.join(__dirname, "createTable.sql");
const sqlScript = fs.readFileSync(sqlFilePath).toString();
const startUpDbConnection = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: "",
});
// for every server instance we nuke the db then create a new one
export const createDb = async () => {
  await startUpDbConnection.query("DROP DATABASE IF EXISTS url_service;");
  await startUpDbConnection.query("CREATE DATABASE url_service;");
  await startUpDbConnection.query(sqlScript);
};

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
