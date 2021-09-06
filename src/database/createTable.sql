CREATE TABLE url_service.URL (
  hash varchar(256) NOT NULL,
  converted_url varchar(256) NOT NULL,
  original_url varchar(512) NOT NULL ,
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (hash)
);

