import {
  API_REQUEST,
  ON_COMPLETE,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_FAILURE,
  ADD_NEW_SUCCESS,
  ADD_NEW_FAILURE,
  UPDATED_SUCCESS,
  UPDATED_FAILURE,
  SELECTED_QUARTERS,
  DATA_SUCCESS,
  DATA_FAILURE,
  QUARTERS_SUCCESS,
  QUARTERS_FAILURE,
} from '../action_types';

const initialState = {
  isLoading: false,
  listData: [],
  selectedQuarters: [],
  compData: [],
  quartersData: {},
};
// eslint-disable-next-line default-param-last
const tasks = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case API_REQUEST:
      return {
        ...state,
        isLoading: payload,
      };
    case ON_COMPLETE:
      return {
        ...state,
        isLoading: payload,
      };
    case FETCH_LIST_SUCCESS:
      return {
        ...state,
        listData: payload,
        isLoading: false,
      };
    case FETCH_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case ADD_NEW_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case ADD_NEW_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case UPDATED_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case UPDATED_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case SELECTED_QUARTERS:
      return {
        ...state,
        selectedQuarters: payload,
        isLoading: false,
      };
    case DATA_SUCCESS:
      return {
        ...state,
        compData: payload,
        isLoading: false,
      };
    case DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case QUARTERS_SUCCESS:
      return {
        ...state,
        quartersData: payload,
        isLoading: false,
      };
    case QUARTERS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default tasks;
