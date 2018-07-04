CREATE TABLE rides (
    id SERIAL PRIMARY KEY,
    destinationStartPoint VARCHAR NOT NULL,
    destinationStopPoint VARCHAR NOT NULL,
    departureTime VARCHAR NOT NULL,
    userId INTEGER REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), 
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

INSERT INTO rides (destinationStartPoint, destinationStopPoint, departureTime, userId) VALUES
    ('ccHub, Herbert Macaulay Road, Lagos Mainland', 'Adetokunbo Ademola Street, Eti-Osa', '06:00 PM', 1),
    ('CMS, Lagos Island', 'Ajah Lagos', '04:00 PM', 2),
    ('Gwarinpa Estate, Abuja, Federal Capital Territory, Nigeria', 'Danube Street, Abuja, Federal Capital Territory, Nigeria', '05:00 PM', 3);