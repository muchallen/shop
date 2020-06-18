import {ADD_TO_CART,DELETE_CART_PROD, DECREASE_CART_NUMBER} from '../actions/types'

const initialCart ={
    cart :[]
}

export default  (state,action)=>{
    //add Cart Product
    switch(action.type){
        case ADD_TO_CART:
            for(let i =0;i<state.cart.length;i++){
                    if(state.cart[i].product.name===action.payload.product.name){
                        state.cart[i].quantity=state.cart[i].quantity+1
                        return {cart: [...state.cart]}
            }}
            return{
                cart: [...state.cart,action.payload ]
            }        
        case DECREASE_CART_NUMBER:
                for(let i =0;i<state.cart.length;i++){
                        if(state.cart[i].product.name===action.payload.product.name){
                            if(state.cart[i].quantity<=1){
                                state.cart[i].quantity=1
                            }else{
                            state.cart[i].quantity=state.cart[i].quantity-1}
                            return {cart: [...state.cart]}
                }}
                return{
                    cart: [...state.cart,action.payload ]
                }        
            
        case DELETE_CART_PROD:
            return{
                cart: state.cart.filter(prod=>{
                    return prod.product.name !== action.payload
                })
            }
            default:
                return initialCart
    }
}