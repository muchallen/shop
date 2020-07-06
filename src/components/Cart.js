import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {deleteCart} from '../actions/products'
import {addToCart,decreaseCartNumber} from '../actions/products'
import { Link } from 'react-router-dom'

const Cart =(props)=> {

 const incrementCart=(obj)=>{
        props.addToCart(obj)
    }

    var sum =0
    props.cartproducts.map((prod)=>{
 
      return sum=(sum+prod.quantity * prod.product.productPrice)
 
    })

    const handleDelete = (name)=>{
        props.deleteCart(name)

    }

    const row = props.cartproducts.map((prod)=>{

        return(
        <tr>
        <td className="cart-pic first-row"><img className="cart-pic1"  src={require(`../../public/imagess/${prod.product.image}`)} style={{width:"100px",height:"100px"}} alt=""/></td>
    <td class="cart-title first-row">
        <h5 className="p-name" >{prod.product.productName}</h5>
    </td>
    <td className="p-price first-row">${prod.product.productPrice}</td>
    <td className="qua-col first-row">
        <div class="">
            <div className="" style={{display:"flex"}}>
                <button onClick={()=>{props.decreaseCartNumber(prod)}}  className="cartButton btn-danger pl-3 pr-3 mr-2" style={{width:"4em",backgroundColor:"red   "}}>-</button><input type="text" className="form-control" style={{width:"4em",
                        height:"4em"}} value={prod.quantity} /><button onClick={()=>incrementCart(prod)} style={{width:"4em"}} className="cartButton ml-2 btn-success pl-3 pr-3">+</button>
            </div>
        </div>
    </td>
    <td className="total-price first-row">
    
    
    
    
    </td>
    <td className="close-td  first-row"  onClick={()=>handleDelete(prod.product.name)}><button className=" btn btn-outline-danger " style={{width:"4em",height:"4em" , border:"none"}}><i className="ti-close"></i></button></td>
    </tr>)
    })

    console.log(props.cartproducts)
    return (
        <Fragment>
                <section className="shopping-cart spad">
        <div className="container">
            <div className="row ">
                <div className="col-lg-12">
                    <div className="cart-table">
                        <table className=" table">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th className="p-name">Product Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className="ttbody">
                               
                                {row}
                                
                            </tbody>
                        </table>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="cart-buttons">
                                <a href="#" className="primary-btn up-cart">Update cart</a>
                            </div>
                            
                        </div>
                        <div className="col-lg-4 offset-lg-4">
                            <div className="proceed-checkout">
                                <ul>
                                    
    <li >Total <span className="cart-total">${parseFloat(sum).toFixed(2)}</span></li>
                                </ul>
                                <Link to="/checkout"className="proceed-btn">PROCEED TO CHECK OUT</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </Fragment>
    )
}

const mapStateToProps=state=>(
    {
        cartproducts : state.cartReducer.cart
    }
)
export default connect(mapStateToProps, {deleteCart,addToCart,decreaseCartNumber})(Cart)
