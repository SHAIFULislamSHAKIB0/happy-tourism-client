import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';
import './Places.css'

const Places = () => {
    const [places, setPlaces] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/places')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])


    return (
        <div>
            <div className="container mt-4">
                <h2>Popular Places</h2>
                <p><small>Suffered alteration in some form, by injected humour or good day randomised booth anim 8-bit hella wolf moon beard words.</small></p>
            </div>
            <div className="row">
                {
                    places.map(place => <Place key={place._id} place={place}></Place>)
                }

            </div>
        </div>
    );
};

export default Places;