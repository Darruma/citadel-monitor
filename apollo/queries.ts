import { gql } from "@apollo/client";

export const LOAD_PURCHASES = gql`
    query loadPurchases {
        fundingPurchases(first:100, orderBy: blockNumber, orderDirection: desc) {
            id
            amountIn
            citadelBought
            funding{
                token
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
            flag
        }
    }
`