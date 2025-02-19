import { useState, useEffect } from "react"

function NewComponent(){

    const [data, setData] = useState(null)
    const [error, setError] = useState(null);

    async function fetchData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const responseData = response.json()
        return responseData
    }

    useEffect(()=>{
        (async()=>{
            try{
                const result = await fetchData()
                setData(result)
            }catch(err){
                setError(err)
            }
        })()
    }, [])

    
    if (error) return <p>Error: {error.message}</p>;
    if (!data) return <p>No data to display.</p>;

    return(
        <ul>
            {data.map((item=>
            <li key={item.id}>{item.name}</li>))}
        </ul>
    )

}

export default NewComponent