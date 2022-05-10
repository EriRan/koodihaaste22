import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
import { VoteResult } from 'src/app/model/VoteResult.model'
import { RootState } from 'src/app/store'

export const getCurrentDayVotes = createAsyncThunk<
  VoteResult,
  void,
  {
    state: RootState
  }
>('vote/getCurrentDayVotes', async (_unused, thunkAPI) => {
  return axios
    .get(`http://localhost:8080/api/v1/results`)
    .then(apiResponse => {
      return apiResponse.data as VoteResult
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
    .post(`http://localhost:8080/api/v1/vote/${restaurantId}`)
    .then(apiResponse => {
      console.log(apiResponse.status)
    })
    .catch(error => {
      const castedError = error as Error | AxiosError
      return thunkAPI.rejectWithValue({ error: castedError.message })
    })
})
