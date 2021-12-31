import React, { useState, MouseEvent, useRef } from 'react'
import useKeypress from 'react-use-keypress'

import { useAppDispatch, useAppSelector } from '../../hooks'
import { deleteTodo, Todo } from 'store/reducers/TodoSlicer'

import Container from 'components/Container'
import { AppDispatch } from 'store'

const TodoList: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.value)
  const dispatch: AppDispatch = useAppDispatch()

  const [selected, setSelected] = useState<Todo[] | []>([])

  const toggleSelected = (e: MouseEvent, todo: Todo) => {
    if ((e.target as HTMLElement).getAttribute('data-value') === 'tag') {
      return
    }
    if (selected.some((t) => t.id === todo.id)) {
      e.ctrlKey
        ? setSelected(selected.filter((t) => t.id !== todo.id))
        : setSelected([])
    } else {
      e.ctrlKey ? setSelected([...selected, todo]) : setSelected([todo])
    }
  }

  useKeypress(['x', 'Backspace', 'Delete'], () => {
    if (selected.length > 0) {
      dispatch(deleteTodo(selected.map((t) => t.id)))
    }
  })

  const tagRef = useRef<HTMLSpanElement>(null)

  return (
    <div>
      <div className="grid grid-cols-3 gap-6 mt-6">
        {todos.map((todo) => {
          const { id, title, details, tags } = todo
          return (
            <Container
              key={id}
              onClick={(e) => toggleSelected(e, todo)}
              ClassName={`prose flex flex-col h-64 cursor-pointer select-none ${
                selected.some((t) => t.id === id)
                  ? 'ring-fuchsia-500 ring-2'
                  : ''
              }`}
            >
              <div>
                <h3 className="mt-0">{title}</h3>
                <p>{details}</p>
              </div>
              <div className="flex justify-end items-end space-x-2 h-full">
                {tags.map((tag) => {
                  return (
                    <span
                      key={tag}
                      ref={tagRef}
                      data-value="tag"
                      className="py-2 px-3 text-sm font-semibold rounded-full cursor-pointer bg-slate-200 hover:bg-slate-300"
                    >
                      {tag}
                    </span>
                  )
                })}
              </div>
            </Container>
          )
        })}
      </div>
    </div>
  )
}

export default TodoList
