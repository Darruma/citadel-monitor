import { useState } from "react"
import styled from "styled-components"
import { usePolledQuery } from "../apollo/hooks"
import { LOAD_FUNDING, LOAD_KNIGHTING_ROUNDS } from "../apollo/queries"
import { Funding as FundingData, KnightingRound as KnightingRoundData, Purchase } from "../apollo/types"
import Dropdown from "../components/Dropdown"
import { DataText, DataWrapper, ItemsWrapper, ItemWrapper, TitleText } from "../components/Events"
import { formatTokenAmount } from "../utils"
import { Purchases } from "./purchases"

const Title = styled.div`
    text-decoration: underline;
    color: white;
    margin: 10px auto;
    font-size: 25px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

function KnightingRound() {
    const { data, loading, error } = usePolledQuery(LOAD_KNIGHTING_ROUNDS)
    const [dropdown, setDropdown] = useState(false);

    if (data) {
        return (
            <ItemsWrapper>
                {data.knightingRounds.map((kr: KnightingRoundData) => {
                    return (
                        <>
                            <ItemWrapper key={kr.id} onClick={() => setDropdown(!dropdown)}>
                                <DataWrapper>
                                    <DataText>{kr.token.symbol}</DataText>
                                    <TitleText>Token</TitleText>
                                </DataWrapper>
                                <DataWrapper>
                                    <DataText>{kr.dao}</DataText>
                                    <TitleText>DAO</TitleText>
                                </DataWrapper>
                                <DataWrapper>
                                    <DataText>{kr.price}</DataText>
                                    <TitleText>Price</TitleText>
                                </DataWrapper>
                                <DataWrapper>
                                    <DataText>{kr.finalized ? '✅' : '❌'}</DataText>
                                    <TitleText>Price</TitleText>
                                </DataWrapper>
                            </ItemWrapper>
                            <Dropdown drop={dropdown}>
                                <Purchases data={kr.purchases.slice(0, 3)} loading={loading} error={error} />
                            </Dropdown>
                        </>)
                })}
            </ItemsWrapper>
        )
    }
}

function Funding() {
    const { data, loading, error } = usePolledQuery(LOAD_FUNDING)
    const [dropdown, setDropdown] = useState(false);
    if (data) {
        return (
            <ItemsWrapper>
                {data.fundings.map((fd: FundingData) => {
                    return (
                        <>
                            <ItemWrapper key={fd.id} onClick={(e) => setDropdown(!dropdown)}>
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
                                    <DataText>{formatTokenAmount(fd.currentPrice, fd.token.decimals)}</DataText>
                                    <TitleText>Current Price</TitleText>
                                </DataWrapper>
                                <DataWrapper>
                                    <DataText>{fd.discount}</DataText>
                                    <TitleText>Current Discount</TitleText>
                                </DataWrapper>
                            </ItemWrapper>
                            <Dropdown drop={dropdown}>
                                <Purchases data={fd.purchases.slice(0, 3)} loading={loading} error={error} />
                            </Dropdown>
                        </>)
                })}
            </ItemsWrapper>
        )
    }
}

function FundingWrapper() {
    return (<Container>
        <Title>Funding</Title>
        <Funding />
        <Title>Knighting Round</Title>
        <KnightingRound />
    </Container>)

}
export default FundingWrapper