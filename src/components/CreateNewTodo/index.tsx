import React, { useState } from 'react'

import { useAppDispatch } from 'hooks'
import { AppDispatch } from 'store'
import { addTodo, blankTodo, Todo } from 'store/reducers/TodoSlicer'

import Modal from 'components/Model'
import { Input, Textarea } from 'components/Forms'
import Tags from './Tags'

export type TagFunction = (name: string) => void

const CreateNewTodo: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()

  const [todo, setTodo] = useState<Todo>(blankTodo())
  const [active, setActive] = useState(false)

  const toggleActive = () => {
    setTodo(blankTodo())
    setActive(!active)
  }

  const createNewTodo = () => {
    dispatch(addTodo(todo))
    toggleActive()
  }

  const addTag = (name: string) => {
    const newTags = new Set([...todo.tags, name])
    setTodo({ ...todo, tags: [...newTags] })
  }

  const removeTag = (name: string) => {
    setTodo({ ...todo, tags: [...todo.tags.filter((tag) => tag === name)] })
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

          <Tags tags={todo.tags} addTag={addTag} removeTag={removeTag} />

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
