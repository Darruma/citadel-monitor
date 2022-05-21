import { LOAD_EMISSIONS, LOAD_FUNDING, LOAD_LOCKS, LOAD_PURCHASES } from './queries';

const FUNDING_DATA = [
    {id: "1",token: {symbol : 'CVX'}, minPrice: 0, maxPrice: 100, currentPrice: 50 },
    {id: "2", token: {symbol : 'WBTC'}, minPrice: 10, maxPrice: 20, currentPrice: 15 },
]
const EMISSION_DATA = [
   {id: "1", token: {symbol: 'WBTC'}, amount: 100, type: 'Treasury Yield', blockNumber: 1224},
   {id: "2", token: {symbol: 'CTDL'}, amount: 200, type: 'Funding Yield', blockNumber: 1234} 
]
const LOCKS_DATA = [
  {id: "1", user:{id:'0x123'}, epoch: 2, paid: 100, locked: 200, blockNumber: 200},
  {id: "2", user:{id:'0x123'}, epoch: 1, paid: 100, locked: 0, blockNumber: 10}
]
const PURCHASES_DATA = [
  {id: "1", funding:{token:{symbol:'CVX'}}, amountIn: 2, citadelBought: 100, blockNumber: 23}
]
function mockQuery(query) {
    let result = {
        data: {},
        error: false,
        loading: false
    }
    const fieldName = query.definitions[0].selectionSet.selections[0].name.value
    switch(query) {
        case LOAD_FUNDING:
            result.data[fieldName] = FUNDING_DATA
            break;
        case LOAD_EMISSIONS:
            result.data[fieldName] = EMISSION_DATA
            break;
        case LOAD_LOCKS:
            result.data[fieldName] = LOCKS_DATA
            break;
        case LOAD_PURCHASES:
            result.data[fieldName] = PURCHASES_DATA
            break;
    }
    return result
}
export default mockQuery