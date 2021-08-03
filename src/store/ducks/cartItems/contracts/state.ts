export interface InItem {
    id: number
    name: string
    imageUrl: string
    price: number
    size: number
    type: string
}

export interface ICartState {
    items: any,
    totalPrice: number,
    totalCount: number,
}