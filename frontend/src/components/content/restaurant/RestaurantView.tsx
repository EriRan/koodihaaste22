import { Box, Card, CardContent, Typography } from '@mui/material'
import { useAppSelector } from 'src/app/hooks'
import { selectRestaurantResponse } from 'src/app/state/restaurant/restaurantSlice'
import { OpeningHoursGrid } from './OpeningHoursGrid'

export function RestaurantView() {
  const restaurantResponse = useAppSelector(selectRestaurantResponse)

  const restaurantsJsx = restaurantResponse?.restaurants.map(restaurant => {
    return (
      <Card id={`restaurant-${restaurant.id}`}>
        <CardContent>
          <Typography variant="h4" id={`restaurant-${restaurant.id}-name`}>
            {restaurant.name}
          </Typography>
          <OpeningHoursGrid openingHours={restaurant.openingHours} />
          <Typography>Ääniä: {restaurant.votes}</Typography>
        </CardContent>
      </Card>
    )
  })
  if (!restaurantsJsx) {
    return <div />
  }
  if (!restaurantsJsx || restaurantsJsx.length === 0) {
    return (
      <Box>
        <Typography variant="h3">Ei tuloksia</Typography>
      </Box>
    )
  }
  return (
    <Box>
      <Typography variant="h3">Tulokset</Typography>
      {restaurantsJsx}
    </Box>
  )
}
