import React, {useEffect} from 'react'
import {Carousel} from 'react-bootstrap'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getAllProducts,addToCart,filterProducts} from '../actions/products'

 const Home = (props)=>{

   
  useEffect(()=> {
    props.getAllProducts()}  
, []
)
    return (
       <div className="ml-5 mr-5 mt-3">
        <Carousel>
  <Carousel.Item>
    <img
      style={{opacity:"1.5",
    }}
      className="d-block w-100"
      src={require("../components/imgg/slider3.jpg")}
      alt="First slide"
    />
    <Carousel.Caption>
      <h1 className="text-warning" yle={{width:"10em",
      textShadow:" # 4px 4px 4px 4px"
    }}><strong>Laptops and Accessories</strong></h1>
      <h3 >Ulta Portable , UltraBook, NetBook etc</h3>
      <button className="btn btn-outline-secondary text-white mt-3" style={{width:"10em",
    }}>Shop Now</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{opacity:"0.9"}}
      className="d-block w-100"
      src={require("../components/imgg/slider.jpg")}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h1 className><strong>Infrastructure and Cloud Services</strong></h1>
      <button className="btn btn-outline-secondary  text-white mt-3" style={{width:"10em",
    }}>Shop Now</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{height:""}}
      className="d-block w-100"
      src={require("../components/imgg/softawaredev1.jpg")}
      alt="First slide"
    />
    <Carousel.Caption>
    
      <button className="btn btn-outline-primary text-white " style={{width:"10em",
      marginTop:"10em"
    }}>Contact Us</button>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      style={{height:""}}
      className="d-block w-100"
      src={require("../components/imgg/icttranning.jpg")}
      alt="First slide"
    />
    <Carousel.Caption>
    <button className="btn btn-outline-primary text-white " style={{width:"10em", marginTop:"10em"
    }}>Contact Us</button>
    </Carousel.Caption>
  </Carousel.Item>
  

</Carousel>

<section className="latest-blog spad">
        <div className="container">
            
            <div className="benefit-items">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="single-benefit">
                            <div className="sb-icon">
                                <img src={require("./imgg/icon-1.png")} alt=""/>
                            </div>
                            <div className="sb-text">
                                <h6>Free Delivery</h6>
                                <p>For all order over $2000.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-benefit">
                            <div className="sb-icon">
                                <img src={require("./imgg/icon-2.png")} alt=""/>
                            </div>
                            <div className="sb-text">
                                <h6>Delivery On Time</h6>
                                <p>Local and International</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-benefit">
                            <div className="sb-icon">
                                <img src={require("./imgg/icon-3.png")}alt=""/>
                            </div>
                            <div className="sb-text">
                                <h6>Secure Payment</h6>
                                <p>100% secure payment</p>
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

const maStateToProps= state=>({
    allproducts : state.productsReducer.products,
    filtered:state.productsReducer.filtered,
    cartproducts : state.cartReducer.cart
    })
export default connect(maStateToProps, {getAllProducts})(Home)