import {call, put, takeLatest} from "redux-saga/effects";
import {PizzasApi} from "../../../api/pizzas-api";
import {IPizzasState} from "./contracts/state";
import {setLoaded, setPizzas} from "./actionCreators";
import {ActionsType, IFetchPizzas} from "./contracts/actionTypes";


export function* fetchPizzasRequest({payload}: IFetchPizzas) {
    try {
        yield put(setLoaded(false))
        const items: IPizzasState['items'] = yield call(PizzasApi.fetchPizzas, payload)
        yield put(setPizzas(items))
        yield put(setLoaded(true))
    } catch (error) {
        new Error(error)
    }
}

export function* pizzasSaga() {
    yield takeLatest(ActionsType.FETCH_PIZZAS, fetchPizzasRequest)
}