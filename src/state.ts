import { createContext } from 'react'
import { v4 as uuidv4 } from 'uuid'

type Todo = {
  id: string
  title: string
  details: string
  tags?: string[]
}

type setTodos = (t: Todo | null) => void

type State = {
  todos: Todo[]
  setTodos: setTodos
}

const AppContext = createContext<State>({
  todos: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTodos: () => {}
})

const defaultState: State = {
  todos: [
    {
      id: uuidv4(),
      title: 'Make waffles',
      details: 'Make waffles on monday morning!',
      tags: ['food']
    }
  ]
}

export default AppContext
export { defaultState }
export type { State, Todo }
