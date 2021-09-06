"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlServiceRouter = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const router = express_1.default.Router();
router.get("/url", controllers_1.urlServiceController.getUrlList);
router.get("/url/:id", controllers_1.urlServiceController.getUrl);
router.post("/url", controllers_1.urlServiceController.createUrl);
router.delete("/url/:id", controllers_1.urlServiceController.deleteUrl);
exports.urlServiceRouter = router;
//# sourceMappingURL=urlServiceRouter.js.map