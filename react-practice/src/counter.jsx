import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0)

    function increase(){
        setCount(prevCount => prevCount+1)
    }

    function decrease(){
        if (count>0){
        setCount(prevCount => prevCount-1)}
    }

    return(
        <div>
            <button name="decrease" onClick={decrease}>Decrease</button>
            {count}
            <button name="increase" onClick={increase}>Increase</button>
        </div>
    )
}

export default Counter