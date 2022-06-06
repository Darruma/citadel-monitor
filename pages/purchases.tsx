import { usePolledQuery } from "../apollo/hooks"
import { LOAD_PURCHASES } from "../apollo/queries"
import { Purchase } from "../apollo/types"
import { ItemsWrapper, ItemWrapper, DataWrapper, DataText, TitleText } from "../components/Events"
import { ETHERSCAN_URL } from "../constants"
import { weiToEther } from "../utils"

function Purchases() {
    const { data, loading, error } = usePolledQuery(LOAD_PURCHASES)
    console.log(data)
    if (data) {
        return <ItemsWrapper>
            {data.fundingPurchases.map((fp: Purchase) => {
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
                        <DataText>{weiToEther(fp.amountIn)}</DataText>
                        <TitleText>Buy Amount</TitleText>
                    </DataWrapper>
                    <DataWrapper>
                        <DataText>{weiToEther(fp.citadelBought)}</DataText>
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
export default Purchases