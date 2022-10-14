import axios from 'axios';
import {
    ALL_TASKS_REQUEST,
    ALL_TASKS_SUCESS,
    ALL_TASKS_FAIL,
    SINGLE_TASK_REQUEST,
    SINGLE_TASK_SUCESS,
    SINGLE_TASK_FAIL,
    CLEAR_ERRORS
} from '../constants/taskConstants';

export const getTasks = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_TASKS_REQUEST });

        const { data } = await axios.get("api/v1/tasks/all");

        dispatch({
            type: ALL_TASKS_SUCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: ALL_TASKS_FAIL,
            payload: error.response.data.replace(/<(?:.|\n)*?>/gm, '').replace(/(\r\n|\n|\r)/gm, "").replace(/(?<=\&nbsp).*/gm, "").replace('&nbsp', ""),
        })
    }
};

export const taskDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: SINGLE_TASK_REQUEST });

        const { data } = await axios.get(`/api/v1/task/${id}`);

        dispatch({
            type: SINGLE_TASK_SUCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: SINGLE_TASK_FAIL,
            payload: error.response.data.message,
        })
    }
};

// clear all ERRORS
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}