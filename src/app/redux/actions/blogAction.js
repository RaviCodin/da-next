import axios from "axios";
import {
    CREATE_BLOG_REQUEST,
    CREATE_BLOG_SUCCESS,
    CREATE_BLOG_FAIL,

    
    GET_ALL_BLOG_REQUEST,
    GET_ALL_BLOG_SUCCESS,
    GET_ALL_BLOG_FAIL,

    UPDATE_BLOG_REQUEST,
    UPDATE_BLOG_SUCCESS,
    UPDATE_BLOG_FAIL,

    DELETE_BLOG_REQUEST,
    DELETE_BLOG_SUCCESS,
    DELETE_BLOG_FAIL,

    RECOVER_BLOG_REQUEST,
    RECOVER_BLOG_SUCCESS,
    RECOVER_BLOG_FAIL,
    CLEAR_ERROR,
    GET_BLOG_REQUEST,
    GET_BLOG_SUCCESS,
    GET_BLOG_FAIL,

} from '../constants/blogConstant'

const host=  "http://62.72.31.157:6060";



export const createBlog = (details) => async (dispatch) => {

    try {
        // console.log("create member")

        dispatch({ type: CREATE_BLOG_REQUEST });
        const config = { headers: { "Content-Type": "application/json" }, withCredentials: true };

        const data = await axios.post(`${host}/blog/api/v1/create-blog`, details, config);

        dispatch({ type: CREATE_BLOG_SUCCESS, payload: data.data });

    } catch (error) {
        dispatch({
            type: CREATE_BLOG_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const getAllBlog = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ALL_BLOG_REQUEST });
        const config = { headers: { "Content-Type": "application/json" }, withCredentials: true };

        const {data} = await axios.get(`${host}/blog/api/v1/get/all-blogs`, config);

        dispatch({ type: GET_ALL_BLOG_SUCCESS, payload: data });

    } catch (error) {
        dispatch({
            type: GET_ALL_BLOG_FAIL,
            payload: error.response.data.message,
        });
    }
};
export const getBlog = (url) => async (dispatch) => {
    try {
        dispatch({ type: GET_BLOG_REQUEST });
        const config = { headers: { "Content-Type": "application/json" }, withCredentials: true };

        const {data} = await axios.get(`${host}/blog/api/v1/get-blog/${url}`, config);

        dispatch({ type: GET_BLOG_SUCCESS, payload: data });

    } catch (error) {
        dispatch({
            type: GET_BLOG_FAIL,
            payload: error.response.data.message,
        });
    }
};


export const updateBlog = (details,id) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_BLOG_REQUEST });
        const config = { headers: { "Content-Type": "application/json" }, withCredentials: true };

        const {data} = await axios.put(`${host}/blog/api/v1/update-blog/${id}`, details, config);

        dispatch({ type: UPDATE_BLOG_SUCCESS, payload: data.success });


    } catch (error) {
        dispatch({
            type: UPDATE_BLOG_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const deleteBlog = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_BLOG_REQUEST });
        const config = { headers: { "Content-Type": "application/json" }, withCredentials: true };

        const {data} = await axios.put(`${host}/blog/api/v1/delete-blog/${id}`,{}, config);

        dispatch({ type: DELETE_BLOG_SUCCESS, payload: data.success });


    } catch (error) {
        dispatch({
            type: DELETE_BLOG_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const recoverBlog = (id) => async (dispatch) => {
    try {

        dispatch({ type: RECOVER_BLOG_REQUEST });
        const config = { headers: { "Content-Type": "application/json" }, withCredentials: true };

        const {data} = await axios.put(`${host}/blog/api/v1/recover/news/${id}`,{}, config);

        dispatch({ type: RECOVER_BLOG_SUCCESS, payload: data.success });

    } catch (error) {
        dispatch({
            type: RECOVER_BLOG_FAIL,
            payload: error.response.data.message,
        });
    }
};




export const clearError = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERROR });
};

