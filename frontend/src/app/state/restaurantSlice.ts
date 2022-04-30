/*
 * Slice of restaurant state
 */

import { createSlice } from '@reduxjs/toolkit'
import { RestaurantResponse } from '../model/restaurantResponse.model'

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
  reducers: {},
})
