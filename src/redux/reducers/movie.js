import * as actionTypes from '../actionTypes';

const initialState = {
  heroMovies: [],
  cultMovies: [],
  recomMovies: [],
  newMovies: [],
  popularMovies: [],
  error: null,
  movieDetail: null,
};

export const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === actionTypes.FETCH_MOVIE_DATA) {
    return {
      ...state,
      heroMovies: payload.heroMovies,
      cultMovies: payload.cultMovies,
      recomMovies: payload.recomMovies,
      newMovies: payload.newMovies,
      popularMovies: payload.popularMovies,
    };
  } else if (type === actionTypes.FETCH_MOVIE_ERROR) {
    return {
      ...state,
      error: payload,
    };
  } else {
    return state;
  }
};

export default movieReducer;
