import { usePolledQuery } from "../apollo/hooks"
import { LOAD_FUNDING } from "../apollo/queries"
import { Funding as FundingData } from "../apollo/types"
import { DataText, DataWrapper, ItemsWrapper, ItemWrapper, TitleText } from "../components/Events"


function Funding() {
    const { data, loading, error } = usePolledQuery(LOAD_FUNDING)
    if (data.fundings) {
        return (
            <ItemsWrapper>
                {data.fundings.map((fd: FundingData) => {
                    return (<ItemWrapper key={fd.id}>
                        <DataWrapper>
                            <DataText>{fd.token.symbol}</DataText>
                            <TitleText>Token</TitleText>
                        </DataWrapper>
                        <DataWrapper>
                            <DataText>{fd.minPrice}</DataText>
                            <TitleText>Minimum Price</TitleText>
                        </DataWrapper>
                        <DataWrapper>
                            <DataText>{fd.maxPrice}</DataText>
                            <TitleText>Maximum Price</TitleText>
                        </DataWrapper>
                        <DataWrapper>
                            <DataText>{fd.currentPrice}</DataText>
                            <TitleText>Current Price</TitleText>
                        </DataWrapper>
                    </ItemWrapper>)
                })}
            </ItemsWrapper>
        )
    }
}

export default Funding