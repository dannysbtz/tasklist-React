import {createContext} from 'react'

export function TaskContextProvider(props){

const TaskContext = createContext();
let nombre = 1;

    return(
    <TaskContext.Provider value={nombre}>
        {props.children}
    </TaskContext.Provider>
    )
}
