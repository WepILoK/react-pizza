import {RootState} from "../../store";
import {IPizzasState} from "./contracts/state";

export const selectPizzasState = (state: RootState): IPizzasState => state.pizzas

export const selectPizzasItems = (state: RootState): IPizzasState['items'] =>
    selectPizzasState(state).items

export const selectPizzasIsLoaded = (state: RootState): IPizzasState['isLoaded'] =>
    selectPizzasState(state).isLoaded

export const selectPizzasSortBy = (state: RootState): IPizzasState['sortBy']=>
    selectPizzasState(state).sortBy

export const selectPizzasCategory = (state: RootState): IPizzasState['category']=>
    selectPizzasState(state).category

