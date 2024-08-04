import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slice/counter/CounterSlice'

export const store = configureStore({
  reducer: {
    counter:counterSlice.reducer
  }
})
