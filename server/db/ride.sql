CREATE TABLE rides (
    id SERIAL PRIMARY KEY,
    startPoint VARCHAR NOT NULL,
    stopPoint VARCHAR NOT NULL,
    departureTime TIME NOT NULL,
    departureDate DATE NOT NULL DEFAULT CURRENT_DATE,
    userId INTEGER REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), 
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

INSERT INTO rides (startPoint, stopPoint, departureTime, userId) VALUES
    ('ccHub, Herbert Macaulay Road, Lagos Mainland', 'Adetokunbo Ademola Street, Eti-Osa', '02:03:04', 1),
    ('CMS, Lagos Island', 'Ajah Lagos', '03:03:04', 2),
    ('Gwarinpa Estate, Abuja, Federal Capital Territory, Nigeria', 'Danube Street, Abuja, Federal Capital Territory, Nigeria', '04:03:04', 3);