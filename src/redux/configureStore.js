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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(Saga);

export default store;
