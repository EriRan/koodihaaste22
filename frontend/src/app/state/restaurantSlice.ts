/*
 * Slice of restaurant state
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RestaurantResponse } from '../model/restaurantResponse.model'
import { RootState } from '../store'

interface RestaurantState {
  restaurantResponse?: RestaurantResponse
}

// Initially undefined. Will be loaded once the first API call is succesful
const initialState: RestaurantState = {
  restaurantResponse: undefined,
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    loadData: (state, action: PayloadAction<RestaurantResponse>) => {
      state.restaurantResponse = action.payload
    },
  },
})

export const { loadData } = restaurantSlice.actions

export const selectRestaurantResponse = (state: RootState) =>
  state.restaurant.restaurantResponse

export default restaurantSlice.reducer
