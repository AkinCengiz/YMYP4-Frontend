// import { ADD_PRODUCT, GET_PRODUCTS } from "./actionTypes"
import * as actionTypes from "./actionTypes"


export function addProduct(product){
    return{
        // type : ADD_PRODUCT,
        type : actionTypes.ADD_PRODUCT,
        payload : product
    }
}

export function getProducts(products){
    return{
        // type : GET_PRODUCTS,
        type : actionTypes.GET_PRODUCTS,
        payload : products
    }
}