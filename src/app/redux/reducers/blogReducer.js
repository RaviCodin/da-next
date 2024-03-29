import {
    CREATE_BLOG_REQUEST,
    CREATE_BLOG_SUCCESS,
    CREATE_BLOG_FAIL,
    CREATE_BLOG_RESET,
   
    UPDATE_BLOG_REQUEST,
    UPDATE_BLOG_SUCCESS,
    UPDATE_BLOG_FAIL,
    UPDATE_BLOG_RESET,
    DELETE_BLOG_REQUEST,
    DELETE_BLOG_SUCCESS,
    DELETE_BLOG_FAIL,
    DELETE_BLOG_RESET,
    RECOVER_BLOG_REQUEST,
    RECOVER_BLOG_SUCCESS,
    RECOVER_BLOG_FAIL,
    RECOVER_BLOG_RESET,
    CLEAR_ERROR,
    GET_ALL_BLOG_SUCCESS,
    GET_ALL_BLOG_FAIL,
    GET_ALL_BLOG_REQUEST,
    GET_BLOG_REQUEST,
    GET_BLOG_SUCCESS,
    GET_BLOG_FAIL,
} from '../constants/blogConstant'


export const createBlog = (state = { data: {} }, action) => {
    switch (action.type) {
        
      case UPDATE_BLOG_REQUEST:
        case CREATE_BLOG_REQUEST:
            case DELETE_BLOG_REQUEST:
                case RECOVER_BLOG_REQUEST:
        return {
          loading: true,
          success: false,
        };
  
      case UPDATE_BLOG_SUCCESS:
        case CREATE_BLOG_SUCCESS:
        case DELETE_BLOG_SUCCESS:
            case RECOVER_BLOG_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true
        };
  

      case UPDATE_BLOG_FAIL:
        case CREATE_BLOG_FAIL:
        case DELETE_BLOG_FAIL:
            case RECOVER_BLOG_FAIL:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };

        case UPDATE_BLOG_RESET:
        case CREATE_BLOG_RESET:
            case RECOVER_BLOG_RESET:
                case DELETE_BLOG_RESET:
            return {
                ...state,
                loading: false,
                success: false,
                error: null,
            };
      
      case CLEAR_ERROR:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };

  export const getBlog = (state = { data: {} }, action) => {
    switch (action.type) {
      case GET_ALL_BLOG_REQUEST:
        return {
          loading: true,
        };
  
        case GET_ALL_BLOG_SUCCESS:
        return {
          ...state,
          loading: false,
          blogs: action.payload.blogs,
          totalBlogs: action.payload.totalBlogs,
          resultPerPage: action.payload.resultPerPage,
        };
  

        case GET_ALL_BLOG_FAIL:
        return {
          ...state,
          loading: false,
          members: null,
          error: action.payload,
        };
      
      case CLEAR_ERROR:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };

  export const blog = (state = { data: {} }, action) => {
    switch (action.type) {
      case GET_BLOG_REQUEST:
        return {
          loading: true,
        };
  
        case GET_BLOG_SUCCESS:
        return {
          ...state,
          loading: false,
          blog: action.payload.blog,
        };
  

        case GET_BLOG_FAIL:
        return {
          ...state,
          loading: false,
          members: null,
          error: action.payload,
        };
      
      case CLEAR_ERROR:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };
