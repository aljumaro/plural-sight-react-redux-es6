import * as types from './actionTypes';
import authorApi from '../api/mockAuthorApi';

export function loadAuthorSuccess(authors) {
    return {
        type: types.LOAD_AUTHOR_SUCCESS,
        authors
    };
}

export function loadAuthors() {
    return dispatch => authorApi.getAllAuthors()
        .then( authors => {
            dispatch(loadAuthorSuccess(authors));
        })
        .catch( error => {
            throw(error);
        });
}