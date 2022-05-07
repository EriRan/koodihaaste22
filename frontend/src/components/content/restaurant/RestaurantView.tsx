import { Box } from '@mui/material'
import { useAppSelector } from 'src/app/hooks'
import { selectRestaurantResponse } from 'src/app/state/restaurant/restaurantSlice'

export function RestaurantView() {
  const restaurantResponse = useAppSelector(selectRestaurantResponse)

  const restaurantsJsx = restaurantResponse?.restaurants.map(restaurant => {
    return (
      <div id={`restaurant-${restaurant.id}`}>
        <p>Name: {restaurant.name}</p>
        <p>Opening hours: {restaurant.openingHours}</p>
        <p>Votes: {restaurant.votes}</p>
      </div>
    )
  })
  return <Box>{restaurantsJsx}</Box>
}
