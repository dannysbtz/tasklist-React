import { useContext } from "react";
// import { TaskContext } from "../context/TaskContext";

// const value = useContext(TaskContext);
// console.log(value)

export function Task({task , deleteTask}){
    return(
        <>
        <h3>ID: {task.id}</h3>
        <h3>Title: {task.title}</h3>
        <h3>Nombre: {task.name}</h3>
        <h3>Descripccion: {task.description}</h3>
        <button className='eliminar' onClick={() => deleteTask(task.id)}>Eliminar</button>
        </>
    )
}