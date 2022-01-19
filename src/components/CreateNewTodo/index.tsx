import React, { useState, KeyboardEvent } from 'react'
import useKeypress from 'react-use-keypress'

import { useAppDispatch } from 'hooks'
import { AppDispatch } from 'store'
import { addTodo, toggleLock } from 'store/reducers/TodoSlicer'

import Modal from 'components/Model'
import { Input, Textarea } from 'components/Forms'
import Tags from './Tags'
import { blankTodo, Todo } from 'store/reducers/TodoSlicer/types'

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

  useKeypress(['b', 'q'], (e: KeyboardEvent<HTMLElement>) => {
    // e.preventDefault()
    if (e.key === 'b' && (e.ctrlKey || e.metaKey)) {
      setActive(!active)
    }

    if (e.key === 'q' && (e.ctrlKey || e.metaKey)) {
      dispatch(toggleLock())
    }
  })

  return (
    <div>
      <Modal active={active} toggleActive={toggleActive} className="w-96">
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
        className="inline-flex justify-center w-full rounded-md border border-fuchsia-500 text-sm font-medium focus:outline-none px-4 py-2 text-white shadow-sm bg-fuchsia-500 shadow-fuchsia-200 hover:bg-fuchsia-600"
      >
        New Todo
      </button>
    </div>
  )
}

export default CreateNewTodo
