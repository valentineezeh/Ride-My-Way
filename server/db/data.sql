DROP DATABASE IF EXISTS ridemyway;
CREATE DATABASE ridemyway;

\c ridemyway

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR NOT NULL,
    lastname VARCHAR NOT NULL,
    sex VARCHAR NOT NULL,
    email VARCHAR NOT NULL UNIQUE,
    password VARCHAR NOT NULL,
    confirmPassword VARCHAR NOT NULL
    );

CREATE TABLE rides (
    id SERIAL PRIMARY KEY,
    destinationStartPoint VARCHAR NOT NULL,
    destinationStopPoint VARCHAR NOT NULL,
    departureTime VARCHAR NOT NULL,
    userId INTEGER REFERENCES users(id)
);

CREATE TABLE rideRequests (
    id SERIAL PRIMARY KEY,
    rideRequest VARCHAR NOT NULL,
    userId INTEGER REFERENCES users(id),
    rideId INTEGER REFERENCES rides(id)
);

INSERT INTO users (firstname, lastname, sex, email, password, confirmPassword) VALUES
    ('Ezeh', 'Valentine', 'male', 'val.ezeh15@gmail.com', 'Sagemode2', 'Sagemode2'),
    ('Ajayi', 'Samuel', 'male', 'ajayiSamuel@gmail.com', 'samuel', 'samuel'),
    ('Dickson', 'Jennifer', 'female', 'dickson@gmail.com', 'dickson', 'dickson');

INSERT INTO rides (destinationStartPoint, destinationStopPoint, departureTime, userId) VALUES
    ('ccHub, Herbert Macaulay Road, Lagos Mainland', 'Adetokunbo Ademola Street, Eti-Osa', '06:00 PM', 1),
    ('CMS, Lagos Island', 'Ajah Lagos', '04:00 PM', 2),
    ('Gwarinpa Estate, Abuja, Federal Capital Territory, Nigeria', 'Danube Street, Abuja, Federal Capital Territory, Nigeria', '05:00 PM', 3);

INSERT INTO rideRequests (rideRequest, userId, rideId) VALUES
    ('Request to join ride 1', 1, 1),
    ('Request to join ride 2', 2, 2),
    ('Request to join ride 3', 3, 3);

