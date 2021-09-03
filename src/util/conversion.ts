import crypto from "crypto";

// this method will have hash collission at very large values
export function hashUrl(originalUrl: string, seqNumber: number): string {
  const md5Sum = crypto.createHash("sha256");
  const digest = md5Sum
    .update(originalUrl + seqNumber + "")
    .digest("base64")
    .replace("/", (Math.random() + 1).toString(36).substring(1));
  return digest;
}

export function appendUrl(hash: string): string {
  const PORT = process.env.PORT || 8080;
  return `http://localhost:${PORT}/${hash}`;
}

export function getShortKey(hash: string): string {
  if (hash.length < 9) {
    return undefined;
  }
  return hash.slice(0, 9);
}
