import { CHANGE_LOADING, SAGA_SET_HEADER_DATA, SAGA_SET_ORDERS_DATA, SET_HEADER_DATA, SET_ORDER_DATA, SET_SELECTED_ORDER } from '../constants';
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
    console.log('setting header data');
    return {
        type: SET_HEADER_DATA,
        payload: data,
    }
}

export function changeLoading(bool) {
    console.log('changes loadings');
    return {
        type: CHANGE_LOADING,
        payload: bool,
    }
}

export function setOrdersData(data) {
    return {
        type: SET_ORDER_DATA,
        payload: data,
    }
}

export function setFirstName(first_name) {
    return {
        type: SET_FIRST_NAME,
        first_name,
    }
}

export function setLastName(last_name) {
    return {
        type: SET_LAST_NAME,
        last_name,
    }
}

export function setSex(sex) {
    return {
        type: SET_SEX,
        sex,
    }
}

export function setAge(age) {
    return {
        type: SET_AGE,
        age,
    }
}

export function setUserId(user_id) {
    return {
        type: SET_USER_ID,
        user_id,
    }
}

export function setMobileNumber(mobile_number) {
    return {
        type: SET_MOBILE_NUMBER,
        mobile_number,
    }
}

export function setHomeNumber(home_number) {
    return {
        type: SET_HOME_NUMBER,
        home_number,
    }
}

export function setEmailAddress(email) {
    return {
        type: SET_EMAIL_ADDRESS,
        email,
    }
}

export function setSmsNum(sms_num) {
    return {
        type: SET_SMS_NUM,
        sms_num,
    }
}

export function setEmailsNum(emails_num) {
    return {
        type: SET_EMAILS_NUM,
        emails_num,
    }
}

export function setOrdersNum(orders_num) {
    return {
        type: SET_ORDERS_NUM,
        orders_num,
    }
}

export function setSmsStatus(sms_status) {
    return {
        type: SET_SMS_STATUS,
        sms_status,
    }
}
