import { ActionType } from "../constants/action-type";

const initialState = {
    products: [],
    product: {},
};
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.SET_PRODUCTS: return { ...state, products: payload };
        case ActionType.SELECTED_PRODUCT: return { ...state, product: payload };
        default: return state;
    }
};