import React from 'react'

const TodoList = ({item , index}) => {
  return (
    <li className='p-2 m-0.5 bg-white' key={index}> {item}</li>
  )
}

export default TodoList
