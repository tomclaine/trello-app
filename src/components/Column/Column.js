import React from "react"
import './Column.scss'
import Task from "components/Task/Task"

function Column(){
    return( 
        <div className='column'>
            <div className='header'>
                Title
            </div>
            <ul className="task-list">
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                {/* <li className="task-item">todo2</li>
                <li className="task-item">todo3</li>
                <li className="task-item">todo4</li>
                <li className="task-item">todo5</li>
                <li className="task-item">todo1</li>
                <li className="task-item">todo2</li>
                <li className="task-item">todo3</li>
                <li className="task-item">todo4</li>
                <li className="task-item">todo5</li>
                <li className="task-item">todo1</li>
                <li className="task-item">todo2</li>
                <li className="task-item">todo3</li>
                <li className="task-item">todo4</li>
                <li className="task-item">todo5</li> */}
            </ul>
            <div className='footer'>
                Add new todo
            </div>
        </div> 
    )
}

export default Column