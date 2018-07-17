class PostValidation {
    static rideValidator(req, res, next) {
        const errors = {
            startPoint: [],
            stopPoint: [],
            departureTime: [],
            departureDate: []
        };
        if (!req.body.startPoint) {
            errors.startPoint.push('destination starting point is required'); 
        }
        
        if (!req.body.stopPoint) {
            errors.stopPoint.push('destination stopping point is required');
        }
        
        if (!req.body.departureTime) {
            errors.departureTime.push('departure time is required');
        }

        if (!req.body.departureDate) {
            errors.departureDate.push('departure date is required');
        }
        
        if (req.body.startPoint && req.body.startPoint.toString().trim() === '') {
            errors.startPoint.push('destination starting point is required');
        } 
        if (req.body.stopPoint && req.body.stopPoint.toString().trim() === '') {
            errors.stopPoint.push('destination stopping point is required');
        }
        if (req.body.departureTime && req.body.departureTime.toString().trim() === '') {
            errors.departureTime.push('departure time is required');
        }
        if (req.body.departureDate && req.body.departureDate.toString().trim() === '') {
            errors.departureDate.push('departure date is required');
        }

        if(errors.startPoint.length > 0 || errors.stopPoint.length > 0 || errors.departureTime.length > 0 || errors.departureDate.length > 0 ){
            return res.status(400).json({
                errors
            });
        }
        return next();
    }
}

export default PostValidation;
