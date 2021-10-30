import React, { useEffect, useState } from 'react';
import './MyOrders.css'

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    console.log(orders)

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleDelete = (id) => {
        const url = `http://localhost:5000/orders/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.deletedCount) {
                    alert('Order deleted successfully')
                    const remaining = orders.filter(place => place._id !== id)
                    setOrders(remaining)
                }
            })
    }


    return (
        <div>
            <h3>Your total Orders: {orders.length}</h3>
            {
                orders.map(order => <div key={order._id}>
                    <div className="m-4 align-item-center justify-content-center">
                        <div className="d-flex align-item-center justify-content-center">
                            <div className=""><h4 className="p-2">Place: {order?.name}</h4>
                                <h6>For: {order.days} Tour</h6></div>
                            <div>
                                <button onClick={() => handleDelete(order._id)} className="btn-danger m-3 p-2">Cancel trip</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyOrders;