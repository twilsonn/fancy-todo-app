type Todo = {
  id: string
  title: string
  details: string
  tags?: string[]
}

export type { Todo }

export const ADD_TODO = 'ADD_TODO'
export type ADD_TODO = typeof ADD_TODO

export const UPDATE_TODO = 'UPDATE_TODO'
export type UPDATE_TODO = typeof UPDATE_TODO

export const DELETE_TODO = 'DELETE_TODO'
export type DELETE_TODO = typeof DELETE_TODO

export const CHANGE_THEME = 'CHANGE_THEME'
export type CHANGE_THEME = typeof CHANGE_THEME
