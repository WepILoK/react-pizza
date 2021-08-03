export interface IPizza {
    id: number
    imageUrl: string
    name: string
    types: number[]
    sizes: number[]
    price: number
    category: number
    rating: number
}

export enum EnumSortByType {
    POPULAR = "popular",
    PRICE = "price",
    NAME = "name"
}

export enum EnumSortByOrder {
    DESC = "desc",
    ASC = "asc"
}

export enum EnumCategory {
    MEAT = "Мясные",
    VEGETARIAN = "Вегетарианская",
    GRILL = "Гриль",
    SPICY = "Острые",
    CLOSED = "Закрытые",
}

export interface ISortBy {
    type: EnumSortByType
    order: EnumSortByOrder
}

export interface IPizzasState {
    items: IPizza[]
    isLoaded: boolean
    category: EnumCategory | null
    sortBy: ISortBy

}