import {GET_ALL_PRODS,FILTER_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT} from '../actions/types'

const initialState = {
    products : [],
    filtered:[],
    message:''
    
}




export default  (state=initialState,action)=>{
    switch(action.type){
        case GET_ALL_PRODS:
            return {
                ...state,
                products:action.payload
            }
        case FILTER_PRODUCTS:
            return {
                ...state,
                filtered: state.products.filter(prod=>{
                    return prod.productCategory===action.payload
                })
            }
        case ADD_PRODUCT:
                return {
                   products:state.products,
                   message:action.payload

                    }
        case DELETE_PRODUCT:
            return{
                ...state,
                products: state.products.filter(prod=>{
                    return prod.id!==action.payload
                })
            }
            case UPDATE_PRODUCT:
            return{
                products: [...state.products]
                }
            
                
            default:
                return state
    }
}