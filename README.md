# url-shortener
for govtech TAP 


url: (over http) `http://35.232.1.32:8080/`

# URL Shortener Tech Design

## Background

- User want to be able to submit any url so that it can be shortened and used / shared
- Backend api server to handle conversion of a given url
- Frontend app that allow user to submit a request to convert a url andd print converted URL
- Store url in Relational database

I have chosen the following technology to code this application in

- `NodeJs` (Express)
- `React`
- `Typescript`
- `MySQL`

### Schema

```mysql

CREATE TABLE url_service.URL (
  hash varchar(256) NOT NULL,
  converted_url varchar(256) NOT NULL,
  original_url varchar(512) NOT NULL ,
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (hash)
);

```

- Each url is uniquely identified by their hash
- If multiple users submit the same url, it will be stored as different hashes

#### System Architecture

The following documents the overall architecture of the system

```plantuml

package "Backend Express server" {
  [Client App (react)]
  [API server]
}


database "database" {
  [url_service]
}

[Client App (react)] -> [API server]
[API server] -> [url_service]
```

![architecture](/architecture.png)

---

- BE Serves FE on a single VM instance in google cloud

#### API Design

- POST `BASE_URL/url`

| Request            | Response Format    |
| ------------------ | ------------------ |
| `{"url" : string}` | `{ "url": string}` |

#### Generating Hash Logic

- Method to generate Hash

```js
export function hashUrl(originalUrl: string, seqNumber: number): string {
  const md5Sum = crypto.createHash("sha256");
  const digest = md5Sum.update(originalUrl + seqNumber + "").digest("base64");
  return digest;
}

export function getShortKey(hash: string): string {
  if (hash.length < 9) {
    return undefined;
  }
  return hash.slice(0, 9);
}
```

- Takes in the single user string and a unique sequence number
- Hashes against `SHA256` and encode it in base64
- Takes the first 8 characters of the string (gives us 64^8 unique strings)
- Stores this hash as the primary key.
- unique sequence number to handle case where 2 users submit the same url to be converted, the api behaviour will return valid shortened links for both users that are unique!
