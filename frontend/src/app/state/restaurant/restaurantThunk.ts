/*
 * Restaurant related API calls made with thunks
 */
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
import { RestaurantResponse } from 'src/app/model/RestaurantResponse.model'
import { RootState } from 'src/app/store'

export const getRestaurantResponse = createAsyncThunk<
  RestaurantResponse | undefined,
  void,
  {
    state: RootState
  }
>('restaurant/getRestaurantResponse', async (_unused, thunkAPI) => {
  const { citySearchQuery } = thunkAPI.getState().restaurant
  if (!citySearchQuery) {
    return undefined
  }
  // Todo: separate API class?
  return axios
    .get(`http://localhost:8080/api/v1/restaurants/${citySearchQuery}`)
    .then(apiResponse => {
      // TODO: Get the voter id cookie here and set it to browser
      return apiResponse.data as RestaurantResponse
    })
    .catch(error => {
      const castedError = error as Error | AxiosError
      return thunkAPI.rejectWithValue({ error: castedError.message })
    })
})
