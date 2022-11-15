import { Task } from "./Task"

export function TaskList({tasks,deleteTask}) {


    return (
        <div>
            {tasks.map((task, i) =>(
                <div className='tasks' key={i}>
                    <Task task={task} deleteTask={deleteTask}/>
                </div>
            ))}
        </div>
    )
}