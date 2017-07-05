import * as types from '../actions/actionTypes';
import initialState from "./initialState";

const actionTypesEndsInSuccess = (type) => type.substring(type.length - 8) === '_SUCCESS';

export default function ajaxStatusReducer(state = initialState.ajaxStatus, action) {
    if (action.type === types.BEGIN_AJAX_CALL) {
        return state + 1;
    } else if (actionTypesEndsInSuccess(action.type)) {
        return state - 1;
    }

    return state;
}