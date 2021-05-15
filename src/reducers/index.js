import headerReducer from './headerReducer';
import ordersReducer from './ordersReducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    header: headerReducer,
    orders: ordersReducer,
})

export default rootReducer;