import axios from 'axios';
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
    DELETE_TASK_REQUEST,
    DELETE_TASK_SUCESS,
    DELETE_TASK_FAIL,
    NEW_SUB_TASK_REQUEST,
    NEW_SUB_TASK_SUCESS,
    NEW_SUB_TASK_FAIL,
    UPDATE_TASK_REQUEST,
    UPDATE_TASK_SUCESS,
    UPDATE_TASK_FAIL,
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

// new task 
export const newTask = (taskData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_TASK_REQUEST });

        const config = { headers: { 'Content-Type': 'application/json' } };

        const { data } = await axios.post(`/api/v1/tasks/create`, taskData, { config });

        dispatch({
            type: NEW_TASK_SUCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: NEW_TASK_FAIL,
            payload: error.response.data.replace(/<(?:.|\n)*?>/gm, '').replace(/(\r\n|\n|\r)/gm, "").replace(/(?<=\&nbsp).*/gm, "").replace('&nbsp', ""),
        })
    }
};

// new task 
export const newSubTask = (subTaskData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_SUB_TASK_REQUEST });

        const config = { headers: { 'Content-Type': 'application/json' } };

        const { data } = await axios.post(`/api/v1/tasks/subtasks/create`, subTaskData, { config });

        dispatch({
            type: NEW_SUB_TASK_SUCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: NEW_SUB_TASK_FAIL,
            payload: error.response.data.replace(/<(?:.|\n)*?>/gm, '').replace(/(\r\n|\n|\r)/gm, "").replace(/(?<=\&nbsp).*/gm, "").replace('&nbsp', ""),
        })
    }
};


// update task 
export const updateTask = (id, taskData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_TASK_REQUEST });

        const config = { headers: { 'Content-Type': 'application/json' } };

        const { data } = await axios.put(`/api/v1/task/${id}`, taskData, { config });

        dispatch({
            type: UPDATE_TASK_SUCESS,
            payload: data.sucess,
        });

    } catch (error) {
        dispatch({
            type: UPDATE_TASK_FAIL,
            payload: error.response.data.replace(/<(?:.|\n)*?>/gm, '').replace(/(\r\n|\n|\r)/gm, "").replace(/(?<=\&nbsp).*/gm, "").replace('&nbsp', ""),
        })
    }
};

// delete task
export const deleteTask = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_TASK_REQUEST });

        const { data } = await axios.delete(`/api/v1/task/${id}`);

        dispatch({
            type: DELETE_TASK_SUCESS,
            payload: data.sucess,
        });

    } catch (error) {
        dispatch({
            type: DELETE_TASK_FAIL,
            payload: error.response.data.replace(/<(?:.|\n)*?>/gm, '').replace(/(\r\n|\n|\r)/gm, "").replace(/(?<=\&nbsp).*/gm, "").replace('&nbsp', ""),
        })
    }
};

// clear all ERRORS
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}