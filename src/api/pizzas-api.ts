import axios from "axios";
import {IPizzasState} from "../store/ducks/pizzas/contracts/state";


export interface IRequestPizzas {
    category: IPizzasState['category']
    sortBy: IPizzasState['sortBy']
}

export const PizzasApi = {
    async fetchPizzas({category, sortBy}: IRequestPizzas): Promise<IPizzasState['items']> {
        const {data} = await axios.get<IPizzasState['items']>
        (`/pizzas?${category === null ? "" : `category=${category}`}&_sort=${sortBy.type}&_order=${sortBy.order}`)
        return data
    },

}
