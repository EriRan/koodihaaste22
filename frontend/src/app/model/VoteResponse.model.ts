import { RestaurantVoteResult } from './RestaurantVoteResult.model'

export type VoteResponse = {
  date: string
  results: RestaurantVoteResult[]
}
