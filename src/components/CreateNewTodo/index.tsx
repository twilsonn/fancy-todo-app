import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { v4 } from 'uuid'

import { newTodoState, todoListState } from 'store'

import { Input, Textarea } from 'components/Forms'
import Modal from 'components/Model'
import Tags from './Tags'

const CreateNewTodo: React.FC = () => {
  const [todos, setTodos] = useRecoilState(todoListState)
  const [todo, setTodo] = useRecoilState(newTodoState)
  const [active, setActive] = useState(false)

  const toggleActive = () => {
    setTodo({ id: v4(), title: '', details: '', tags: [] })
    setActive(!active)
  }

  const createNewTodo = () => {
    setTodos([...todos, todo])
    toggleActive()
  }

  return (
    <div>
      <Modal active={active} toggleActive={toggleActive}>
        <h4 className="mt-0">Create New Todo</h4>

        <div className="flex flex-col items-end mt-4 space-y-4">
          <div className="w-full">
            <Input
              title="title"
              value={todo.title}
              changeValue={(e) => setTodo({ ...todo, title: e.target.value })}
            />
          </div>

          <div className="w-full">
            <Textarea
              title="details"
              value={todo.details}
              changeValue={(e) => setTodo({ ...todo, details: e.target.value })}
            />
          </div>

          <Tags />

          <button
            type="button"
            onClick={createNewTodo}
            className="py-2 px-6 font-semibold text-white rounded-lg shadow-md bg-fuchsia-500 shadow-fuchsia-200 hover:bg-fuchsia-600"
          >
            Create Todo
          </button>
        </div>
      </Modal>

      <button
        type="button"
        onClick={toggleActive}
        className="py-2 px-6 font-semibold text-white rounded-lg shadow-md bg-fuchsia-500 shadow-fuchsia-200 hover:bg-fuchsia-600"
      >
        New Todo
      </button>
    </div>
  )
}

export default CreateNewTodo
