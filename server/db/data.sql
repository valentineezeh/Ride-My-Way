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
    confirmPassword VARCHAR NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), 
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
    );

CREATE TABLE rides (
    id SERIAL PRIMARY KEY,
    destinationStartPoint VARCHAR NOT NULL,
    destinationStopPoint VARCHAR NOT NULL,
    departureTime VARCHAR NOT NULL,
    userId INTEGER REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), 
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE TABLE rideRequests (
    id SERIAL PRIMARY KEY,
    accept BOOLEAN NOT NULL,
    reject BOOLEAN NOT NULL,
    userId INTEGER REFERENCES users(id),
    rideId INTEGER REFERENCES rides(id),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), 
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

INSERT INTO users (firstname, lastname, about, email, password, confirmPassword) VALUES
    ('Ezeh', 'Valentine', 'I am really cool to ride with', 'val.ezeh15@gmail.com', 'Sagemode2', 'Sagemode2'),
    ('Ajayi', 'Samuel', 'I am really cool to ride with', 'ajayiSamuel@gmail.com', 'samuel', 'samuel'),
    ('Dickson', 'Jennifer', 'I am really cool to ride with', 'dickson@gmail.com', 'dickson', 'dickson');

INSERT INTO rides (destinationStartPoint, destinationStopPoint, departureTime, userId) VALUES
    ('ccHub, Herbert Macaulay Road, Lagos Mainland', 'Adetokunbo Ademola Street, Eti-Osa', '06:00 PM', 1),
    ('CMS, Lagos Island', 'Ajah Lagos', '04:00 PM', 2),
    ('Gwarinpa Estate, Abuja, Federal Capital Territory, Nigeria', 'Danube Street, Abuja, Federal Capital Territory, Nigeria', '05:00 PM', 3);

INSERT INTO rideRequests (accept, reject, userId, rideId) VALUES
    (TRUE, FALSE, 1, 1),
    (TRUE, FALSE, 2, 2),
    (TRUE, FALSE, 3, 3);

