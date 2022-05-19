import { useEffect, useState } from "react"
import { usePolledQuery } from "../apollo/hooks"
import { LOAD_LOCKS } from "../apollo/queries"
import styled from "styled-components"

const LocksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`

function Locks() {
    const { data, loading, error } = usePolledQuery(LOAD_LOCKS)
    return <LocksWrapper>

    </LocksWrapper>
}
export default Locks