"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryUrlServiceDbClient = exports.createDb = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const promise_1 = __importDefault(require("mysql2/promise"));
const createUrlServiceTableSQL = `CREATE TABLE url_service.URL (
  hash varchar(256) NOT NULL,
  converted_url varchar(256) NOT NULL,
  original_url varchar(512) NOT NULL ,
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (hash)
);`;
const startUpDbConnection = promise_1.default.createPool({
    host: process.env.HOST,
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: "",
});
const createDb = async () => {
    await startUpDbConnection.query("DROP DATABASE IF EXISTS url_service;");
    await startUpDbConnection.query("CREATE DATABASE url_service;");
    await startUpDbConnection.query(createUrlServiceTableSQL);
};
exports.createDb = createDb;
const connection = promise_1.default.createPool({
    connectionLimit: 99,
    host: process.env.HOST,
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: "url_service",
});
const queryUrlServiceDbClient = async (sql, params) => {
    const [results, fields] = await connection.query(sql, params);
    return { results, fields };
};
exports.queryUrlServiceDbClient = queryUrlServiceDbClient;
//# sourceMappingURL=urlServiceDb.js.map