import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
import { VotingResult } from 'src/app/model/VotingResult.model'
import { RootState } from 'src/app/store'

export const getCurrentDayVotes = createAsyncThunk<
  VotingResult,
  void,
  {
    state: RootState
  }
>('vote/getCurrentDayVotes', async (_unused, thunkAPI) => {
  return axios
    .get(`http://localhost:8080/api/v1/results`)
    .then(apiResponse => {
      return apiResponse.data as VotingResult
    })
    .catch(error => {
      const castedError = error as Error | AxiosError
      return thunkAPI.rejectWithValue({ error: castedError.message })
    })
})
