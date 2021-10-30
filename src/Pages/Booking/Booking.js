import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css'
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const Booking = () => {
    const { user } = useAuth();
    const { placeId } = useParams();
    const [place, setPlace] = useState({})
    // console.log(place)
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        fetch(`http://localhost:5000/places/${placeId}`)
            .then(res => res.json())
            .then(data => setPlace(data))
    }, [])

    const onSubmit = data => {
        // console.log(data)
        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                // console.log(res)
                if (res.data.insertedId) {
                    alert('place order successfully')
                    reset();
                }
            })
    }

    return (
        <div className="booking add-place m-4">
            <h3>Please,Place Your Order!!</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input value={place?.name} {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
                <input value={user?.email} {...register("gmail", { required: true })} placeholder="email" />
                <input value={place?.country} {...register("country", { required: true, maxLength: 20 })} placeholder="country" />
                <input value={place?.days} {...register("days", { required: true, maxLength: 20 })} placeholder="days" />
                {/* <textarea {...register("des")} placeholder="description" /> */}
                {/* <input value={place?.price} type="number" {...register("price")} placeholder="price" /> */}
                {/* <input type="number" {...register("mobile")} placeholder="please enter Your Mobile No" /> */}


                <input type="submit" />
            </form>
            <small>Please,Make sure all your details,ok!</small>

            {/* <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    Email <input value={place?.name} type="email" name="email" ref={register} />
                    <br />
                    firstname <input name="firstname" ref={register} />
                    <br />
                    <input type="submit" />
                </form>
            </div> */}
        </div>
    );
};

export default Booking;