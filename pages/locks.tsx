import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { LOAD_LOCKS } from "../apollo/queries"

 function Locks() {
    const [locks, setLocks] = useState([])
    const { data, loading, error } = useQuery(LOAD_LOCKS, {
        pollInterval: 500
    })
    useEffect(() => {
        if(data) {
            console.log(data)
            setLocks(data)
        }
    }, [data])
    return <div>
        
    </div>
}
export default Locks