"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShortKey = exports.appendUrl = exports.hashUrl = void 0;
const crypto_1 = __importDefault(require("crypto"));
function hashUrl(originalUrl, seqNumber) {
    const md5Sum = crypto_1.default.createHash("sha256");
    const digest = md5Sum.update(originalUrl + seqNumber + "").digest("base64");
    return digest;
}
exports.hashUrl = hashUrl;
function appendUrl(hash) {
    const PORT = process.env.PORT || 8080;
    return `http://localhost:${PORT}/${hash}`;
}
exports.appendUrl = appendUrl;
function getShortKey(hash) {
    if (hash.length < 9) {
        return undefined;
    }
    return hash.slice(0, 9);
}
exports.getShortKey = getShortKey;
//# sourceMappingURL=conversion.js.map