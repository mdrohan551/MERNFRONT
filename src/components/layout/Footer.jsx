// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Link} from "react-router-dom";
import footerLogo from "../../assets/images/payment.png"

const Footer = () => {
    return (
        <div>
            <div className="section-bottom shadow-sm bg-light ">
                <div className="container-md py-5">
                    <div className="row">
                        <div className="col-md-4">
                            <h1 className="bodyMedium">Legals</h1>
                            <p className="my-2">
                                <Link className="nav-link" to="/about">About</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/refund">Refund Policy</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/privacy">privacy Policy</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/terms">Terms</Link>
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h1 className="bodyMedium">Information</h1>
                            <p className="my-2">
                                <Link className="nav-link " to="/how-to-buy">How to buy</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/complain">Complain</Link>
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h1 className="bodyMedium">About</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                Ipsum </p>
                            <img className="w-75" src={footerLogo} alt={'logo'}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-dark py-3 text-center">
                <p className="text-white bodySmal">2024 All Rights Reserved &copy; <b> <Link className="text-success" to='https://www.facebook.com/rohanmohammd404' target='_blank'>Rohan</Link>  </b>Mohammad</p>
            </div>
        </div>
    );
};

export default Footer;