import React, { useState, MouseEvent, useRef, KeyboardEvent } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import useKeypress from 'react-use-keypress'

import {
  Todo,
  filteredTodoListState,
  todoListFilterState,
  todoListState
} from 'store'
import Container from 'components/Container'

const TodoList: React.FC = () => {
  const filteredTodos = useRecoilValue(filteredTodoListState)
  const [todos, setTodos] = useRecoilState(todoListState)
  const [filter, setFilter] = useRecoilState(todoListFilterState)

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
      setTodos([...todos.filter((t) => !selected.some((s) => t.id === s.id))])
    }
  })

  const tagRef = useRef<HTMLSpanElement>(null)

  return (
    <div>
      <div className="grid grid-cols-3 gap-6 mt-6">
        {filteredTodos.map((todo) => {
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
                      onClick={() =>
                        filter === tag ? setFilter('') : setFilter(tag)
                      }
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
