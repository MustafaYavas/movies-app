import { call, put, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../actionTypes';
import {
  handleFetchCultMovies,
  handleFetchHeroMovies,
  handleFetchNewMovies,
  handleFetchRecomMovies,
} from './Api';

const actionData = function (type, payload, event) {
  return { type, payload };
};

export const getMovies = function* () {
  yield put(actionData(actionTypes.FETCH_START));
  try {
    const cultMovies = yield call(handleFetchCultMovies);
    const recomMovies = yield call(handleFetchRecomMovies);
    const heroMovies = yield call(handleFetchHeroMovies);
    const newMovies = yield call(handleFetchNewMovies);
    const popularMovies = yield call(handleFetchNewMovies);

    const result = {
      heroMovies,
      cultMovies,
      recomMovies,
      newMovies,
      popularMovies,
    };

    yield put(actionData(actionTypes.FETCH_MOVIE_DATA, result));
    yield put(actionData(actionTypes.FETCH_END));
  } catch (error) {
    yield put(actionData(actionTypes.FETCH_MOVIE_ERROR, error));
    yield put(actionData(actionTypes.FETCH_END));
  }
};

const Saga = function* () {
  yield takeLatest(actionTypes.FETCH_MOVIE_REQUEST, getMovies);
};
export default Saga;
