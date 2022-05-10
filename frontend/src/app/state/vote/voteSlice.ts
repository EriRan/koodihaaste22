import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { VotingResult } from 'src/app/model/VotingResult.model'
import { getCurrentDayVotes } from './voteThunk'

interface VoteState {
  archiveDateQuery?: string
  votingResult?: VotingResult
  archiveVotingResult?: VotingResult
}

const initialState: VoteState = {
  archiveDateQuery: undefined,
  votingResult: undefined,
  archiveVotingResult: undefined,
}

// Slice
export const voteSlice = createSlice({
  name: 'vote',
  initialState,
  reducers: {
    changeArchiveDataQuery: (state, action: PayloadAction<string>) => {
      state.archiveDateQuery = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(getCurrentDayVotes.fulfilled, (state, action) => {
      state.votingResult = action.payload
    })
  },
})

export default voteSlice.reducer
