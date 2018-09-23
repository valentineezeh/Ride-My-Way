import isEmpty from 'is-empty';

export default function rideValidator(data) {
    const errors = {};
    if (!data.startPoint) {
        errors.startPoint = 'destination starting point is required'; 
    }
        
    if (!data.stopPoint) {
        errors.stopPoint = 'destination stopping point is required';
    }
        
    if (!data.departureTime) {
        errors.departureTime = 'departure time is required';
    }

    if (!data.departureDate) {
        errors.departureDate = 'departure date is required';
    }
        
    if (data.startPoint && data.startPoint.toString().trim() === '') {
        errors.startPoint = 'destination starting point is required';
    } 
    if (data.stopPoint && data.stopPoint.toString().trim() === '') {
        errors.stopPoint = 'destination stopping point is required';
    }
    if (data.departureTime && data.departureTime.toString().trim() === '') {
        errors.departureTime = 'departure time is required';
    }
    if (data.departureDate && data.departureDate.toString().trim() === '') {
        errors.departureDate = 'departure date is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}

