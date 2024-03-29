import { ActionType } from "../constants/action-type";
export const setProducts = (products) => {
    return {
        type: ActionType.SET_PRODUCTS,
        payload: products,

    };
};

export const selectedProduct = (product) => {
    return {
        type: ActionType.SELECTED_PRODUCT,
        payload: product,
    }
}