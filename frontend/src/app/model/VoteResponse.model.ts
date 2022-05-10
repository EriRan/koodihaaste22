import { RestaurantVotes } from './RestaurantVotes.model'

export type VoteResponse = {
  date: string
  results: RestaurantVotes[]
}
