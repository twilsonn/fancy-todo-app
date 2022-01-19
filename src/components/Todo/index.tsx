import React, { useState, MouseEvent, KeyboardEvent } from 'react'
import GridLayout from 'react-grid-layout'
import useKeypress from 'react-use-keypress'

import { useAppDispatch, useAppSelector, useEventListener } from '../../hooks'
import { deleteTodo, filterTodos } from 'store/reducers/TodoSlicer'
import { Todo } from 'store/reducers/TodoSlicer/types'

import Container from 'components/Container'
import { AppDispatch } from 'store'
import { ActionCreators } from 'redux-undo'

const TodoList: React.FC = () => {
  const todos = useAppSelector((state) => state.present.value)
  const locked = useAppSelector((state) => state.present.locked)

  const dispatch: AppDispatch = useAppDispatch()

  const layout = todos
    .filter((t) => t.active)
    .map((t, i) => {
      return {
        i: t.id,
        x: i % 3,
        y: Math.floor(i / 3),
        w: 1,
        h: 1
      }
    })

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

  useEventListener('mousedown', (e: Event) =>
    (e.target as HTMLElement).getAttribute('data-value')?.includes('todo')
      ? void {}
      : setSelected([])
  )

  useKeypress(['x', 'Backspace', 'Delete'], () => {
    if (selected.length > 0) {
      dispatch(deleteTodo(selected.map((t) => t.id)))
    }
  })

  useKeypress(['z', 'y'], (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === 'z' && (e.ctrlKey || e.metaKey)) {
      dispatch(ActionCreators.undo())
    }

    if (e.key === 'y' && (e.ctrlKey || e.metaKey)) {
      dispatch(ActionCreators.redo())
    }
  })

  return (
    <GridLayout
      className="layout mt-3"
      containerPadding={[0, 0]}
      margin={[12, 12]}
      layout={layout}
      cols={3}
      rowHeight={256}
      width={896}
      compactType="horizontal"
      isResizable={false}
      isBounded={true}
      isDraggable={!locked}
    >
      {todos.map((todo) => {
        const { id, title, details, tags } = todo
        return todo.active ? (
          <div key={id}>
            <Container
              onClick={(e) => toggleSelected(e, todo)}
              dataValue={
                selected.some((t) => t.id === id) ? 'todo selected' : 'todo'
              }
              ClassName={`prose flex flex-col h-64 cursor-pointer select-none ${
                selected.some((t) => t.id === id)
                  ? 'ring-fuchsia-500 ring-2'
                  : ''
              }`}
            >
              <div className="pointer-events-none">
                <h3 className="mt-0">{title}</h3>
                <p>{details}</p>
              </div>
              <div className="flex justify-end items-end space-x-2 h-full">
                {tags.map((tag) => {
                  return (
                    <span
                      key={tag}
                      data-value="tag"
                      onClick={() => dispatch(filterTodos(tag))}
                      className="py-2 px-3 text-sm font-semibold rounded-full cursor-pointer bg-slate-200 hover:bg-slate-300"
                    >
                      {tag}
                    </span>
                  )
                })}
              </div>
            </Container>
          </div>
        ) : null
      })}
    </GridLayout>
  )
}

export default TodoList
