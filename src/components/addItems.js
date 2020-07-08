import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {Modal,Button,ProgressBar} from 'react-bootstrap'
import {getAllProducts,addProduct,deleteProduct,updateProduct} from '../actions/products'
import { rootUrl } from '../actions/types'


const AddItem = (props) => {

     const {allproducts, getAllProducts } = props
     const [uploadPercentage, setUploadPercentage] = useState(0)
    
    const [product , setProduct] = useState(

        {
            
        }
    )
    var picture=''


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
const handleShow =(product)=>{
    setProduct(product)
    setShow(true)}

    const handleEdit=(id)=>{
        props.updateProduct(id,product)
        setShow(false)
        window.location.reload(true)
        
    }

    
    const handleChange=(e,name)=>{
        e.preventDefault()
        setProduct( {...product,[e.target.name]:e.target.value})
        if(name==="picture"){
           picture= e.target.files[0].name
            let data = new FormData();
            data.append( 'file', e.target.files[0] )
             const options = {
                onUploadProgress: (progressEvent) => {
                  const {loaded, total} = progressEvent;
                  let percent = Math.floor( (loaded * 100) / total )
                  console.log( `${loaded}kb of ${total}kb | ${percent}%` );
          
                  if( percent < 100 ){
                    setUploadPercentage(percent)
                  }
                }
        
    }
    
    uploadPicture(data,options)
    //alert(e.target.files[0].name)
   setProduct({...product, image:e.target.files[0].name})
}



    }

    function uploadPicture( data , options){  
       
        axios.post(rootUrl+"/products/image", data, options).then(res => { 
        console.log(res)
        setUploadPercentage(100)
          setTimeout(() => {
            setUploadPercentage(0)
          }, 1000);
        
    })
}
  
    const  handleSubmit=  (e)=>{
            e.preventDefault();
             props.addProduct(product)
              window.location.reload(true)

             //console.log(product)
            }
            
    
     useEffect(()=>{
    getAllProducts()
        
    },[])
    
    
    return (<div className="m-5">

            <div className="row">
                <div className="col-md-5 mr-5">
                <div className="card">
                    <h3 className="text-center m-4">Add Product</h3>
                    
            <form className="m-4  ">
            <small id="emailHelp" className="form-text text-muted">Product Image</small>
            <div className="input-group mb-3">
            
                            <div className="input-group-prepend">
                                <span className="input-group-text">Upload</span>
                            </div>
                            <div className="custom-file">
                                <input type="file" name="Image" onChange={(e)=>handleChange(e,"picture")} class="custom-file-input" id="inputGroupFile01"/>
                                <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                            </div>
                            
                            </div>
                            <div className="form-group">
                            {uploadPercentage > 0 && <ProgressBar now={uploadPercentage} active label={`${uploadPercentage}%`} />}                            
                                </div>
                        <div className="form-group">
                            <small id="emailHelp" className="form-text text-muted">Product Name</small>
                            <input type="text" name="productName" onChange={(e)=>handleChange(e)} className="form-control" id="productName"  placeholder="Enter Product Name"/>
                            
                                </div>

                                <div className="form-group">
                                <small id="emailHelp" className="form-text text-muted">Product Category</small>
                            <select type="text" name="productCategory" onChange={(e)=>handleChange(e,"category")} className="form-control" id="productCategory"  placeholder="Enter Product Category">  
                            <option>choose category</option>
                            <option>laptops</option>
                                <option>desktops</option>
                                <option>infrastructure</option>
                            </select>
                            
                                </div>
                                
                                <div className="form-group">
                                <small id="emailHelp" className="form-text text-muted">Product Price</small>
                            <input type="number"  name="productPrice" onChange={(e)=>handleChange(e,"category")} className="form-control" id="productPrice"  placeholder="Enter Product Price"/>
                            
                                </div>
                                <div className="form-group">
                                <small id="emailHelp" className="form-text text-muted">Product Serial</small>
                            <input type="text"  name="productSerialNumber" onChange={(e)=>handleChange(e,"category")} className="form-control" id="productSerial"  placeholder="Enter Product Serial"/>
                            
                                </div>
                                <div className="form-group">
                                <small id="emailHelp" className="form-text text-muted">Product Model</small>
                            <input type="text"  name="productModelNumber" onChange={(e)=>handleChange(e,"category")} className="form-control" id="productModel"  placeholder="Enter Product Model"/>
                            
                                </div>
                         
                            <div className="form-group">
                                <small id="emailHelp"  className="form-text text-muted">Product Description</small>
                            <textarea type="textarea" onChange={(e)=>handleChange(e,"category")} name="productDescription" className="form-control" id="productDescription"  placeholder="Enter Product Description"/>
                            
                                </div>
                        <button type="submit" onClick={(e)=>{handleSubmit(e)}} className="btn btn-primary">Add Product</button>
                        </form>
                        </div>
                        </div>
                        <div className="col-md-6 card">
                            <h3 className="text-center m-4">Product List</h3>
                             <table className="table table-dark table-stripped">
                                 <thead>
                                     <th>Name</th>
                                     <th> Category</th>
                                     <th> Price </th>
                                     <th> Serial</th>
                                     <th> Action</th>
                                     <th></th>
                                     <th></th>
                                 </thead>
                                 <tbody>
                                    {allproducts.map((prod)=>{
        return( <tr key={prod.id}>
            <td>{prod.productName}</td>
            <td>{prod.productCategory}</td>
            <td>{prod.productPrice}</td>
            <td>{prod.productSerialNumber}</td>
            <td><button onClick={()=>handleShow(prod)} className="btn btn-info btn-sm">edit</button>
            <button onClick={()=>{
                props.deleteProduct(prod.id)
                getAllProducts()
                }} className="btn btn-danger ml-2 btn-sm">rem</button>
            </td>
             </tr>)
     })
}
                                 </tbody>
                                 
                                 </table> 
                        </div>
                         </div>

                         <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
    <Modal.Title>{product.name}</Modal.Title>
          </Modal.Header>
    <Modal.Body>
    <div className="card">
    <h3 className="text-center m-4">Edit Product</h3>
            <form className="m-4  ">
                        <div className="form-group">
                            <small id="emailHelp" className="form-text text-muted">Product Name</small>
                            <input type="text" value={product.productName} name="productName" onChange={(e)=>handleChange(e)} className="form-control" id="productName"  placeholder="Enter Product Name"/>
                            
                                </div>

                                <div className="form-group">
                                <small id="emailHelp" className="form-text text-muted">Product Category</small>
                            <select type="text" value={product.productCategory} name="productCategory" onChange={(e)=>handleChange(e,"category")} className="form-control" id="productCategory"  placeholder="Enter Product Category">  
                            <option>choose category</option>
                            <option>laptops</option>
                                <option>desktops</option>
                                <option>infrastructure</option>
                            </select>
                            
                                </div>
                                
                                <div className="form-group">
                                <small id="emailHelp" className="form-text text-muted">Product Price</small>
                            <input type="number" min="1" step="any" value={product.productPrice} name="productPrice" onChange={(e)=>handleChange(e,"category")} className="form-control" id="productPrice"  placeholder="Enter Product Price"/>
                            
                                </div>
                                <div className="form-group">
                                <small id="emailHelp" className="form-text text-muted">Product Serial</small>
                            <input type="text" value={product.productSerialNumber} name="productSerialNumber" onChange={(e)=>handleChange(e,"category")} className="form-control" id="productSerial"  placeholder="Enter Product Serial"/>
                            
                                </div>
                                <div className="form-group">
                                <small id="emailHelp" className="form-text text-muted">Product Model</small>
                            <input type="text" value={product.productModelNumber}  name="productModelNumber" onChange={(e)=>handleChange(e,"category")} className="form-control" id="productModel"  placeholder="Enter Product Model"/>
                            
                                </div>
                         <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Upload</span>
                            </div>
                            <div className="custom-file">
                                <input type="file"  name="Image" onChange={(e)=>handleChange(e,"picture")} class="custom-file-input" id="inputGroupFile01"/>
                                <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                                {uploadPercentage > 0 && <ProgressBar now={uploadPercentage} active label={`${uploadPercentage}%`} />}
                            </div>
                            </div>
                            <div className="form-group">
                                <small id="emailHelp"  className="form-text text-muted">Product Description</small>
                            <textarea type="textarea" value={product.productDescription} onChange={(e)=>handleChange(e)} name="productDescription" className="form-control" id="productDescription"  placeholder="Enter Product Description"/>
                            
                                </div>
                        
                        </form>
                        </div>
         </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" className="cartButton btn-secondary" style={{backgroundColor:"grey"}} onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{handleEdit(product.id)}} className="cartButton" 
              >
              Update
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
    )
}

const mapStateToProps = (state)=>({
    allproducts : state.productsReducer.products,
    message: state.productsReducer.message

})

export default connect(mapStateToProps,{getAllProducts,addProduct,deleteProduct,updateProduct}) (AddItem)