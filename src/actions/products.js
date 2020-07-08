import {GET_ALL_PRODS, ADD_TO_CART,DELETE_CART_PROD,DECREASE_CART_NUMBER,FILTER_PRODUCTS,ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT, rootUrl} from '../actions/types'
import axios from 'axios'
import { get } from 'jquery'

export const getAllProducts = ()=> dispatch=>{
      axios.get(rootUrl+"/products").then(( res)=>{      
                   
    dispatch({ type:GET_ALL_PRODS,
        payload: res.data  
                         })
                        })}
 export const addProduct = (product)=> dispatch=>{
        axios.post(rootUrl + `/products/`,product).then(( res)=>{ 
            getAllProducts()                             
                          dispatch({ type:ADD_PRODUCT,
                              payload: "product added successfully" 
                                               })
                                              }).catch(err=>{
                                                  return "product not added"
                                              })
 }
 

export const deleteProduct = (id)=> dispatch=>{
        axios.delete(rootUrl`/products/delete/${id}`).then(( res)=>{ 
            console.log(res.data)                               
                          dispatch({ type:DELETE_PRODUCT,
                              payload: id  
                                               })
                                              })}
export const updateProduct = (id,product)=> dispatch=>{
        axios.put(rootUrl+`/products/update/${id}`,product).then(( res)=>{ 
            console.log(res.data)                               
                          dispatch({ type:UPDATE_PRODUCT,
                              payload: product 
                                               })
                                              })}

export const addToCart = (product) => dispatch=>{
        dispatch({
            type : ADD_TO_CART,
            payload: product
        })
}

export const deleteCart = (name) => dispatch=>{
    dispatch({
        type : DELETE_CART_PROD,
        payload: name
    })
}
                    

export const decreaseCartNumber = (product) => dispatch=>{
    dispatch({
        type : DECREASE_CART_NUMBER,
        payload: product
    })
}

export const filterProducts = (name) => dispatch=>{
    dispatch({
        type : FILTER_PRODUCTS,
        payload: name
    })
}