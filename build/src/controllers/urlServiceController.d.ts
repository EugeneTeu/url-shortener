import { Response, Request } from "express";
import { CreateShortenedUrlResponse, ErrorResponse } from "../util/types";
export declare const urlServiceController: {
    createUrl: (request: Request, response: Response<CreateShortenedUrlResponse | ErrorResponse>) => Promise<Response<CreateShortenedUrlResponse | ErrorResponse, Record<string, any>>>;
    getUrl: (request: Request, response: Response) => Promise<void>;
    getUrlList: (request: Request, response: Response) => Promise<void>;
    deleteUrl: (request: Request, response: Response) => Promise<void>;
};
