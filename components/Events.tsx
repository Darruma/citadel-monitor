import styled from "styled-components"

export const ItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    color: white;
    width: 100%;
    margin-top: 2rem;
`
export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    background-color: #43455C;
    @media (max-width: 800px) {
        flex-wrap:wrap;
        width: 70%;
    }

    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;
`
export const DataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 150px;
    @media (max-width: 800px) {
        flex: 0 0 0
        min-width: 0px;
    }

    margin: 1rem;
`
export const TitleText = styled.div`
    font-size: 15px;
    color: #9CA3AF;
`
export const DataText = styled.div`
    font-size: 25px;
`