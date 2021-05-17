import {
    CHANGE_LOADING,
    SAGA_SET_HEADER_DATA,
    SAGA_SET_ORDERS_DATA,
    SET_HEADER_DATA,
    SET_ORDER_DATA,
    SET_OVERLAY_VISIBLE,
    SET_SELECTED_ORDER,
} from '../constants';


export function sagaSetHeaderData() {
    return {
        type: SAGA_SET_HEADER_DATA,
    }
}

export function sagaSetOrdersData() {
    return {
        type: SAGA_SET_ORDERS_DATA,
    }
}

export function setSelectedOrder(order) {
    return {
        type: SET_SELECTED_ORDER,
        payload: order
    }
}


export function setHeaderData(data) {
    return {
        type: SET_HEADER_DATA,
        payload: data,
    }
}

export function changeLoading(bool) {
    return {
        type: CHANGE_LOADING,
        payload: bool,
    }
}

export function setOverlayVisible(bool) {
    return {
        type: SET_OVERLAY_VISIBLE,
        payload: bool,
    }
}

export function setOrdersData(data) {
    return {
        type: SET_ORDER_DATA,
        payload: data,
    }
}