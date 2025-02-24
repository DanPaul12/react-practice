import { useState, useEffect } from "react"

function NewComponent(){

    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    async function fetchData() {
        try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }
        const responseData = await response.json()
        setData(responseData)}
        catch (err){
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=> {fetchData()}, [])

    if (error) return <p>Error:{error}</p>
    if (loading) return <p>Loading...</p>

    return(
       <div>
        <ul>
            {data.map(post=><li key={post.id}>{post.title}{post.body}</li>)}
        </ul>
       </div>
    )


}

export default NewComponent