import * as actionTypes from '../actionTypes';

const initialState = {
  movieDetail: null,
  reviews: null,
  videos: null,
  similars: null,
  error: null,
};

export const singleMovieReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === actionTypes.FETCH_SINGLE_MOVIE_DATA) {
    return {
      ...state,
      movieDetail: payload.movie,
      reviews: payload.reviews,
      videos: payload.videos,
      similars: payload.similars,
    };
  } else if (type === actionTypes.FETCH_SINGLE_MOVIE_ERROR) {
    return {
      ...state,
      error: payload,
    };
  } else {
    return state;
  }
};

export default singleMovieReducer;
