import { configureStore } from '@reduxjs/toolkit'
import foodiesSlice from '@/store/slices/foodiesSlice/foodiesSlice'


export const store = configureStore({
  reducer: {
    food: foodiesSlice
  },
})

// Типи для використання з TypeScript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
