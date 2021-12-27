import React from 'react'
import { useRecoilState } from 'recoil'
import { newTodoState } from 'store'

const Tag: React.FC<{ name: string }> = ({ name }) => {
  const [todo, setTodo] = useRecoilState(newTodoState)

  const removeTag = () => {
    setTodo({ ...todo, tags: todo.tags.filter((t) => t !== name) })
  }

  return (
    <span className="inline-flex items-center py-2.5 pr-2 pl-3 mt-2 mr-1 text-sm font-medium rounded-full text-slate-700 bg-slate-100">
      {name}
      <button
        type="button"
        onClick={removeTag}
        className="inline-flex flex-shrink-0 justify-center items-center ml-0.5 w-4 h-4 focus:text-white rounded-full focus:outline-none hover:bg-slate-200 focus:bg-slate-500 text-slate-400 hover:text-slate-500"
      >
        <span className="sr-only">Remove large option</span>
        <svg
          className="w-2 h-2"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 8 8"
        >
          <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
        </svg>
      </button>
    </span>
  )
}

export default Tag
