import { gql } from "@apollo/client";

export const LOAD_PURCHASES = gql`
    query loadPurchases {
        fundingPurchases(first:100, orderBy: blockNumber, orderDirection: desc) {
            id
            amountIn
            citadelBought
            funding{
                token {
                    symbol
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
            user{
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
            }
            minPrice
            maxPrice
            currentPrice
            minDiscount
            maxDiscount
            discount
            flag
        }
    }
`

export const LOAD_EMISSIONS = gql`
    query loadEmissions {
        stakedCitadelEmission(first:100, orderBy: blockNumber, orderDirection: desc) {
            id
            token {
                symbol
            }
            amount
            blockNumber
            type
        }
    }
`