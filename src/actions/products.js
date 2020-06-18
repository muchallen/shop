import {GET_ALL_PRODS, ADD_TO_CART,DELETE_CART_PROD,DECREASE_CART_NUMBER} from '../actions/types'
import axios from 'axios'

export const getAllProducts = ()=> dispatch=>{
    axios.get("http://localhost:9000/allproducts").then((res)=>{      
        console.log(res)             
    dispatch({ type:GET_ALL_PRODS,
        payload: res.data  
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