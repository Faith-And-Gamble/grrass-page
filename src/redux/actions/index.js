import deleteApi from '../../../service_methods/delete_method';
import postApi from '../../../service_methods/post_method';
// import putApi from '../../service_methods/put_method';
import getApi from '../../../service_methods/get_method';
import {
  ADD_NEW_FAILURE,
  ADD_NEW_SUCCESS,
  API_REQUEST,
  FETCH_LIST_FAILURE,
  FETCH_LIST_SUCCESS,
  ON_COMPLETE,
  UPDATED_FAILURE,
  UPDATED_SUCCESS,
  DELETED_FAILURE,
  DELETED_SUCCESS,
  SELECTED_QUARTERS,
  DATA_SUCCESS,
  DATA_FAILURE,
  QUARTERS_SUCCESS,
  QUARTERS_FAILURE,
} from '../action_types';

export const apiRequest = () => ({
  type: API_REQUEST,
  payload: true,
});

export const onComplete = () => ({
  type: ON_COMPLETE,
  payload: false,
});

export const fetchListSuccess = (payload) => ({
  type: FETCH_LIST_SUCCESS,
  payload,
});

export const fetchListFailure = (payload) => ({
  type: FETCH_LIST_FAILURE,
  payload,
});
export const addSuccess = (payload) => ({
  type: ADD_NEW_SUCCESS,
  payload,
});

export const addFailure = (payload) => ({
  type: ADD_NEW_FAILURE,
  payload,
});

export const fetchList = (url) => (dispatch) => {
  dispatch(apiRequest());
  getApi(url)
    .then((res) => {
      dispatch(fetchListSuccess(res.data.data));
    })
    .catch((err) => dispatch(fetchListFailure(err)));
};

export const addList = (payload, type) => (dispatch) => {
  dispatch(apiRequest());
  setTimeout(() => {
    postApi(payload, type, 'add')
      .then((res) => {
        dispatch(addSuccess(res.data));
      })
      .catch((err) => dispatch(addFailure(err)));
  }, 3000);
};

export const updateSuccess = (payload) => ({
  type: UPDATED_SUCCESS,
  payload,
});

export const updateFailure = (payload) => ({
  type: UPDATED_FAILURE,
  payload,
});

export const updateList = (payload, type) => (dispatch) => {
  dispatch(apiRequest());
  postApi(payload, type, 'edit')
    .then((res) => {
      dispatch(updateSuccess(res.data));
    })
    .catch((err) => dispatch(updateFailure(err)));
};

export const deleteSuccess = (payload) => ({
  type: DELETED_SUCCESS,
  payload,
});

export const deleteFailure = (payload) => ({
  type: DELETED_FAILURE,
  payload,
});

export const deleteItemTable = (url, id, type) => (dispatch) => {
  dispatch(apiRequest());
  deleteApi(url, id, type)
    .then((res) => {
      dispatch(updateSuccess(res.data));
    })
    .catch((err) => dispatch(updateFailure(err)));
};

export const selectedQuartersFunc = (payload) => ({
  type: SELECTED_QUARTERS,
  payload,
});

export const fetchDataSuccess = (payload) => ({
  type: DATA_SUCCESS,
  payload,
});

export const fetchDataFailure = (payload) => ({
  type: DATA_FAILURE,
  payload,
});

export const getDataApi = (payload, type) => async (dispatch) => {
  dispatch(apiRequest());
  postApi(payload, type)
    .then((res) => {
      dispatch(fetchDataSuccess(res.data));
      dispatch(onComplete());
    })
    .catch((err) => {
      dispatch(onComplete());
      fetchDataFailure((err));
    });
};

export const fetchQuarterSuccess = (payload) => ({
  type: QUARTERS_SUCCESS,
  payload,
});

export const fetchQuarterFailure = (payload) => ({
  type: QUARTERS_FAILURE,
  payload,
});

export const getQuarterApi = (payload, type) => async (dispatch) => {
  dispatch(apiRequest());
  postApi(payload, type)
    .then((res) => {
      dispatch(fetchQuarterSuccess(res.data));
      dispatch(onComplete());
    })
    .catch((err) => {
      dispatch(onComplete());
      fetchQuarterFailure((err));
    });
};

export const deleteData = (payload, type) => async (dispatch) => {
  dispatch(apiRequest());
  deleteApi(payload, type)
    .then(() => {
      dispatch(onComplete());
    })
    .catch((err) => {
      dispatch(onComplete());
      throw err;
    });
};
