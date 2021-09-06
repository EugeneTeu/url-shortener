require("dotenv").config();
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { urlServiceRouter } from "./src/routes";
import { createDb } from "./src/database";
import path from "path";

const app = express();

const initMain = async () => {
  try {
    await createDb();
    // Setup server port
    const PORT = process.env.PORT || 8080;
    app.use(morgan("dev"));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cors());
    app.use(urlServiceRouter);
    if (process.env.NODE_ENV == "development") {
      app.use(express.static(path.join(__dirname, "./client/build")));
      app.get("/*", (req, res) => {
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
      });
    } else {
      app.use(express.static(path.join(__dirname, "../client/build")));
      app.get("/*", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
      });
    }

    app.listen(PORT, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
    });
  } catch (e) {
    console.log(e);
    return;
  }
};

initMain();

export default app;
