import React, {useState, useEffect} from 'react'
import {allProducts} from './AllProducts'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {getAllProducts,addToCart,filterProducts} from '../actions/products'
import {Modal,Button} from 'react-bootstrap'

import './App.css'

const Shop = (props)=> {

    
    const [productzz, setProductzz] = useState([])
    
    useEffect(()=> {
       async function addContent(){
        await setProductzz( 
       props.allproducts)  } 

       addContent();
    }    
    , []
    )
    
    const [show, setShow] = useState(false);
    const [product , setProduct]= useState({
        image:"hp21.5.jpg"
    })
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

    const list = props.allproducts;
    let values
    if(productzz.length<1){
        values=list
    }else{
        values = productzz
    }

    const HandleAddtoCart=(prod,quantity)=>{
            handleClose()
            props.addToCart({quantity,product:prod})
    }
    
    const handleLink=(e,name)=>{
        let productz =[]
       console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName("section-titlez")[0].innerText=name)
        
        if(name==="All Products"){
            productz =props.allproducts
        }
        if(name==="Laptops"){
            productz = props.allproducts.filter(product=>{
                return product.productCategory==="laptops"
            })
        }
        if(name==="Desktops"){
            productz = props.allproducts.filter(product=>{
                return product.productCategory==="desktops"
            })
        }

        if(name==="Infrastructure"){
            productz = props.allproducts.filter(product=>{
                return product.productCategory==="infrastructure"
            })
        }

        if(name==="Development"){
            productz = props.allproducts.filter(product=>{
                return product.productCategory==="development"
            })
        }
           
    
        setProductzz(productz)
        
        
     // var links = e.target.parentElement.parentElement.parentElement.getElementsByTagName("li");
      var links = document.getElementsByClassName('sideTags')[0].getElementsByTagName('li');
    for (var z = 0 ; z<links.length ; z++){

        links[z].classList.remove("active")
        links[z].getElementsByTagName("a")[0].classList.remove("text-white")
       
    }

    
    e.target.parentElement.classList.add("active")
   e.target.classList.add("text-white")
 
    }

 
        

    return (
        <div>
         
                <div className="breacrumb-section">
        <div className="ml-5 mr-5">
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
        <div className="ml-5 mr-5 ">
            <div className="row main-container">
                <div className="col-lg-2 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter">
                    <div className="filter-widget">
                        <h4 className="fw-title">Categories</h4>
                        <ul className="filter-catagories sideTags products-filter">
                            <li onClick={(e)=>{handleLink(e,"All Products")}} id="link" className="active tag" ><Link to="#" style={{width:"20em"}} className="text-white" >All Products</Link></li>
                            <li onClick={(e)=>{handleLink(e,"Laptops")}}  id="link" className=" tag"  ><Link to="#" style={{width:"20em"}}>Laptops</Link></li>
                            <li onClick={(e)=>{handleLink(e,"Desktops")}} id="link" className=" tag" ><Link to="#" style={{width:"20em"}}>Desktops</Link></li>
                            <li onClick={(e)=>{handleLink(e,"Infrastructure")}} id="link" className=" tag" ><Link to="#" style={{width:"20em"}}>Infrastucture</Link></li>
                        </ul>
                    </div>
                   
                    
                   
                    
                    
                </div>
                <div className="col-lg-10 order-1 order-lg-2">
                    <div className="section-title">
                    <h2 className="section-titlez">All Products</h2>
                
                    </div>
                    <div className="product-list">
                        <div className="row prod">
                            
                     
{            
                         
                        values.map((prod)=>{
                            const imgsrc= "imagess/"+prod.image
            
              return(
                
    <div className="col-lg-4  mt-5 col-sm-6" key={prod.id}>   
    <div className="product-item">
        <div className="ml-2 card card1 hvr-grow" style={{
           width: "380px",
           height:"400px",
           boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
           textAlign: "center",
           
               }}>
    <div className="pi-pic">
                    <div className="p-0 m-0 " style={{width:"300px",
                    
                    
                    }}>
                   <img src={require(`../../public/imagess/${prod.image}`)} className=" " style={{
                   height:"200px",
                   marginLeft:"20px",
                   marginTop:"20px"
                    
                    }} alt=""/>
                    </div>
                   <ul>
                   
                       <li className="bg-success"><button className="btn cartButton" onClick={()=>{showmodal(prod)}}><strong>Add To Cart</strong></button></li>
                      
                   </ul>
               </div>
               <div className="pi-text">
                   <div className="catagory-name product-name">{prod.productCategory}</div>
                   <a  >
                       <h5 className="pname">{prod.productName}</h5>
                   </a>
                   <div className="product-price">
                       ${prod.productPrice}
                   </div>
               </div>
               </div>
           </div>
    </div>
              )     
        })
        
    } 
    
        
                            
                             
                                
                            
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
                   <div className="p-0 m-0 mb-2 " style={{
                       width:"300px",height:"300px          "

                }}>
                   <img src={require('../../public/imagess/' + product.image)} className="" style={{
                 height:"200px",
                 marginLeft:"80px",
                 marginTop:"20px"
                   }}  alt=""/> 
                    </div>
    <hr></hr>
                    <div className="" style={{display:"flex",
                    justifyContent:"center",
                    margin:"1.5em"  
                }}>
                   
                    <button onClick={()=>{
                        if(quantity<=1){
                            setQuantity(1)
                        }else setQuantity(quantity=quantity-1)}} className="cartButton btn-danger mr-2 "style={{width:"3em",
                        backgroundColor:"red"}}  ><strong>-</strong></button>
                        <input type="text" value={quantity} style={{width:"4em",
                        height:"4em"
                      
                    }} className="form-control"id=""></input>
                        <button onClick={()=>setQuantity(quantity=quantity+1)} className="cartButton btn-success ml-2" style={{width:"3em"}} >+</button>
                    
                    </div>
               </div>
               <div className="pi-text">
                   <div className="catagory-name product-name">{product.productCategory}</div>
                   <a  >
                       <h5 className="pname">{product.productName}</h5>
                       <p className="">{product.productDescription}</p>
                   </a>
                   <div className="product-price">
                       ${product.productPrice}
                   </div>
               </div>
           </div></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" className="cartButton btn-secondary" style={{backgroundColor:"grey"}} onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" className="cartButton" onClick={()=>{
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
filtered:state.productsReducer.filtered,
cartproducts : state.cartReducer.cart
})

export default connect(maStateToProps,{getAllProducts,addToCart,filterProducts})(Shop)
