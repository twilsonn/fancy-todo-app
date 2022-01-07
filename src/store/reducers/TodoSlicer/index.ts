import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '../../index'
import initialState, { Todo, TodoState } from './types'

const addTodoAction: CaseReducer<TodoState, PayloadAction<Todo>> = (
  state,
  action
) => {
  return { ...state, value: [...state.value, action.payload] }
}

const deleteTodoAction: CaseReducer<TodoState, PayloadAction<string[]>> = (
  state,
  action
) => {
  return {
    ...state,
    value: [...state.value.filter((t) => !action.payload.includes(t.id))]
  }
}

const filterTodosAction: CaseReducer<TodoState, PayloadAction<string>> = (
  state,
  action
) => {
  if (state.filter === action.payload) {
    return {
      ...state,
      filter: '',
      value: [
        ...state.value.map((t) => {
          return { ...t, active: true }
        })
      ]
    }
  }

  return {
    ...state,
    filter: action.payload,
    value: [
      ...state.value.map((t) =>
        t.tags.includes(action.payload) ? t : { ...t, active: false }
      )
    ]
  }
}

const toggleLockAction: CaseReducer<TodoState> = (
  state
) => {
  return {
    ...state,
    locked: !state.locked
  }
}

export const TodoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: addTodoAction,
    deleteTodo: deleteTodoAction,
    filterTodos: filterTodosAction,
    toggleLock: toggleLockAction
  }
})

export const { addTodo, deleteTodo, filterTodos, toggleLock } = TodoSlice.actions

export const selectTodo = (state: RootState) => state.present.value

export default TodoSlice.reducer
