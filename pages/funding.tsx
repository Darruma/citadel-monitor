import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { LOAD_FUNDING } from "../apollo/queries"

function Funding() {
    const { data, loading, error } = useQuery(LOAD_FUNDING)
    return (
        <div>

        </div>
    )
}

export default Funding