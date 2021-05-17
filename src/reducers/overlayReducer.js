import {
    SET_OVERLAY_VISIBLE,
} from '../constants'

const overlayReducer = (state = false, action) => {
    switch (action.type) {
        case SET_OVERLAY_VISIBLE:
            return action.payload;
        default:
            return state;
    }
}

export default overlayReducer;