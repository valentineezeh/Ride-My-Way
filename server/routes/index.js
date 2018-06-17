import express from 'express';
import { AllRides, GetSingleRide, PostRide, PostRideRequest }  from '../dummy_data/controllers/index'
const router = express.Router();

// defines routes
router.get('/', (req, res) => {
    res.send('Hello, Welcome to Ride-My-Way App');
});

// routes for ride-my-way
router.get('/rides', AllRides.getAllRides);
router.get('/rides/:rideId', GetSingleRide.singleRide);
router.post('/rides', PostRide.newRide);
router.post('/rides/:rideId/request', PostRideRequest.rideRequest);

// catch all invalid routes
router.get('*', (req, res) => res.status(404).json({
    message: 'Invalid Route'
}));

router.post('*', (req, res) => res.status(404).json({
    message: 'Invalid Route'
}));

export default router;