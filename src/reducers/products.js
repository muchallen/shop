import {GET_ALL_PRODS} from '../actions/types'

const initialState = {
    products : []}


export default  (state=initialState,action)=>{
    switch(action.type){
        case GET_ALL_PRODS:
            return {
                ...state,
                products:action.payload
            }
            default:
                return state
    }
}