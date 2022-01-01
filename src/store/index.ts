import { configureStore } from '@reduxjs/toolkit'

import todosReducer from './reducers/TodoSlicer'
import undoable from 'redux-undo'

// const filter = get(todoListFilterState)
// const list = get(todoListState)
// return filter
//   ? list.filter((t) => t.tags.includes(filter) && t.active)
//   : list.filter((t) => t.active)

const store = configureStore({
  reducer: {
    todos: undoable(todosReducer)
  }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
