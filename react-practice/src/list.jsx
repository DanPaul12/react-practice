import { useState } from "react";

function DynamicList(){
    const [list, setList] = useState([])
    const [newItem, setNewItem] = useState('')

    function onChange(e) {
        setNewItem(e.target.value)
    }
    
    function addItem(){
        if (newItem !== ''){
        setList([...list, newItem])
        console.log(list)}
    }

    function removeItem(index){
        const newlist = list.filter((item, i)=> i !== index)
        setList(newlist)
    }

    

    return(
        <div>
            <input onChange={onChange} value={newItem}></input>
            <button onClick={addItem}>Add</button>
            <ul>
                {list.map((item, index)=>
                    <li key={index}>{item} <button onClick={() => removeItem(index)}>Remove</button></li>
                )}
            </ul>
        </div>
    )

}

export default DynamicList