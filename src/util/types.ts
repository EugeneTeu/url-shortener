type SuccessResponse = {
  success: true;
};

type ErrorResponse = {
  code: false;
  message: string;
};

export type { SuccessResponse, ErrorResponse };
