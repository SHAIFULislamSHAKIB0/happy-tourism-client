import React, { useEffect, useState } from 'react';
import "./ManagePlaces.css"

const ManagePlaces = () => {
    const [places, setPlaces] = useState([])

    useEffect(() => {
        fetch('https://fathomless-bayou-46817.herokuapp.com/places')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])

    const handleDelete = (id) => {
        const url = `https://fathomless-bayou-46817.herokuapp.com/places/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert('data deleted successfully')
                    const remaining = places.filter(place => place._id !== id)
                    setPlaces(remaining)
                }
            })
    }

    return (
        <div>
            <h2 className="m-4">Here we manage Places</h2>
            {
                places.map(place => <div key={place._id}>
                    <div className="m-4 align-item-center justify-content-center">
                        <div className="d-flex align-item-center justify-content-center">
                            <div className=""><h4 className="p-2">Place: {place?.name}</h4>
                                <h6>id:{place._id}</h6></div>
                            <div>
                                <button onClick={() => handleDelete(place._id)} className="btn-warning m-3 p-2">remove</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManagePlaces;