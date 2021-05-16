import { call, put, all, takeEvery } from 'redux-saga/effects';
import { setHeaderData, setOrdersData } from '../actions';
import axios from 'axios';
import {
    SAGA_SET_HEADER_DATA,
    SAGA_SET_ORDERS_DATA,
    SET_HEADER_DATA,
} from "../constants";


export function* sagaSetHeaderData() {
    console.log('we are in the saga bois');
    try {
        console.log('inside the try')
        let response = yield axios.get("https://evoteam-verasoft.github.io/data/summary.json");
        yield put(setHeaderData(response.data));
    } catch (e) {
        console.log('wth is going on');
        console.log(e);
    }
}

export function* sagaSetOrdersData() {
    console.log('we are in the saga bois1111');
    try {
        console.log('inside the try11111')
        let response = yield axios.get("https://evoteam-verasoft.github.io/data/orders.json");
        yield put(setOrdersData(response.data));
    } catch (e) {
        console.log('wth is going on');
        console.log(e);
    }
}

export function* watchAll() {
    yield all([
        takeEvery(SAGA_SET_HEADER_DATA, sagaSetHeaderData),
        takeEvery(SAGA_SET_ORDERS_DATA, sagaSetOrdersData),
    ]);
}