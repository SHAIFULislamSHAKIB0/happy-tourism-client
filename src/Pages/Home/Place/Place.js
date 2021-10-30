import React from 'react';
import { Link } from 'react-router-dom';
import './Place.css'

const Place = (props) => {
    const { _id, name, img, des, price, country, days } = props.place;

    const description = des.slice(0, 70)
    return (
        <div className="col-md-4 col-sm-12 container ">
            <div className="cart our-services p-3 m-2">
                <div>
                    <img className="images" src={img} alt="" />
                </div>
                <h4 className="mt-2">{name}</h4>

                <p>{description}...</p>
                <div className="container d-flex justify-content-between align-items-center">
                    <h6>Price: ${price}</h6>
                    <h6>For: {days}</h6>
                </div>

                <Link to={`/booking/${_id}`}><button className="contact-btn">Book Now</button></Link>

                <div className="container d-flex justify-content-center align-items-center mt-4">
                    <small><p>{country}</p></small>

                </div>
            </div>
        </div>
    );
};

export default Place;