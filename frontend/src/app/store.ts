// Redux store

import { configureStore } from '@reduxjs/toolkit'
import restaurantSlice from './state/restaurant/restaurantSlice'
import voteSlice from './state/vote/voteSlice'

export const store = configureStore({
  reducer: {
    restaurant: restaurantSlice,
    vote: voteSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
