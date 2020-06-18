import React, {useState, useEffect} from 'react'
import {allProducts} from './AllProducts'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {getAllProducts,addToCart} from '../actions/products'
import {Modal,Button} from 'react-bootstrap'

import './App.css'

const Shop = (props)=> {
 
    useEffect(()=>{
        props.getAllProducts()
    },[])


    const [show, setShow] = useState(false);
    const [product , setProduct]= useState({})
    let [quantity, setQuantity]= useState(1)
    let imgDir = "imagess/"
  
    const handleClose = () => setShow(false);
    const handleShow =()=>setShow(true)

    const showmodal=(obj)=>{
        setProduct(obj)
        console.log(obj)
        handleShow()
        return
    }

    const HandleAddtoCart=(prod,quantity)=>{
            handleClose()
            props.addToCart({quantity,product:prod})
    }

 
        const productzz = props.allproducts.map((prod)=>{
            const imgsrc= "imagess/"+prod.imageSrc
            return(  
                
    <div className="col-lg-4 col-sm-6" key={prod.pid}> 
    <div className="product-item">
    <div className="pi-pic">
                   <img src={imgsrc} className="imageproduct" style={{width:200,height:250}}  alt=""/>
                   
                   <div className="icon">
                       <h5 className="qty text-success"></h5>
                   </div>
                   
    
                   <ul>
                   <li   className="w-icon active "><button className="btn btn-success" ><i className="icon_bag_alt"></i></button></li>
                       <li className="quick-view add-cart"><button className="btn" onClick={()=>{showmodal(prod)}}><strong>Add To Cart</strong></button></li>
                       <li className="w-icon active"><button className="btn btn-danger" ><strong>-</strong></button></li>
                   </ul>
               </div>
               <div className="pi-text">
                   <div className="catagory-name product-name">{prod.category}</div>
                   <a  >
                       <h5 className="pname">{prod.name}</h5>
                   </a>
                   <div className="product-price">
                       {prod.price}.00
                   </div>
               </div>
           </div>
    </div>
            )
        })
        
        

    return (
        <div>
         
                <div className="breacrumb-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb-text">
                        <a ><i className="fa fa-home"></i> Home</a>
                        <span>Shop</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section className="product-shop spad">
        <div className="container">
            <div className="row main-container">
                <div className="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter">
                    <div className="filter-widget">
                        <h4 className="fw-title">Categories</h4>
                        <ul className="filter-catagories products-filter">
                            <li  id="all-products" className="active " ><Link className="text-white" to="/all-products">All Products</Link></li>
                            <li  id="insecticides" ><Link to="/laptops">Laptops</Link></li>
                            <li id="hebicides" ><Link to="/desktops">Desktops</Link></li>
                            <li id="fungicides"><Link to="/ict-training">ICT Infrastucture</Link></li>
                            <li id="fungicides"><Link to="/ict-training">ICT Training</Link></li>
                            <li id="nematicides"><Link to="/software-developemnt">Software Development</Link></li>
                            
                        </ul>
                    </div>
                   
                    
                   
                    
                    
                </div>
                <div className="col-lg-9 order-1 order-lg-2">
                    <div className="section-title">
                        <h2 className="section-titlez">All Products</h2>
                    </div>
                    <div className="product-list">
                        <div className="row prod">
                            
                         
                           {productzz}
                            
                            
                                
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
    
    <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
    <Modal.Title>{product.name}</Modal.Title>
          </Modal.Header>
    <Modal.Body><div className="product-item">

    <div className="pi-pic">
                   
                   <img src={imgDir+product.imageSrc} className="imageproduct" style={{width:250,height:250}}  alt=""/> 
    
                    <div className="" style={{display:"flex",
                    justifyContent:"center",
                    margin:"1.5em"  
                }}>
                   
                    <button onClick={()=>{
                        if(quantity<=1){
                            setQuantity(1)
                        }else setQuantity(quantity=quantity-1)}} className="btn btn-danger mr-2 "style={{width:"3em"}}  ><strong>-</strong></button>
                        <input type="text" value={quantity} style={{width:"3em"}} className="form-control"id=""></input>
                        <button onClick={()=>setQuantity(quantity=quantity+1)} className="btn btn-success ml-2" style={{width:"3em"}} >+</button>
                    
                    </div>
               </div>
               <div className="pi-text">
                   <div className="catagory-name product-name">{product.category}</div>
                   <a  >
                       <h5 className="pname">{product.name}</h5>
                   </a>
                   <div className="product-price">
                       {product.price}.00
                   </div>
               </div>
           </div></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{
                HandleAddtoCart(product,quantity)
            }}>
              Add To Cart
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
    )
}

const maStateToProps= state=>({
allproducts : state.productsReducer.products,
cartproducts : state.cartReducer.cart
})

export default connect(maStateToProps,{getAllProducts,addToCart})(Shop)
