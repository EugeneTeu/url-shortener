type SuccessResponse = {
  success: true;
};

type ErrorResponse = {
  code: false;
  message: string;
};

type CreateShortenedUrlResponse = {
  url: string;
};

export type { SuccessResponse, ErrorResponse, CreateShortenedUrlResponse };
