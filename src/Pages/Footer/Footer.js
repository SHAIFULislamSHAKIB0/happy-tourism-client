import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMap, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Footer.css'

const Footer = () => {
    const { user, logOut } = useAuth()

    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-sm-12">
                            <div className="left-container text-start">
                                <h1>Happy Tourism</h1>
                                <div className="icons-container d-flex text-center">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faInstagramSquare} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faTwitterSquare} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faFacebookSquare} />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-5 col-sm-12">
                            <div className="right-footer-container">

                                <div className="phone d-flex align-items-center justify-content-center mt-4">
                                    <div className="foter-phone-icon">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </div>
                                    <div>
                                        <h5>+8801816800887</h5>
                                        <h6>shaifulshakib560@gmail.com</h6>
                                    </div>
                                </div>
                                <div className="map d-flex align-items-center justify-content-center mt-2">
                                    <div className="foter-phone-icon">
                                        <FontAwesomeIcon icon={faMap} />
                                    </div>
                                    <div>
                                        <p>
                                            Narayanhat,Fatikchari
                                            <br /> Chittagong,Bangladesh.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-12">
                            <div className="footer-menu-container">
                                <ul>
                                    <Link to="/home" className="nav-link"><li className="items p-2">Home</li></Link>

                                    <Link to="/places" className="nav-link"><li className="items  p-2">Places</li></Link>
                                    {
                                        user?.email && <Link to="/addplace" className="nav-link"><li className="items  p-2">addPlaces</li></Link>
                                    }

                                    {
                                        user?.email && <Link to="/manageplace" className="nav-link"><li className="items  p-2">managePlaces</li></Link>
                                    }
                                    {
                                        user?.email && <Link to="/myorders" className="nav-link"><li className="items  p-2">myOrders</li></Link>
                                    }



                                    {
                                        user.email ? <Button onClick={logOut} variant="light">LogOut</Button> :
                                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                    }
                                </ul>
                            </div>
                        </div>
                        {/* right of my web */}
                    </div>
                    <p className="">
                        <small>SHAKIB'S © . All rights reserved.</small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;