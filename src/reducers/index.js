import headerReducer from './headerReducer';
import ordersReducer from './ordersReducer.js';
import { combineReducers } from 'redux';
import overlayReducer from './overlayReducer';

const rootReducer = combineReducers({
    header: headerReducer,
    orders: ordersReducer,
    overlay: overlayReducer,
})

export default rootReducer;