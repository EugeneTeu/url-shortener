declare type SuccessResponse = {
    success: true;
};
declare type ErrorResponse = {
    message: string;
};
declare type CreateShortenedUrlResponse = {
    url: string;
};
export type { SuccessResponse, ErrorResponse, CreateShortenedUrlResponse };
