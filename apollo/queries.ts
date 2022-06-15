import { gql } from "@apollo/client";

export const LOAD_PURCHASES = gql`
    query loadPurchases {
        fundingPurchases(first:100, orderBy: blockNumber, orderDirection: desc) {
            id
            amountIn
            citadelBought
            buyer {
                id
            }
            funding{
                token {
                    symbol
                    decimals
                }
            }
            blockNumber
        }
    }
`
export const LOAD_LOCKS = gql`
    query loadLocks {
        stakedCitadelLocks(first:100, orderBy: blockNumber, orderDirection: desc) {
            id
            account {
                id
            }
            epoch
            paid
            locked
            blockNumber
        }
    }
`

export const LOAD_FUNDING = gql`
    query loadFunding {
        fundings(first:100) {
            token {
                symbol
                decimals
            }
            minPrice
            maxPrice
            currentPrice
            minDiscount
            maxDiscount
            discount
            flag
            purchases(first:100, orderBy: blockNumber, orderDirection: desc) {
                id
                amountIn
                citadelBought
                buyer {
                    id
                }
                funding{
                    token {
                        symbol
                        decimals
                    }
                }
                blockNumber
            }
        }
    }
`

export const LOAD_KNIGHTING_ROUNDS = gql`
    query loadKnightingRounds {
        knightingRounds(first:100) {
            id
        }
    }
` 

export const LOAD_EMISSIONS = gql`
    query loadEmissions {
        stakedCitadelEmissions(first:100, orderBy: blockNumber, orderDirection: desc) {
            id
            token {
                symbol
                decimals
            }
            amount
            blockNumber
            type
        }
    }
`