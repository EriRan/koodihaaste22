// Redux store

import { configureStore } from '@reduxjs/toolkit'
import restaurantSlice from './state/restaurant/restaurantSlice'

export const store = configureStore({
  reducer: {
    restaurant: restaurantSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
