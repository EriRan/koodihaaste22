import { RestaurantVotes } from './RestaurantVotes.model'

export type VoteResult = {
  date: string
  results: RestaurantVotes[]
}
