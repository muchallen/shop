import React from 'react'

export default function Home() {
    return (
        <div>
        <section className="hero-section">
        <div className="hero-items owl-carousel">
            <div className="single-hero-items set-bg" data-setbg="imagess/slide2.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <span><h3 className="text-success">Animal Health Products</h3> </span>
                            <h1 className="text-white"  >Monthly Discount</h1>
                            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt urbit labore et dolore</p>
                            <a href="shop.html" className="primary-btn">Shop Now</a>
                        </div>
                    </div>
                    <div className="off-card">
                        <h2>Sale <span>50%</span></h2>
                    </div>
                </div>
            </div>
            <div className="single-hero-items set-bg" data-setbg="imagess/slide3.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <span><h3 className="text-success">Pesticides and Hebicides</h3></span>
                            <h1 className="text-white" style={{textShadow: "black"}}>Monthly Discount</h1>
                            <p className="text-white" style={{textShadow:"black"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore</p>
                            <a href="shop.html" className="primary-btn">Shop Now</a>
                        </div>
                    </div>
                    <div className="off-card">
                        <h2>Sale <span>50%</span></h2>
                    </div>
                </div>
            </div>
        </div>
    </section>

<div className="banner-section spad">
<div className="container-fluid">
    <div className="row">
        <div className="col-lg-4">
            <div className="single-banner">
                <img src="imagess/cattleedit2.jpg" alt=""/>
                <div className="inner-text">
                    <h4>Animal Health</h4>
                </div>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="single-banner">
                <img src="imagess/pestcontrol.png" alt=""/>
                <div className="inner-text">
                    <h4>Plant Health</h4>
                </div>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="single-banner">
                <img src="imagess/helpfeedzim.jpg" alt=""/>
                <div className="inner-text">
                    <h4>Farming</h4>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

<section className="women-banner spad">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3">
                    <div className="product-large set-bg" data-setbg="imagess/farm2.jpg">
                        <h2>Farming</h2>
                        <a href="#">Discover More</a>
                    </div>
                </div>
                <div className="col-lg-8 offset-lg-1">
                    <div className="filter-control home-options">
                        <ul id="home-options1">
                            <li className="active">Farming</li>
                            <li>Plant Health</li>
                            <li>Animal Health</li>
                            
                        </ul>
                    </div>
                    <div className="product-slider owl-carousel">
                        <div className="product-item">
                            <div className="pi-pic">
                                <img src="imagess/agriwett.png" alt=""/>
                                <div className="sale">Sale</div>
                                <div className="icon">
                                    <i className="icon_heart_alt"></i>
                                </div>
                                
                            </div>
                            <div className="pi-text">
                                <div className="catagory-name">Growth Regulant</div>
                                <a href="#">
                                    <h5>Agriwet</h5>
                                </a>
                                <div className="product-price">
                                    $14.00
                                    <span>$35.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="pi-pic">
                                <img src="imagess/fertlizer.png" alt=""/>
                                <div className="icon">
                                    <i className="icon_heart_alt"></i>
                                </div>
                                
                            </div>
                            <div className="pi-text">
                                <div className="catagory-name">Fertilizer</div>
                                <a href="#">
                                    <h5>Ammonium Nitrate</h5>
                                </a>
                                <div className="product-price">
                                    $13.00
                                </div>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="pi-pic">
                                <img src="imagess/shumbaplus.png" alt=""/>
                                <div className="icon">
                                    <i className="icon_heart_alt"></i>
                                </div>
                               
                            </div>
                            <div className="pi-text">
                                <div className="catagory-name">Growth Regulents</div>
                                <a href="#">
                                    <h5>Shumba Plus</h5>
                                </a>
                                <div className="product-price">
                                    $34.00
                                </div>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="pi-pic">
                                <img src="imagess/compoundd.png" alt=""/>
                                <div className="icon">
                                    <i className="icon_heart_alt"></i>
                                </div>
                                
                            </div>
                            <div className="pi-text">
                                <div className="catagory-name">Fertilizers</div>
                                <a href="#">
                                    <h5>Tobacco Fertilizer</h5>
                                </a>
                                <div className="product-price">
                                    $34.00
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



</div>

    )
}
