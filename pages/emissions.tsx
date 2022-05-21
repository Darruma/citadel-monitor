import { usePolledQuery } from "../apollo/hooks"
import { LOAD_EMISSIONS } from "../apollo/queries"
import { DataText, DataWrapper, ItemsWrapper, ItemWrapper, TitleText } from "../components/Events"

function Emissions() {
    const { data, loading, error } = usePolledQuery(LOAD_EMISSIONS)
    if (data.stakedCitadelEmission) {
        return (
            <ItemsWrapper>
                {data.stakedCitadelEmission.map((emission) => {
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
                    </ItemWrapper>)
                })}
            </ItemsWrapper>
        )
    }
}
export default Emissions