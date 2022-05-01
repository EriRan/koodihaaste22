/*
 * Slice of restaurant state
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RestaurantResponse } from '../model/RestaurantResponse.model'
import { RootState } from '../store'
import { getRestaurantResponse } from './restaurantThunk'

interface RestaurantState {
  citySearchQuery?: string
  restaurantResponse?: RestaurantResponse
}

// Initially undefined. Will be loaded once the first API call is succesful
const initialState: RestaurantState = {
  citySearchQuery: undefined,
  restaurantResponse: undefined,
}

// Slice
export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    changeSearchQuery: (state, action: PayloadAction<string>) => {
      state.citySearchQuery = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(getRestaurantResponse.fulfilled, (state, action) => {
      state.restaurantResponse = action.payload
    })
  },
})

export const { changeSearchQuery } = restaurantSlice.actions

export const selectRestaurantResponse = (state: RootState) =>
  state.restaurant.restaurantResponse

export const selectCitySearchQuery = (state: RootState) =>
  state.restaurant.citySearchQuery

export default restaurantSlice.reducer
