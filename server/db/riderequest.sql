CREATE TABLE rideRequests (
    id SERIAL PRIMARY KEY,
    accept BOOLEAN NOT NULL,
    reject BOOLEAN NOT NULL,
    userId INTEGER REFERENCES users(id),
    rideId INTEGER REFERENCES rides(id),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), 
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);


INSERT INTO rideRequests (accept, reject, userId, rideId) VALUES
    (TRUE, FALSE, 1, 1),
    (TRUE, FALSE, 2, 2),
    (TRUE, FALSE, 3, 3);