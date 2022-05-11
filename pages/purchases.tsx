import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { LOAD_PURCHASES } from "../apollo/queries"

function Purchases() {
    const [purchases, setPurchases] = useState([])
    const { data, loading, error } = useQuery(LOAD_PURCHASES, {
        pollInterval: 500
    })
    useEffect(() => {
        if(data) {
            console.log(data)
            setPurchases(data)
        }
    }, [data])
    return <div>

    </div>

}
export default Purchases