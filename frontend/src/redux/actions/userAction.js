import axios from 'axios';
import {
    LOGIN_REQUEST,
    LOGIN_SUCESS,
    LOGIN_FAIL,
    CLEAR_ERRORS,
} from '../constants/userConstants';

// Login 
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });

        const config = { headers: { 'Content-Type': 'application/json' } };

        const { data } = await axios.post("/api/v1/login", { email, password }, config);

        dispatch({
            type: LOGIN_SUCESS,
            payload: data.user,
        });

    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.error,
        })
    }
};

// clear all ERRORS
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}