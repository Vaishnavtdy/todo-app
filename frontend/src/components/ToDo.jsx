import React from 'react'
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'
import { BsFillCheckCircleFill } from 'react-icons/bs'

const ToDo = ({text, status, updateMode, deleteToDo, completeTodo}) => {
  return (
    <div className="todo">
        <div className="text" style={{textDecoration: status ? `line-through`: 'none'}}>{text}</div>
        <div className="icons">
            <BsFillCheckCircleFill  className='icon' onClick={completeTodo} fill={status ? 'green' : 'white'} />
            <BiEdit className="icon" onClick={updateMode} />
            <AiFillDelete className='icon' onClick={deleteToDo} />
        </div>
    </div>
  )
}

export default ToDo