import * as actionTypes from '../actionTypes';

const initialState = {
  loading: false,
};

export const loadingReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === actionTypes.FETCH_START) {
    return {
      ...state,
      loading: true,
    };
  } else if (type === actionTypes.FETCH_END) {
    return {
      ...state,
      loading: false,
    };
  } else {
    return state;
  }
};

export default loadingReducer;
