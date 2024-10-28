import {ADD_To_CART,REMOVE_FROM_CART} from '../constants'
export const addToCart = (data) =>{
console.log('action',data)
    return {
        type: ADD_To_CART,
        data:data


    }
}
export const removeFromCart = (data) =>{

    return {
        type: REMOVE_FROM_CART,
        data:data


    }
}

