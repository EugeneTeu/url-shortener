import express from "express";
import { urlServiceController } from "../controllers";
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("API is working properly");
});

router.get("/url", urlServiceController.getUrlList);

router.get("/url/:id", urlServiceController.getUrl);

router.post("/url", urlServiceController.createUrl);

router.delete("/url/:id", urlServiceController.deleteUrl);

export const urlServiceRouter = router;
