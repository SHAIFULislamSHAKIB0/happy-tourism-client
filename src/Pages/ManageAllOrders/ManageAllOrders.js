import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth();
    // console.log(orders)

    useEffect(() => {
        fetch('https://fathomless-bayou-46817.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleDelete = (id) => {
        const url = `https://fathomless-bayou-46817.herokuapp.com/orders/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert('Order deleted successfully')
                    const remaining = orders.filter(place => place._id !== id)
                    setOrders(remaining)
                }
            })
    }

    return (
        <div>
            <h2>Here we manage all Orders</h2>
            <h4>Total orders: {orders.length}</h4>
            {
                orders.map(order => <div key={order._id}>
                    <div className="m-4 align-item-center justify-content-center border border-2">
                        <div className="d-flex align-item-center justify-content-center ">
                            <div className="me-3">
                                <h4 className="p-2">Place: {order?.name}</h4>
                                <small>Name: {user?.displayName}</small>
                                <h6>For: {order?.days} Tour</h6>
                                <p>Email: {order?.gmail}</p>
                            </div>
                            <div>
                                <button onClick={() => handleDelete(order?._id)} className="btn btn-primary m-3 p-4">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageAllOrders;