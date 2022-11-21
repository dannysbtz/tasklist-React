import { useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

export function TaskForm(){
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
    const [nombre,setNombre]=useState('')
    const {createTask} = useContext(TaskContext)
    const submit =(e) =>{
        e.preventDefault();
        createTask(title,description,nombre);
        setTitle('');
        setDescription('');
        setNombre('');
    }
    return(
        <form onSubmit={submit}>
            <input type="text" name='title' placeholder='Tarea' onChange={(e) => setTitle(e.target.value)} value={title}/>
            <input type="text" name='description' placeholder='Descripcion' onChange={(e) => setDescription(e.target.value)} value={description}/>
            <input type="text" name='name' placeholder='Name' onChange={(e) => setNombre(e.target.value)} value={nombre}/>
            <button>Guardar</button>
        </form>
    )
}