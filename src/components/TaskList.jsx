import { Task } from "./Task"
import { useContext } from "react"
import {TaskContext} from '../context/TaskContext'

export function TaskList() {

    const {tasks} = useContext(TaskContext);

    return (
        <div>
            {tasks.map((task, i) =>(
                <div className='tasks' key={i}>
                    <Task task={task}/>
                </div>
            ))}
        </div>
    )
}