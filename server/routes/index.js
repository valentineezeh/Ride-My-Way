import express from 'express';

const router = express.Router();

// defines routes
router.get('/', (req, res) => {
    res.send('Hello, Welcome to Ride-My-Way App');
});

// catch all invalid routes
router.get('*', (req, res) => res.status(404).json({
    message: 'Invalid Route'
}));

router.post('*', (req, res) => res.status(404).json({
    message: 'Invalid Route'
}));

export default router;