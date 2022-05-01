import { Dish } from './Dish.model'

export type Restaurant = {
  id: string
  name: string
  openingHours: string
  votes: number
  dishes: Dish[]
}
