
import { useState } from "react";

function MovieChild({addMovie}){
    const [newMovie, setNewMovie] = useState('')

    function updateList(newMovie){
        addMovie(newMovie)
        setNewMovie('')
    }

    return(
        <div>
            <input onChange={(e)=> setNewMovie(e.target.value)} value={newMovie}></input>
            <button onClick={()=>updateList(newMovie)}>Submit</button>
        </div>
    )
}

function App2(){
    const [movieList, setMovieList] = useState([
        'Matrix',
        'Inception',
        '50 Shades'
    ])

    function addMovie(newMovie){
        const updatedList = [...movieList, newMovie]
        setMovieList(updatedList)
    }

    return(
        <div>
            {movieList.map((movie, index)=> 
                <li key={index}>{movie}</li>
            )}
            <MovieChild addMovie={addMovie}/>
        </div>
    )
}

export default App2;