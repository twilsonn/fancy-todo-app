import { createStore } from '@reduxjs/toolkit'

import todosReducer from './reducers/TodoSlicer'
import undoable from 'redux-undo'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'todos',
  storage,
}

const persistedReducer = persistReducer(persistConfig, undoable(todosReducer))

const store = createStore(persistedReducer)

const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default () => {
  return {store, persistor}
}
