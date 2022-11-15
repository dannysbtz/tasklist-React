import { useState, useEffect } from 'react'
import {TaskForm} from './components/TaskForm'
import {TaskList} from './components/TaskList'
import { data } from './data'

export function App(){

    const [tasks, taskState] = useState([]);

    function createTask(title,descr,name){
        const nuevo = {
            name: name,
            id: tasks.length,
            title: title,
            description: descr
        }
        taskState([...tasks, nuevo]);
    }

    const deleteTask = (id) =>{
        const newArray = tasks.filter(n => n.id !== id)
        taskState(newArray);
        console.log("eliminado")
    }
    
    useEffect(() => {
        taskState(data)
    }, [])

    return(
        <>
        <TaskForm createTask={createTask}/>
        <TaskList tasks={tasks} deleteTask={deleteTask}/>
        </>
    )
}