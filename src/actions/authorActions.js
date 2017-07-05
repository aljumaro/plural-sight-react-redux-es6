import * as types from './actionTypes';
import authorApi from '../api/mockAuthorApi';
import {beginAjaxCall} from "./ajaxStatusActions";

export function loadAuthorSuccess(authors) {
    return {
        type: types.LOAD_AUTHOR_SUCCESS,
        authors
    };
}

export function loadAuthors() {
    return dispatch => {
        dispatch(beginAjaxCall());
        authorApi.getAllAuthors()
            .then(authors => {
                dispatch(loadAuthorSuccess(authors));
            })
            .catch(error => {
                throw(error);
            });
    };
}