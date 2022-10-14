import {
    ALL_TASKS_REQUEST,
    ALL_TASKS_SUCESS,
    ALL_TASKS_FAIL,
    SINGLE_TASK_REQUEST,
    SINGLE_TASK_SUCESS,
    SINGLE_TASK_FAIL,
    CLEAR_ERRORS
} from "../constants/taskConstants";

export const taskReducer = (state = { tasks: [] }, action) => {
    switch (action.type) {
        case ALL_TASKS_REQUEST:
            return {
                loading: true,
                tasks: []
            }

        case ALL_TASKS_SUCESS:

            return {
                loading: false,
                tasks: action.payload.tasks
            }

        case ALL_TASKS_FAIL:

            return {
                loading: true,
                error: action.payload
            }

        case CLEAR_ERRORS:

            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
};

export const taskDetailsReducer = (state = { task: [] }, action) => {
    switch (action.type) {
        case SINGLE_TASK_REQUEST:

            return {
                loading: true,
                task: []
            }

        case SINGLE_TASK_SUCESS:

            return {
                loading: false,
                task: action.payload.task,
                sucess: action.payload.sucess
            }

        case SINGLE_TASK_FAIL:
            return {
                loading: false,
                error: action.payload,
                sucess: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}