import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { usePolledQuery } from "../apollo/hooks"
import { LOAD_PURCHASES } from "../apollo/queries"

function Purchases() {
    const { data, loading, error } = usePolledQuery(LOAD_PURCHASES)
    return <div>

    </div>

}
export default Purchases