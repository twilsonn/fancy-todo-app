import React, { useContext, useState } from 'react'
import { v4 } from 'uuid'
import Context from 'context'

import { Input, Textarea } from 'components/Forms'
import Modal from 'components/Model'
import Tags from './Tags'

const CreateNewTodo: React.FC = () => {
  const { dispatch } = useContext(Context)

  const [active, setActive] = useState(false)

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [tags, setTags] = useState<string[]>([])

  const toggleActive = () => {
    setTitle('')
    setDetails('')
    setTags([])
    setActive(!active)
  }

  const createNewTodo = () => {
    dispatch({ type: 'ADD_TODO', payload: { id: v4(), title, details, tags } })
    toggleActive()
  }

  const addNewTag = (tag: string) => {
    setTags([...tags, tag])
  }

  return (
    <div>
      <Modal active={active} toggleActive={toggleActive}>
        <h4 className="mt-0">Create New Todo</h4>

        <div className="flex flex-col items-end mt-4 space-y-4">
          <div className="w-full">
            <Input
              title="title"
              value={title}
              changeValue={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="w-full">
            <Textarea
              title="details"
              value={details}
              changeValue={(e) => setDetails(e.target.value)}
            />
          </div>

          <Tags tags={tags} addNewTag={addNewTag} />

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
