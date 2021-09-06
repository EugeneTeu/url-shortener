import axios from "axios";
import { CreateShortenedUrlResponse, ErrorResponse } from "./types";

const BASE_API = "http://localhost:8080/url";

export const createShortenedUrl = async ({ url }: { url: string }) => {
  const response = await fetch(BASE_API, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });
  if (!response.ok) {
    const { message } = (await response.json()) as ErrorResponse;
    throw new Error(message);
  }
  const result: CreateShortenedUrlResponse = (await response.json()) as CreateShortenedUrlResponse;
  return result;
};
