import { Response, Request } from "express";
import { hashUrl, appendUrl, getShortKey } from "../util";
import { queryUrlServiceDbClient } from "../database";

var seqNumber = 0;

const createUrl = async (request: Request, response: Response) => {
  const { url } = request.body;

  if (!url) {
    return response.status(400).send("missing url!");
  }

  // we can easily switch our seqNumber for user ID
  const hashedString = hashUrl(url, seqNumber);
  seqNumber = seqNumber + 1;
  const shortKey = getShortKey(hashedString);
  // get hash
  //TODO: store hash and url into db
  const convertedUrl = appendUrl(shortKey);
  try {
    await queryUrlServiceDbClient(
      "INSERT INTO URL (hash, converted_url, original_url) VALUES (?, ? , ?)",
      [hashedString, convertedUrl, url]
    );
  } catch (e) {
    console.log(e);
    return response.status(500).send("internal server error");
  }
  return response.status(200).send({
    url: convertedUrl,
  });
};

const getUrl = async (request: Request, response: Response) => {};

const getUrlList = async (request: Request, response: Response) => {};

const deleteUrl = async (request: Request, response: Response) => {};

export const urlServiceController = {
  createUrl,
  getUrl,
  getUrlList,
  deleteUrl,
};
