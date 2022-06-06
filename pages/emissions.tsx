import { usePolledQuery } from "../apollo/hooks"
import { LOAD_EMISSIONS } from "../apollo/queries"
import { Emission } from "../apollo/types"
import { DataText, DataWrapper, ItemsWrapper, ItemWrapper, TitleText } from "../components/Events"
import { ETHERSCAN_URL } from "../constants"
function Emissions() {
    const { data, loading, error } = usePolledQuery(LOAD_EMISSIONS)
    console.log(data)
    if (data) {
        return (
            <ItemsWrapper>
                {data.stakedCitadelEmissions.map((emission: Emission) => {
                    return (<ItemWrapper key={emission.id}>
                        <DataWrapper>
                            <DataText>{emission.token.symbol}</DataText>
                            <TitleText>Token</TitleText>
                        </DataWrapper>
                        <DataWrapper>
                            <DataText>{emission.amount}</DataText>
                            <TitleText>Amount</TitleText>
                        </DataWrapper>
                        <DataWrapper>
                            <DataText>{emission.type}</DataText>
                            <TitleText>Emission Type</TitleText>
                        </DataWrapper>
                        <DataWrapper>
                            <DataText>{emission.blockNumber}</DataText>
                            <TitleText>blockNumber</TitleText>
                        </DataWrapper>
                        <DataWrapper>
                            <DataText>
                                <a target="_blank" href={`${ETHERSCAN_URL}/tx/${emission.id}`}>
                                    {emission.id.substring(0, 5)}
                                </a>
                            </DataText>
                            <TitleText>Transaction</TitleText>
                        </DataWrapper>
                    </ItemWrapper>)
                })}
            </ItemsWrapper>
        )
    }
}
export default Emissions