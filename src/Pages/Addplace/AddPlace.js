import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddPlace.css"

const AddPlace = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data)
        axios.post('http://localhost:5000/places', data)
            .then(res => {
                // console.log(res)
                if (res.data.insertedId) {
                    alert('added successfully inserted')
                    reset();
                }
            })
    }
    return (
        <div className="add-place m-4">
            <h3>Please  addPlace</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
                <input {...register("country", { required: true, maxLength: 20 })} placeholder="country" />
                <input {...register("days", { required: true, maxLength: 20 })} placeholder="days" />
                <textarea {...register("des")} placeholder="description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="img" />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddPlace;