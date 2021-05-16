import {
    SET_ORDERS_A,
    SET_ORDERS_AA,
    SET_ORDERS_AAA,
    SET_ORDERS_B,
    SET_ORDERS_C,
    SET_ORDER_DATA,
    SET_SELECTED_ORDER,
} from '../constants'

const initialState = {
    orders: {
        orders_A: [],
        orders_AA: [],
        orders_AAA: [],
        orders_B: [],
        orders_C: [],
    },
    selectedOrder: 'orders_AAA',
}

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDER_DATA:
            return { ...state, orders: action.payload };
        case SET_SELECTED_ORDER:
            return { ...state, selectedOrder: action.payload };
        //cases for specific orders if needed
        case SET_ORDERS_A:
            return state.orders.orders_A = action.payload;
        case SET_ORDERS_AA:
            return state.orders.orders_AA = action.payload;
        case SET_ORDERS_AAA:
            return state.orders.orders_AAA = action.payload;
        case SET_ORDERS_B:
            return state.orders.orders_B = action.payload;
        case SET_ORDERS_C:
            return state.orders.orders_C = action.payload;
        default:
            return state;
    }
}

export default ordersReducer;