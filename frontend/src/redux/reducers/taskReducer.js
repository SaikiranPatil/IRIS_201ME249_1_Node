import { display } from "../../Components/Utils/utils";
import {
    ALL_TASKS_REQUEST,
    ALL_TASKS_SUCESS,
    ALL_TASKS_FAIL,
    SINGLE_TASK_REQUEST,
    SINGLE_TASK_SUCESS,
    SINGLE_TASK_FAIL,
    NEW_TASK_REQUEST,
    NEW_TASK_SUCESS,
    NEW_TASK_FAIL,
    NEW_TASK_RESET,
    NEW_SUB_TASK_REQUEST,
    NEW_SUB_TASK_SUCESS,
    NEW_SUB_TASK_FAIL,
    NEW_SUB_TASK_RESET,
    DELETE_TASK_REQUEST,
    DELETE_TASK_SUCESS,
    DELETE_TASK_FAIL,
    DELETE_TASK_RESET,
    UPDATE_TASK_REQUEST,
    UPDATE_TASK_SUCESS,
    UPDATE_TASK_FAIL,
    UPDATE_TASK_RESET,
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

export const newTaskReducer = (state = { task: {} }, action) => {
    switch (action.type) {
        case NEW_TASK_REQUEST:
        case DELETE_TASK_REQUEST:
        case UPDATE_TASK_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case DELETE_TASK_SUCESS:

            return {
                ...state,
                loading: false,
                isDeleted: action.payload,
            }

        case UPDATE_TASK_SUCESS:

            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            }

        case NEW_TASK_SUCESS:
            return {
                loading: false,
                success: action.payload.sucess,
                task: action.payload.task,
            }

        case NEW_TASK_FAIL:
        case DELETE_TASK_FAIL:
        case UPDATE_TASK_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case NEW_TASK_RESET:
            return {
                loading: false,
                error: action.payload,
                sucess: false,
            }

        case UPDATE_TASK_RESET:
            return {
                loading: false,
                error: action.payload,
                isUpdated: false,
            }

        case DELETE_TASK_RESET:
            return {
                loading: false,
                error: action.payload,
                isDeleted: false,
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

export const newSubTaskReducer = (state = { task: {} }, action) => {
    switch (action.type) {
        case NEW_SUB_TASK_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case NEW_SUB_TASK_SUCESS:
            display("Sub Task created successfully");
            return {
                loading: false,
                success: action.payload.sucess,
                task: action.payload.task,
            }

        case NEW_SUB_TASK_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case NEW_SUB_TASK_RESET:
            return {
                loading: false,
                error: action.payload,
                sucess: false,
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