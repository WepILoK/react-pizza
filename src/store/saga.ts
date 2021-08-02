import { all } from "redux-saga/effects";
import {pizzasSaga} from "./ducks/pizzas/sagas";

export default function* rootSaga() {
    yield all([
        pizzasSaga(),
    ])
}