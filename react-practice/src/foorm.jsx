import { useEffect, useState } from "react";

function FormComponent(){
   const [todoList, setTodoList] = useState([
    {task: 'watever', priority: 'high'},
    {task: 'ggarble', priority: 'medium'},
    {task: 'smangg', priority: 'low'}
   ])

   const priorityMap = {
    high : 3,
    medium : 2,
    low : 1
   }

    return(
        <div>
            {todoList.sort((a,b)=>priorityMap[a.priority]-priorityMap[b.priority]).map((task, index)=>
            <li key={index}>Task:{task.task} Priority: {task.priority}</li>)}
        </div>
    )
}

export default FormComponent