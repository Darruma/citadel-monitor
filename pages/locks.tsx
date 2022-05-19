import { useEffect, useState } from "react"
import { usePolledQuery } from "../apollo/hooks"
import { LOAD_LOCKS } from "../apollo/queries"

function Locks() {
    const [locks, setLocks] = useState([])
    const { data, loading, error } = usePolledQuery(LOAD_LOCKS)
    return <div>

    </div>
}
export default Locks