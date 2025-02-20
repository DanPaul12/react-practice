import { useState } from "react";

function ToggleList(){

    const [togglelist, setToggleList] = useState({
        'item1': 'item1 details',
        'item2': 'item2 details',
        'item3': 'item3 details'
    })

    const [showDetails, setShowDetails] = useState({
        'item1':false,
        'item2':false,
        'item3':false
    })

    function toggleDeets(key){
        setShowDetails(prev => (
            {...prev, [key]: !prev[key]}
        ))
    }


    return(
        <ul>
            {Object.keys(togglelist).map(key=>
                <li key={key}>{key}<button onClick={() => toggleDeets(key)}>Show deets</button>
                {showDetails[key] && <p>{togglelist[key]}</p>}</li>
            )}
        </ul>
    )
}

export default ToggleList