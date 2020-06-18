import React from 'react'

export default function Footer() {
    return (
        <footer className="footer-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="footer-left">
                        <div className="footer-logo">
                            <h3 className="text-success">Contact Us </h3>
                        </div>
                        <ul>
                            <li>Address: </li>
                            <li>Phone: </li>
                            <li>Email: </li>
                        </ul>
                        <div className="footer-social">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 offset-lg-1">
                    
                </div>
                <div className="col-lg-2">
                    <div className="footer-widget">
                        <h3 className="text-success">My Account</h3>
                        <ul>
                            <li><a href="#">My Account</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Shopping Cart</a></li>
                            <li><a href="#">Shop</a></li>
                        </ul>
                    </div>
                </div>
               
                    
                </div>
            </div>
        <div className="copyright-reserved">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="payment-pic">
                            <img src="img/payment-method.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}
