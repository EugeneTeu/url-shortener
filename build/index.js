"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = require("./src/routes");
const database_1 = require("./src/database");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const initMain = async () => {
    try {
        await (0, database_1.createDb)();
        const PORT = process.env.PORT || 8080;
        app.use((0, morgan_1.default)("dev"));
        app.use(express_1.default.urlencoded({ extended: false }));
        app.use(express_1.default.json());
        app.use((0, cors_1.default)());
        app.use(routes_1.urlServiceRouter);
        if (process.env.NODE_ENV == "development") {
            app.use(express_1.default.static(path_1.default.join(__dirname, "./client/build")));
            app.get("/*", (req, res) => {
                res.sendFile(path_1.default.join(__dirname, "./client/build/index.html"));
            });
        }
        else {
            app.use(express_1.default.static(path_1.default.join(__dirname, "../client/build")));
            app.get("/*", (req, res) => {
                res.sendFile(path_1.default.join(__dirname, "../client/build/index.html"));
            });
        }
        app.listen(PORT, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
        });
    }
    catch (e) {
        console.log(e);
        return;
    }
};
initMain();
exports.default = app;
//# sourceMappingURL=index.js.map