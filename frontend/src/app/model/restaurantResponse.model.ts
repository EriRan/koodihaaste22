import { Restaurant } from './Restaurant.model'

export type RestaurantResponse = {
  alreadyVoted?: string
  date: string
  restaurants: Restaurant[]
}
