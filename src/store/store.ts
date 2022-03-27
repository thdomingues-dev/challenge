// Packages
import { configureStore } from '@reduxjs/toolkit'
import { booksApi } from '../services/books-api'

export const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(booksApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
