CREATE TABLE rideRequests (
    id SERIAL PRIMARY KEY,
    status VARCHAR DEFAULT 'pending',
    userId INTEGER REFERENCES users(id),
    rideId INTEGER REFERENCES rides(id),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), 
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    UNIQUE(userId,rideId)
);


INSERT INTO rideRequests (userId, rideId) VALUES
    (1, 1),
    (2, 2),
    (3, 3);