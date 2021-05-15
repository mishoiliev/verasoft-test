import {
    SET_FIRST_NAME,
    SET_LAST_NAME,
    SET_SEX,
    SET_AGE,
    SET_USER_ID,
    SET_MOBILE_NUMBER,
    SET_HOME_NUMBER,
    SET_EMAIL_ADDRESS,
    SET_SMS_NUM,
    SET_EMAILS_NUM,
    SET_ORDERS_NUM,
    SET_SMS_STATUS,
    SET_HEADER_DATA,
} from '../constants'

const initialState = {
    first_name: '',
    last_name: '',
    sex: '',
    age: '',
    user_id: '',
    mobile_number: '',
    home_number: '',
    email: '',
    sms_num: '',
    emails_num: '',
    orders_num: '',
    sms_status: '',
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HEADER_DATA:
            return action.payload;
        case SET_FIRST_NAME:
            return state.set('first_name', action.first_name);
        case SET_LAST_NAME:
            return state.set('last_name', action.last_name);
        case SET_SEX:
            return state.set('sex', action.sex);
        case SET_AGE:
            return state.set('age', action.age);
        case SET_USER_ID:
            return state.set('user_id', action.user_id);
        case SET_MOBILE_NUMBER:
            return state.set('mobile_number', action.mobile_number);
        case SET_HOME_NUMBER:
            return state.set('home_number', action.home_number);
        case SET_EMAIL_ADDRESS:
            return state.set('email', action.email);
        case SET_SMS_NUM:
            return state.set('sms_num', action.sms_num);
        case SET_EMAILS_NUM:
            return state.set('emails_num', action.emails_num);
        case SET_ORDERS_NUM:
            return state.set('orders_num', action.orders_num);
        case SET_SMS_STATUS:
            return state.set('sms_status', action.sms_status);
        default:
            return state;
    }
}

export default headerReducer;