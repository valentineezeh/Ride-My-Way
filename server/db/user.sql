DROP DATABASE IF EXISTS ridemyway;
CREATE DATABASE ridemyway;

\c ridemyway

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR NOT NULL,
    lastname VARCHAR NOT NULL,
    about TEXT NOT NULL,
    email VARCHAR NOT NULL UNIQUE,
    password VARCHAR NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), 
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
    );

    INSERT INTO users (firstname, lastname, about, email, password) VALUES
    ('Ezeh', 'Valentine', 'I am really cool to ride with', 'val.ezeh15@gmail.com', 'Sagemode2'),
    ('Ajayi', 'Samuel', 'I am really cool to ride with', 'ajayiSamuel@gmail.com', 'samuel'),
    ('Dickson', 'Jennifer', 'I am really cool to ride with', 'dickson@gmail.com', 'dickson');