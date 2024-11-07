import * as actionTypes from "../actions/actionTypes";

export default function dispatchProduct(state,action){
    switch(action.actionTypes){
        case actionTypes.ADD_PRODUCT:
            return [...state,action.payload];
        case actionTypes.GET_PRODUCTS:
            return action.payload;
        default:
            return state;        
    }
}