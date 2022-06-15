import { usePolledQuery } from "../apollo/hooks"
import { LOAD_PURCHASES } from "../apollo/queries"
import { Purchase } from "../apollo/types"
import { ItemsWrapper, ItemWrapper, DataWrapper, DataText, TitleText } from "../components/Events"
import { ETHERSCAN_URL } from "../constants"
import { formatTokenAmount } from "../utils"


function PurchasesContainer() {
    const { data, loading, error } = usePolledQuery(LOAD_PURCHASES)
    return <Purchases data={data?.fundingPurchases} loading={loading} error={error} />
}

export function Purchases({ data, loading, error }) {
    if (data) {
        return <ItemsWrapper>
            {data.map((fp: Purchase) => {
                return <ItemWrapper key={fp.id}>
                    <DataWrapper>
                        <DataText>{fp.funding.token.symbol}</DataText>
                        <TitleText>Token</TitleText>
                    </DataWrapper>
                    <DataWrapper>
                        <DataText>
                            <a target="_blank" rel="noreferrer" href={`${ETHERSCAN_URL}/address/${fp.buyer.id}`}>
                                {fp.buyer.id.substring(0, 5)}
                            </a>
                        </DataText>
                        <TitleText>Account</TitleText>
                    </DataWrapper>
                    <DataWrapper>
                        <DataText>{formatTokenAmount(fp.amountIn, fp.funding.token.decimals)}</DataText>
                        <TitleText>Buy Amount</TitleText>
                    </DataWrapper>
                    <DataWrapper>
                        <DataText>{formatTokenAmount(fp.citadelBought, fp.funding.token.decimals)}</DataText>
                        <TitleText>Citadel Purchased</TitleText>
                    </DataWrapper>
                    <DataWrapper>
                        <DataText>{fp.blockNumber}</DataText>
                        <TitleText>Block Number</TitleText>
                    </DataWrapper>
                    <DataWrapper>
                        <DataText>
                            <a target="_blank" rel="noreferrer" href={`${ETHERSCAN_URL}/tx/${fp.id}`}>
                                {fp.id.substring(0, 5)}
                            </a>
                        </DataText>
                        <TitleText>Transaction</TitleText>
                    </DataWrapper>

                </ItemWrapper>
            })}
        </ItemsWrapper>

    }

}
export default PurchasesContainer