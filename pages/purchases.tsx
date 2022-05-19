import { usePolledQuery } from "../apollo/hooks"
import { LOAD_PURCHASES } from "../apollo/queries"
import { ItemsWrapper, ItemWrapper, DataWrapper, DataText, TitleText } from "../components/Events"

function Purchases() {
    const { data, loading, error } = usePolledQuery(LOAD_PURCHASES)
    if (data) {
        return <ItemsWrapper>
            {data.fundingPurchases.map((fp) => {
                console.log(fp.citadelOut)
                return <ItemWrapper>
                    <DataWrapper>
                        <DataText>{fp.funding.token.symbol}</DataText>
                        <TitleText>Token</TitleText>
                    </DataWrapper>
                    <DataWrapper>
                        <DataText>{fp.amountIn}</DataText>
                        <TitleText>Buy amount</TitleText>
                    </DataWrapper>
                    <DataWrapper>
                        <DataText>{fp.citadelBought}</DataText>
                        <TitleText>Citadel purchased</TitleText>
                    </DataWrapper>
                    <DataWrapper>
                        <DataText>{fp.blockNumber}</DataText>
                        <TitleText>Block number</TitleText>
                    </DataWrapper>
                </ItemWrapper>
            })}
        </ItemsWrapper>

    }

}
export default Purchases