/*
 * Restaurant related API calls made with thunks
 */
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
import { RestaurantResponse } from '../model/restaurantResponse.model'

export const getRestaurantResponse = createAsyncThunk(
  'restaurant/getRestaurantResponse',
  async (city: string, thunkAPI) => {
    // Todo: separate API class?
    return axios
      .get(`http://localhost:8080/api/v1/restaurants/${city}`)
      .then(apiResponse => {
        return apiResponse.data as RestaurantResponse
      })
      .catch(error => {
        const castedError = error as Error | AxiosError
        return thunkAPI.rejectWithValue({ error: castedError.message })
      })
  },
)
