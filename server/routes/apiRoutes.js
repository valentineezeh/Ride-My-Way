import express from 'express';
import { SignUpValidation, SignInValidation, Auth, PostValidation, RideRequestValidation} from '../middleware/index';
import { UserController, RidesController } from '../controller/index';
import RideRequestController from '../controller/rideRequest';

const router = express.Router();

// defines routes
router.get('/', (req, res) => {
    res.send('Hello, Welcome to Ride-My-Way App');
});

// routes for ride-my-way
router.post('/auth/signup', SignUpValidation.signUp, UserController.signUp);
router.post('/auth/login', SignInValidation.signIn, UserController.signInUser);

// Routes for rides
router.get('/rides', Auth.verify, RidesController.getAllRides)
router.get('/rides/:rideId', Auth.verify, RidesController.getARide)

router.post('/users/rides', Auth.verify, PostValidation.rideValidator, RidesController.postRide)

router.get('/user/rides', Auth.verify, RidesController.getUserRide)

//Routes for Ride Request
router.get('/users/rides/:rideId/requests', Auth.verify, RideRequestController.getAllRideRequest)

router.post('/rides/:rideId/requests', Auth.verify, RideRequestController.postRideRequest)

router.put('/users/rides/:rideId/requests/:requestId', Auth.verify, RideRequestValidation.rideRequest, RideRequestController.putRideRequest)




// catch all invalid routes
router.get('*', (req, res) => res.status(404).json({
    message: 'Invalid Route'
}));

router.post('*', (req, res) => res.status(404).json({
    message: 'Invalid Route'
}));

export default router;