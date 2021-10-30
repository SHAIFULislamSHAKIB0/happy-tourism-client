import React from 'react';
import { useParams } from 'react-router';
import './Booking.css'

const Booking = () => {
    const { placeId } = useParams();
    return (
        <div className="booking">
            <h2>this is booking: {placeId}</h2>
        </div>
    );
};

export default Booking;