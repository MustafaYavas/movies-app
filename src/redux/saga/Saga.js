import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../actionTypes';
import {
  handleFetchCultMovies,
  handleFetchHeroMovies,
  handleFetchMovieReviews,
  handleFetchMovieVideos,
  handleFetchNewMovies,
  handleFetchRecomMovies,
  handleFetchSimilarMovies,
  handleFetchSingleMovie,
} from './Api';

const actionData = function (type, payload) {
  return { type, payload };
};

export const getMovies = function* () {
  yield put(actionData(actionTypes.FETCH_START));
  try {
    const result = yield all({
      cultMovies: call(handleFetchCultMovies),
      recomMovies: call(handleFetchRecomMovies),
      heroMovies: call(handleFetchHeroMovies),
      newMovies: call(handleFetchNewMovies),
      popularMovies: call(handleFetchNewMovies),
    });

    yield put(actionData(actionTypes.FETCH_MOVIE_DATA, result));
    yield put(actionData(actionTypes.FETCH_END));
  } catch (error) {
    yield put(actionData(actionTypes.FETCH_MOVIE_ERROR, error));
    yield put(actionData(actionTypes.FETCH_END));
  }
};

export const getSingleMovie = function* ({ payload }) {
  yield put(actionData(actionTypes.FETCH_START));
  try {
    const result = yield all({
      movie: call(handleFetchSingleMovie, payload),
      reviews: call(handleFetchMovieReviews, payload),
      videos: call(handleFetchMovieVideos, payload),
      similars: call(handleFetchSimilarMovies, payload),
    });

    yield put(actionData(actionTypes.FETCH_SINGLE_MOVIE_DATA, result));
    yield put(actionData(actionTypes.FETCH_END));
  } catch (error) {
    yield put(actionData(actionTypes.FETCH_SINGLE_MOVIE_ERROR, error));
    yield put(actionData(actionTypes.FETCH_END));
  }
};

const Saga = function* () {
  yield takeLatest(actionTypes.FETCH_MOVIE_REQUEST, getMovies);
  yield takeLatest(actionTypes.FETCH_SINGLE_MOVIE_REQUEST, getSingleMovie);
};
export default Saga;
