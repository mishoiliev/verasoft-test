import {
    SET_ORDER_DATA,
    SET_SELECTED_ORDER,
    CHANGE_LOADING,
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
    loading: true,
}

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDER_DATA:
            return { ...state, orders: action.payload };
        case SET_SELECTED_ORDER:
            return { ...state, selectedOrder: action.payload };
        case CHANGE_LOADING:
            return { ...state, loading: action.payload };
        //cases for specific orders if needed
        // case SET_ORDERS_A:
        //     return state.orders.orders_A = action.payload;
        // case SET_ORDERS_AA:
        //     return state.orders.orders_AA = action.payload;
        // case SET_ORDERS_AAA:
        //     return state.orders.orders_AAA = action.payload;
        // case SET_ORDERS_B:
        //     return state.orders.orders_B = action.payload;
        // case SET_ORDERS_C:
        //     return state.orders.orders_C = action.payload;
        default:
            return state;
    }
}

export default ordersReducer;