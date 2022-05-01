import { RestaurantVotes } from './RestaurantVotes.model'

export type VotingResult = {
  date: string
  results: RestaurantVotes[]
}
