import React from 'react';

import img1 from '../../images/popular/popular1.jpg'
import img2 from '../../images/popular/popular2.jpg'
import img3 from '../../images/popular/popular3.jpg'
import img4 from '../../images/popular/popular4.jpg'
import img5 from '../../images/popular/popular5.jpg'
import img6 from '../../images/popular/popular6.jpg'

const PopularDestination = () => {
    return (
        <div className="mt-4">
            <h1 className="mt-4">Popular Destination</h1>
            <p>Suffered alteration in some form, by injected humour or good day randomised booth anim 8-bit hella wolf moon beard words.</p>
            <div className="row row-cols-1 row-cols-md-3 cart our-services p-3 m-2 g-4">
                <div className="col">
                    <img className="images card-img-top" src={img1} alt="" />
                    <div className="card-body">
                        <h5 className="card-title mb-3">Dubai</h5>
                    </div>
                </div>
                <div className="col">

                    <img className="images card-img-top" src={img2} alt="" />
                    <div className="card-body">
                        <h5 className="card-title mb-3">Mosco</h5>

                    </div>
                </div>
                <div className="col">

                    <img className="images card-img-top" src={img3} alt="" />
                    <div className="card-body">
                        <h5 className="card-title mb-3">Quatar</h5>


                    </div>
                </div>
                <div className="col">

                    <img className="images card-img-top" src={img4} alt="" />
                    <div className="card-body">
                        <h5 className="card-title mb-3">Pinat Iland</h5>


                    </div>
                </div>
                <div className="col">

                    <img className="images card-img-top" src={img5} alt="" />
                    <div className="card-body">
                        <h5 className="card-title mb-3">Sarjah</h5>


                    </div>
                </div>
                <div className="col">

                    <img className="images card-img-top" src={img6} alt="" />
                    <div className="card-body">
                        <h5 className="card-title mb-3">Saudi Arab</h5>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularDestination;