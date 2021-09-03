DROP DATABASE IF EXISTS url_service;
CREATE DATABASE url_service;

use url_service;

CREATE TABLE URL (
  hash varChar(256) NOT NULL,
  converted_url varchar(256) NOT NULL,
  original_url varChar(512) NOT NULL ,
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  -- expiry_time TIMESTAMP 
  --  user_id varChar(255) 
  PRIMARY KEY (hash)
);

