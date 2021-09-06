import mysql, { OkPacket, ResultSetHeader, RowDataPacket } from "mysql2/promise";
export declare const createDb: () => Promise<void>;
declare const queryUrlServiceDbClient: (sql: string, params: any[]) => Promise<{
    results: RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader;
    fields: mysql.FieldPacket[];
}>;
export { queryUrlServiceDbClient };
