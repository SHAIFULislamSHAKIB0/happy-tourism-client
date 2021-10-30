import React from 'react';
import img1 from '../../images/banner/banner1.jpg'
import img2 from '../../images/banner/banner2.jpg'
import img3 from '../../images/banner/banner3.jpg'


const RecentTrip = () => {
    return (
        <div className="mt-4">
            <h1 className="mt-4">Recent Trips</h1>
            <div className="row row-cols-1 row-cols-md-3 cart our-services p-3 m-2 g-4">
                <div className="col">


                    <img className="images card-img-top" src={img1} alt="" />
                    <div className="card-body">
                        <h5 className="card-title mb-3">Journeys Are Best Measured In New Friends</h5>
                        <small><p>Oct 12, 2019</p></small>


                    </div>
                </div>
                <div className="col">

                    <img className="images card-img-top" src={img2} alt="" />
                    <div className="card-body">
                        <h5 className="card-title mb-3">Journeys Are Best Measured In New Friends</h5>
                        <small><p>Oct 27, 2020</p></small>



                    </div>
                </div>
                <div className="col">

                    <img className="images card-img-top" src={img3} alt="" />
                    <div className="card-body">
                        <h5 className="card-title mb-3">Journeys Are Best Measured In New Friends</h5>
                        <small><p>Oct 5, 2020</p></small>



                    </div>
                </div>
            </div>
        </div>

    );
};

export default RecentTrip;