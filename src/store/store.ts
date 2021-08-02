import {createStore, compose, applyMiddleware} from "redux";
import rootReducer from "./reducerc";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./saga";
import {IPizzasState} from "./ducks/pizzas/contracts/state";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()

export interface RootState {
    pizzas: IPizzasState
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)