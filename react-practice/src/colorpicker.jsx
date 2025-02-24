
import { useState } from "react";

function TodoList({todoList, removeItem}){
    const [isCompleted, setIsCompleted] = useState([])

    function addCompleted(index){
        setIsCompleted([...isCompleted, index])
    }

    function removeCompleted(index){
        const updatedCompleted = isCompleted.filter(item => item !== index)
        setIsCompleted(updatedCompleted)
    }
    
    return(
        <div>
            <ul>
                {todoList.map((item, index)=> isCompleted.includes(index) ? 
                (<><li key={index} style={{textDecoration:"line-through"}} onClick={()=>removeCompleted(index)}>{item} </li><button onClick={()=> removeItem(index)}>Remove</button></>):
                <><li key={index} onClick={()=>addCompleted(index)}>{item} </li><button onClick={()=> removeItem(index)}>Remove</button></>)}
            </ul>
        </div>
    )
}

function App2(){
    const [todoList, setTodolist] = useState(['Eat', 'Sleep', 'Drank'])
    const [newTask, setNewTask] = useState('')

    function updateList(newTask){
        if (newTask.trim()!=='') {
        setTodolist([...todoList, newTask])
        setNewTask('')}
    }

    function removeItem(itemIndex){
        const updatedList = todoList.filter((item, index)=> index !== itemIndex)
        setTodolist(updatedList)
        console.log(updatedList)
    }

    return(
        <div>
            <TodoList todoList={todoList} removeItem={removeItem}/>
            <input onChange={(e)=>setNewTask(e.target.value)} value={newTask}></input><br/>
            <button onClick={()=>updateList(newTask)}>Add Task</button>
        </div>
    )
}

export default App2;