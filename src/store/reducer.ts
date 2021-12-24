import { TAction } from './actions'
import { IState } from './initialState'
import * as types from './types'

const reducer = (state: IState, action: TAction): IState => {
  const { type, payload } = action

  switch (type) {
    case types.ADD_TODO:
      return { ...state, todos: [...state.todos, payload] }
    case types.UPDATE_TODO:
      return { ...state, todos: payload }
    case types.DELETE_TODO:
      return { ...state, todos: state.todos.filter(({ id }) => id !== payload) }
    default:
      return state
  }
}

export default reducer
