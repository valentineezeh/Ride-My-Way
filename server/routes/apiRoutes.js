import express from 'express';
import { SignUpValidation, SignInValidation, Auth } from '../middleware/index';
import { UserController, RidesController } from '../controller/index';

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




// catch all invalid routes
router.get('*', (req, res) => res.status(404).json({
    message: 'Invalid Route'
}));

router.post('*', (req, res) => res.status(404).json({
    message: 'Invalid Route'
}));

export default router;