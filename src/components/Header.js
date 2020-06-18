import React, {useState} from 'react'
import{ BrowserRouter as Router,Route,Switch,
    Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteCart} from '../actions/products'

const Header=(props)=> {
 
    
const HandleDelete =(name)=>{
    props.deleteCart(name)
    
}

   var sum =0
   props.cartproducts.map((prod)=>{

     return sum=sum+prod.quantity * prod.product.price

   })
   
const smallcart = props.cartproducts.map((prod)=>{
return <tr>
        <td className="si-pic"><img src={require(`../../public/imagess/${prod.product.imageSrc}`)} className="imageproduct" style={{width:"80px",height:"80px"}}  alt=""/></td>
        <td className="si-text">
            <div className="product-selected">
            <h6 className="category">{prod.product.category}</h6>
             <p className="product-namess">{prod.product.name}</p>
    <p><span className="price">${prod.product.price}.00</span> x <span className="quantity">{prod.quantity}</span></p>
            </div>
        </td>
        <td className="si-close" onClick={()=>HandleDelete(prod.product.name)}>
            <i className="text-danger ti-close"></i>
        </td>
        </tr>
    })

    return (
        <header className="header-section">
        <div className="header-top">
            <div className="container">
                <div className="ht-left">
                    <div className="mail-service">
                        <i className=" fa fa-envelope"></i>
                        hello.centricdata.net
                    </div>
                    <div className="phone-service">
                        <i className=" fa fa-phone"></i>
                        +263 0779 238 324
                    </div>
                </div>
                <div className="ht-right">
                <Link className="login-panel"><i className="fa fa-user"></i>Login</Link>       
                             <div className="lan-selector">
                        <select className="language_drop" name="countries" id="countries" style={{width:300}}>
                            <option value='yt' data-image="img/flag-1.jpg" data-imagecss="flag yt"
                                data-title="English">English</option>
                            
                        </select>
                    </div>
                    <div className="top-social">
                        <Link><i className="ti-facebook"></i></Link>
                        <Link><i className="ti-twitter-alt"></i></Link>
                        <Link><i className="ti-linkedin"></i></Link>
                        <Link><i className="ti-pinterest"></i></Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="inner-header">
                <div className="row">
                    <div className="col-lg-2 col-md-2">
                        <div className="logo">
                        <Link>
                                <img src="imagess/centricdata.jpg" alt=""/>
                                </Link>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7">
                        <div className="advanced-search">
                            <button type="button" className="category-btn">All Categories</button>
                            <div className="input-group">
                                <input type="text" placeholder="What do you need?"/>
                                <button type="button"><i className="ti-search"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 text-right col-md-3">
                        <ul className="nav-right">
                           
                            <li className="cart-icon"><Link>
                                    <i className="icon_bag_alt"></i>
                            <span className="cart-products">{props.cartproducts.length}</span>
                                </Link>
                                <div className="cart-hover">
                                    <div className="select-items">
                                        <table>
                                            <tbody className="tbody" > 
                                          {smallcart}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="select-total">
                                        <span>total:</span>
                                    <h5 className="Total">${sum}</h5>
                                    </div>
                                    <div className="select-button">
                                    <Link to="/shopping-cart" className="primary-btn view-card">VIEW CART</Link>
                                    <Link to="/checkout" className="primary-btn checkout-btn">CHECK OUT</Link>
                                    </div>
                                </div>
                            </li>
                         <li className="cart-price">${sum}.00</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="nav-item">
            <div className="container">
                <div className="nav-depart">
                    <div className="depart-btn">
                        <i className="ti-menu"></i>
                        <span>All Poducts</span>
                        <ul className="depart-hover">
                           <li> <Link to="/desktops">Desktops</Link></li>
                            <li><Link to="/laptops">Laptops</Link></li>
                            <li><Link to="/ict-training">ICT Training</Link></li>
                            <li><Link to="/software-developemnt">Software Developemnt</Link></li>
                            
                         </ul>
                    </div>
                </div>
                <nav className="nav-menu mobile-menu">
                    <ul>
                        <li className="li-home" ><Link to="/">Home</Link></li>
                        <li className="active li-shop"><Link to="/shop">Shop</Link></li>
                        <li className="li-cart"><Link to="/shopping-cart">Shopping Cart</Link></li>
                        <li className="li-checkout"><Link to="/checkout">Checkout</Link></li>
                    </ul>
                </nav>
                <div id="mobile-menu-wrap"></div>
            </div>
        </div>
    </header>
    )
}
    const mapStateToProps = state=>(
        {
            cartproducts : state.cartReducer.cart
        }
    )


export default connect(mapStateToProps, {deleteCart})(Header)
