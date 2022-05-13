import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
import { VoteResponse } from 'src/app/model/VoteResponse.model'
import { RootState } from 'src/app/store'

export const getCurrentDayVotes = createAsyncThunk<
  VoteResponse,
  void,
  {
    state: RootState
  }
>('vote/getCurrentDayVotes', async (_unused, thunkAPI) => {
  return axios
    .get(`http://localhost:8080/api/v1/results`, {
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:8080',
        'Access-Control-Allow-Credentials': true,
      },
    })
    .then(apiResponse => {
      return apiResponse.data as VoteResponse
    })
    .catch(error => {
      const castedError = error as Error | AxiosError
      return thunkAPI.rejectWithValue({ error: castedError.message })
    })
})

export const postVote = createAsyncThunk<
  void,
  string,
  {
    state: RootState
  }
>('vote/postVote', async (restaurantId: string, thunkAPI) => {
  // TODO: Attach voter cookie here
  return axios
    .post(`http://localhost:8080/api/v1/vote/${restaurantId}`, undefined, {
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:8080',
        'Access-Control-Allow-Credentials': true,
      },
    })
    .then(apiResponse => {
      console.log(apiResponse.status)
    })
    .catch(error => {
      const castedError = error as Error | AxiosError
      return thunkAPI.rejectWithValue({ error: castedError.message })
    })
})
