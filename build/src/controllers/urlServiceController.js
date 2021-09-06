"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlServiceController = void 0;
const util_1 = require("../util");
const database_1 = require("../database");
var seqNumber = 0;
const createUrl = async (request, response) => {
    const { url } = request.body;
    if (!url) {
        return response.status(400).send({
            message: "missing url!",
        });
    }
    const hashedString = (0, util_1.hashUrl)(url, seqNumber);
    seqNumber = seqNumber + 1;
    const shortKey = (0, util_1.getShortKey)(hashedString);
    const convertedUrl = (0, util_1.appendUrl)(shortKey);
    try {
        await (0, database_1.queryUrlServiceDbClient)("INSERT INTO URL (hash, converted_url, original_url) VALUES (?, ? , ?)", [hashedString, convertedUrl, url]);
    }
    catch (e) {
        console.log(e);
        return response.status(500).send({
            message: "internal server error",
        });
    }
    return response.status(200).send({
        url: convertedUrl,
    });
};
const getUrl = async (request, response) => { };
const getUrlList = async (request, response) => { };
const deleteUrl = async (request, response) => { };
exports.urlServiceController = {
    createUrl,
    getUrl,
    getUrlList,
    deleteUrl,
};
//# sourceMappingURL=urlServiceController.js.map