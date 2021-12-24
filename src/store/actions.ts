import * as types from './types'

export interface IAddTodo {
  type: types.ADD_TODO
  payload: types.Todo
}

export interface IUpdateTodo {
  type: types.UPDATE_TODO
  payload: types.Todo[]
}

export interface IDeleteTodo {
  type: types.DELETE_TODO
  payload: string
}

export const addTodo = (payload: types.Todo): IAddTodo => ({
  type: types.ADD_TODO,
  payload
})

export const updateTodo = (payload: types.Todo[]): IUpdateTodo => ({
  payload,
  type: types.UPDATE_TODO
})

export const apiError = (payload: string): IDeleteTodo => ({
  payload,
  type: types.DELETE_TODO
})

export type TAction = IAddTodo | IDeleteTodo | IUpdateTodo
