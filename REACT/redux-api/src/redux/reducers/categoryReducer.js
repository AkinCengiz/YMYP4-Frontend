import * as actionTypes from "../actions/actionTypes";

export default function dispatchCategory(state,action){
    switch(action.actionTypes){
        case actionTypes.CHANGE_CATEGORY:
            return action.payload;
        case actionTypes.ADD_CATEGORY:
            return [...state,action.payload];
        default:
            return state;
    }
}