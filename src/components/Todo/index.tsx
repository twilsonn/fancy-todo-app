import React, { useContext } from 'react'
import AppContext from 'state'
import { v4 as uuidv4 } from 'uuid'

const Todo: React.FC<unknown> = () => {
  console.log(uuidv4())
  const { todos } = useContext(AppContext)

  return (
    <div>
      <div className="flex justify-between">
        <div>Todos: {todos?.length}</div>
        <div></div>
      </div>
      <div>
        {todos?.map(({ id, title, details, tags }) => {
          return <div key={id}>{title}</div>
        })}
      </div>
    </div>
  )
}

export default Todo
