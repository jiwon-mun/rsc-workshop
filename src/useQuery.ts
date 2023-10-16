import { useEffect, useState } from "react"

const useQuery = <T,>(url: string) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<T>()
    
    useEffect(()=> {
        fetch(url).then((raw)=> {
            raw.json().then((data)=> {
                setData(data)
                setLoading(false)
            })
        })
    },[url])

    return {data, loading}
}

export default useQuery