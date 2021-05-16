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
    activity: {
        email: '',
        orders: '',
        sms: '',
    },
    birth_date: '',
    carrier_status: {
        since: '',
        status: '',
    },
    id: '',
    first_name: '',
    last_name: '',
    sex: '',
    age: '',
    user_id: '',
    mobile_number: '',
    home_number: '',
    email: '',
    photo_url: '',
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HEADER_DATA:
            return action.payload;
        // we can set cases for specific props if needed
        default:
            return state;
    }
}

export default headerReducer;