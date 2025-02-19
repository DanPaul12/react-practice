
import { useState } from "react";

function Toggle(){
    const [show, setShow] = useState(null)

    function funcshow(){
        setShow(prevshow => !prevshow)
    }

    return(
        <div>
        <button onClick={funcshow}>{show ? 'Hide' : 'Show'}</button>
            {show && <p>Not posed to see this</p>}
        </div>
    )
}

export default Toggle