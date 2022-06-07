import { LOAD_EMISSIONS, LOAD_FUNDING, LOAD_LOCKS, LOAD_PURCHASES } from './queries';
import { Emission, Funding, Lock, Purchase } from './types';


const MOCK_SYMBOLS = ["WBTC", "CTDL", "CVX"]
const MOCK_ADDRS = [
    "0x2DBb724A506935783A542B4fcc19cd19E46AA167",
    "0x7f268357A8c2552623316e2562D90e642bB538E5",
    "0xDFE7772e8647CF105C15Da6319Efd64C8d4Fb12D",
    "0xa24787320ede4CC19D800bf87B41Ab9539c4dA9D"
]


function randInt(int: number): number {
    return Math.floor(Math.random() * int)
}
function mockFunding(amount: number): Funding[] {
    return [
        {id: "1",token: {symbol : 'CVX', decimals: 18}, minPrice: 0, maxPrice: 100, currentPrice: 50, discount: 100 },
        {id: "2", token: {symbol : 'WBTC', decimals: 9}, minPrice: 10, maxPrice: 20, currentPrice: 15, discount: 300 },
    ]
}
function mockEmissions(amount: number): Emission[] {
    return Array.from(Array(amount).keys()).map(e => {
        return {
            id: e.toString(),
            token: {
                symbol: MOCK_SYMBOLS[randInt(MOCK_SYMBOLS.length)],
                decimals: 18
            },
            blockNumber: randInt(10000),
            amount: randInt(1000),
            type: ["Treasury Yield", "Funding Yield", "Additional Tokens"][randInt(3)]

        }
    })
}
function mockLocks(amount: number): Lock[] {
    return Array.from(Array(amount).keys()).map(e => {
        return {
            id: e.toString(),
            account: {
                id: MOCK_ADDRS[randInt(MOCK_ADDRS.length)]
            },
            epoch:randInt(100),
            paid: randInt(1000),
            locked: randInt(1000),
            blockNumber: randInt(1000000)
        }
    })
}
function mockPurchases(amount: number): Purchase[] {
    return Array.from(Array(amount).keys()).map(e => {
        return {
            id: e.toString(),
            funding: {
                token: {
                    symbol: MOCK_SYMBOLS[randInt(MOCK_SYMBOLS.length)],
                    decimals: 18
                }
            },
            amountIn: randInt(1000),
            citadelBought: randInt(10000),
            buyer: {id:MOCK_ADDRS[randInt(MOCK_ADDRS.length)]},
            blockNumber: randInt(1000000)
        }
    }) 
}
function mockQuery(query) {
    let result = {
        data: {},
        error: false,
        loading: false
    }
    const fieldName = query.definitions[0].selectionSet.selections[0].name.value
    switch(query) {
        case LOAD_FUNDING:
            result.data[fieldName] = mockFunding(2)
            break;
        case LOAD_EMISSIONS:
            result.data[fieldName] = mockEmissions(10)
            break;
        case LOAD_LOCKS:
            result.data[fieldName] = mockLocks(10)
            break;
        case LOAD_PURCHASES:
            result.data[fieldName] = mockPurchases(10)
            break;
    }
    return result
}
export default mockQuery