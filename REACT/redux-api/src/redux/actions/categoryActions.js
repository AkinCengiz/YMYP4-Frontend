import * as actionTypes from "./actionTypes";

export function changeCategory(category){
    return {
        type : actionTypes.CHANGE_CATEGORY,
        payload :category
    }
}

export function addCategory(category){
    return{
        type : actionTypes.ADD_CATEGORY,
        payload : category
    }
}