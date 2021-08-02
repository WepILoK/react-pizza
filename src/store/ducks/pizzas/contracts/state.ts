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
    POPULAR = "popular"
}

export enum EnumSortByOrder {
    DESC = "desc"
}

export interface ISortBy {
    type: EnumSortByType
    order: EnumSortByOrder
}

export interface IPizzasState {
    items: IPizza[]
    isLoaded: boolean
    category: null
    sortBy: ISortBy

}