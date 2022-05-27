export interface Lock {
    id: string
    epoch: number
    paid: number
    locked: number
    blockNumber: number
    user: {
        id: string
    }
}
export interface Funding {
    id: string
    token: {
        symbol: string
    }
    minPrice: number
    maxPrice: number
    currentPrice: number
}
export interface Emission {
    id: string
    token: {
        symbol: string
    }
    amount: number
    type: string
    blockNumber: number

}
export interface Purchase {
    id: string
    funding: {
        token: {
            symbol: string
        }
    }
    amountIn: number
    citadelBought: number
    blockNumber: number
}
