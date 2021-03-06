import * as types from '../actions/actionTypes';
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
    switch (action.type) {
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;

        case types.CREATE_COURSE_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.course)
            ];

        case types.UPDATE_COURSE_SUCCESS: {

            const index = state.findIndex(course => course.id === action.course.id);

            return [
                ...state.slice(0, index),
                Object.assign({}, action.course),
                ...state.slice(index + 1)
            ];
        }

        default:
            return state;
    }
}