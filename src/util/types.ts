type SuccessResponse = {
  success: true;
};

type ErrorResponse = {
  message: string;
};

type CreateShortenedUrlResponse = {
  url: string;
};

export type { SuccessResponse, ErrorResponse, CreateShortenedUrlResponse };
