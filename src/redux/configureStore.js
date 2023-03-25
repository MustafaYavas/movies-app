import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import movieReducer from './reducers/movie';
import loadingReducer from './reducers/loading';
import singleMovieReducer from './reducers/singleMovie';

import Saga from './saga/Saga';

const combinedReducer = combineReducers({
  movieReducer,
  singleMovieReducer,
  loadingReducer,
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(Saga);

export default store;
