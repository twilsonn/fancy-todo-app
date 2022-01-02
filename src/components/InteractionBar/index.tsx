import { useAppSelector } from 'hooks'
import React from 'react'

const InteractionBar: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.present)
  return (
    <div className="flex justify-between">
      <div># of Todos: {todos.value.length}</div>
      <div>
        {todos.filter && (
          <span className="inline-flex items-center py-2.5 px-3 mt-2 mr-1 text-sm font-medium rounded-full text-slate-700 bg-slate-200">
            {todos.filter}
          </span>
        )}
      </div>
    </div>
  )
}

export default InteractionBar
