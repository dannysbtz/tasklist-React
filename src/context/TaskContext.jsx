import {createContext, useState, useEffect} from 'react'
import { data } from '../data'

export const TaskContext = createContext();

export function TaskContextProvider(props){
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
    <TaskContext.Provider value={{tasks,createTask,deleteTask}}>
        {props.children}
    </TaskContext.Provider>
    )
}
