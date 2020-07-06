import React , {Fragment, useState} from 'react'
import {connect} from 'react-redux'

import axios from 'axios'

const Checkout = (props) =>{
    const [customer , setCustomer] = useState()
    var reciept=[]

    for(var i=0;i<props.cartProducts.length;i++){
        reciept=[...reciept,{product:props.cartProducts[i]}]
    }

    console.log(reciept);


    var sum =0
    props.cartProducts.map((prod)=>{
 
      return sum=sum+prod.quantity * prod.product.productPrice
 
    })

    const handleCustomer=(e) => {
        setCustomer({...customer, [e.target.name]:e.target.value})
    }

    const handlePay=(e)=>{
        e.preventDefault();
        axios.post(`http://localhost:8080/api/v1/sales`,props.cartProducts).then(res=>{if(res.data===true){
            alert("Your Paymet Was Successfull")
        }else{
            alert("Your Payment failed try again later")
        }
        }
        )
    }

   const checkoutProducts = props.cartProducts.map(prod=>{
    return  <li><h5>{prod.product.productName} x {prod.quantity}<span>${prod.product.productPrice*prod.quantity}</span></h5></li>
    })
    return (
        <Fragment>
             <div className="breacrumb-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb-text product-more">
                        <a href="./index.html"><i className="fa fa-home"></i> Home</a>
                        <a href="./shop.html">Shop</a>
                        <span>Check Out</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <section className="checkout-section spad">
        <div className="container">
            <form action="#" className="checkout-form">
                <div className="row">
                    <div className="col-md-6">
                        
                        <h4>Billing Details</h4>
                        <div className="row">
                            <div className="col-lg-6">
                                <label for="fir">First Name<span>*</span></label>
                                <input name="firstName" onClick={(e)=>{handleCustomer(e)}} onChange type="text"  id="fir"/>
                            </div>
                            <div className="col-lg-6">
                                <label for="last">Last Name<span>*</span></label>
                                <input name="lastName" onClick={(e)=>{handleCustomer(e)}} type="text" id="last"/>
                            </div>
                            <div className="col-lg-12">
                                <label for="cun-name">Company Name</label>
                                <input name="companyName" onClick={(e)=>{handleCustomer(e)}} type="text" id="cun-name"/>
                            </div>
                           
                            <div className="col-lg-12">
                                <label for="street">Address<span>*</span></label>
                                <input name="address" onClick={(e)=>{handleCustomer(e)}} type="text" id="street" className="street-first"/>
                                
                            </div>
                            <div className="col-lg-12">
                                <label for="zip">Postcode / ZIP (optional)</label>
                                <input name="zipCode" onClick={(e)=>{handleCustomer(e)}} type="text" id="zip"/>
                            </div>
                            <div className="col-lg-12">
                                <label for="town">Town / City<span>*</span></label>
                                <input name="city"  onClick={(e)=>{handleCustomer(e)}} type="text" id="town"/>
                            </div>
                            <div className="col-lg-6">
                                <label for="email">Email Address<span>*</span></label>
                                <input name="email" onClick={(e)=>{handleCustomer(e)}} type="text" id="email"/>
                            </div>
                            <div className="col-lg-6">
                                <label for="phone">Phone<span>*</span></label>
                                <input name="phone" onClick={(e)=>{handleCustomer(e)}} type="number" id="phone"/>
                            </div>
                            <div className="col-lg-12"/>
                                
                            </div>
                        </div>
                        <div className="col-md-6">
                        
                        <div className="place-order">
                            <h4>Your Order</h4>
                            <div className="order-total ">
                                <label>Select Currency</label>
                                <div className=" input-group mb-5">
                                    <select  className=" custom-select" id="money-option" >
                                            
                                            <option id="option1" value="1">RTGS</option>
                                            <option id="option2" value="2">USD</option>
                                          </select>
                                        </div>
                                <ul className="order-table">
                                    <li>Product <span>Total</span></li>
                                        {checkoutProducts}
                                   
                                
                                    
                                </ul>
                                <ul className="text-right mb-3 " style={{listStyle:  "none"}}>
                                        
    <li >Grand Total <h3><span className="text-success total-price ml-3" >${parseFloat(sum).toFixed(2)}</span></h3></li>
                                </ul>
                               
                                <div className="order-total ">
                                        <label>Payment Method</label>
                                        <div className="input-group mb-5">
                                            <select className="custom-select payment-method">
                                                    <option selected>Ecocash</option>
                                                    {/* <option value="1">Telecash </option>
                                                    <option value="2">PayNow</option>
                                                    <option value="2">Credit Card</option> */}
                                                  </select>
                                                </div>
                                                <div className="items">
                                                    
                                                    <div className="inputs">
                                                        <label for="">Phone Number</label>
                                                        <input  type="number" className="phone"/>
                                                    </div>

                                                </div>
                                <div className="order-btn">
                                    <button type="submit" onClick={(e)=>handlePay(e)} className="site-btn place-btn">Pay</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    </div>
                    
            </form>
        </div>
    </section>
    
            
        </Fragment>
    )
}

const mapStateToProps= state =>({
    cartProducts : state.cartReducer.cart
})
export default connect(mapStateToProps)(Checkout)
