import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'src/app/hooks'
import { selectVoteResult } from 'src/app/state/vote/voteSlice'
import { getCurrentDayVotes } from 'src/app/state/vote/voteThunk'

export function VotesContent() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCurrentDayVotes())
  }, [dispatch])

  const voteResult = useAppSelector(selectVoteResult)

  if (!voteResult) {
    return <div>No votes</div>
  }

  const votingResultsJsx = voteResult.results.map(restaurantVote => {
    return (
      <div>
        <p>City: {restaurantVote.city}</p>
        <p>RestaurantId: {restaurantVote.restaurantid}</p>
        <p>Name: {restaurantVote.name}</p>
        <p>Votes: {restaurantVote.votes}</p>
      </div>
    )
  })
  return (
    <div>
      <p>Date: {voteResult.date}</p>
      {votingResultsJsx}
    </div>
  )
}
