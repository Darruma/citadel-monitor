export interface Lock {
    id: string
    epoch: number
    paid: number
    locked: number
    blockNumber: number
    account: {
        id: string
    }
}
export interface Funding {
    id: string
    token: Token
    minPrice: number
    maxPrice: number
    discount: number
    currentPrice: number
}
export interface Emission {
    id: string
    token: Token
    amount: number
    type: string
    blockNumber: number

}
export interface Purchase {
    id: string
    funding: {
        token: Token
    }
    buyer: {
        id: string
    }
    amountIn: number
    citadelBought: number
    blockNumber: number
}

export interface Token {
    symbol: string,
    decimals: number
}