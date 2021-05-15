
import {
    SET_ORDERS_A,
    SET_ORDERS_AA,
    SET_ORDERS_AAA,
    SET_ORDERS_B,
    SET_ORDERS_C,
    SET_ORDER_DATA,
} from '../constants'

const initialState = {
    orders_A: [],
    orders_AA: [],
    orders_AAA: [],
    orders_B: [],
    orders_C: [],
}

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDER_DATA:
            return action.payload
        case SET_ORDERS_A:
            return state.orders_A = action.payload;
        case SET_ORDERS_AA:
            return state.orders_AA = action.payload;
        case SET_ORDERS_AAA:
            return state.orders_AAA = action.payload;
        case SET_ORDERS_B:
            return state.orders_B = action.payload;
        case SET_ORDERS_C:
            return state.orders_C = action.payload;
        default:
            return state;
    }
}

export default ordersReducer;