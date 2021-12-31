import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 } from 'uuid'

import type { RootState } from '../../index'

type Todo = {
  id: string
  title: string
  details: string
  tags: string[]
  active: boolean
}

interface TodoState {
  value: Todo[]
}

const initialState: TodoState = {
  value: [
    {
      id: v4(),
      title: 'Water my plants 💦',
      details: "The cactus' and snake plant needs watering on sunday morning!",
      tags: ['plants', 'house'],
      active: true
    },
    {
      id: v4(),
      title: 'Pick up package from store',
      details: 'The store is open until 6pm',
      tags: ['travel', 'shopping'],
      active: true
    },
    {
      id: v4(),
      title: 'Order some new headphones 🎶',
      details: 'Look online for open ear headphones!',
      tags: ['shopping', 'online'],
      active: true
    },
    {
      id: v4(),
      title: 'Play Elder scrolls online 🤺',
      details: "don't take an arrow to the knee",
      tags: ['online', 'gaming'],
      active: true
    },
    {
      id: v4(),
      title: 'Contribute to open source development!',
      details:
        'Try to get involved in open source dev. Start with the small tasks.',
      tags: ['online', 'coding'],
      active: true
    }
  ]
}

export const TodoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.value = [...state.value, action.payload]
    },
    deleteTodo: (state, action: PayloadAction<string[]>) => {
      state.value = [
        ...state.value.filter((t) => !action.payload.includes(t.id))
      ]
    }
  }
})

export const blankTodo: () => Todo = () => {
  return {
    id: v4(),
    title: '',
    details: '',
    tags: [],
    active: true
  }
}

export type { Todo }

export const { addTodo, deleteTodo } = TodoSlice.actions

export const selectTodo = (state: RootState) => state.todos.value

export default TodoSlice.reducer
