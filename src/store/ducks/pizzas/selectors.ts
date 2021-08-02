import {RootState} from "../../store";
import {IPizzasState} from "./contracts/state";

export const selectPizzasState = (state: RootState): IPizzasState => state.pizzas

export const selectPizzasItems = (state: RootState): IPizzasState['items'] =>
    selectPizzasState(state).items