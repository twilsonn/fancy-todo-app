import Context from 'context'
import React, { useContext } from 'react'

const Todo: React.FC<unknown> = () => {
  const { state, dispatch } = useContext(Context)

  return (
    <div>
      <div className="flex justify-between">
        <div>Todos: {state.todos?.length}</div>
        <div></div>
      </div>
      <div>
        {state.todos?.map(({ id, title, details, tags }) => {
          return <div key={id}>{title}</div>
        })}
      </div>
    </div>
  )
}

export default Todo
