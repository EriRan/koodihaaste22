import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material'
import { useAppSelector } from 'src/app/hooks'
import { selectRestaurantResponse } from 'src/app/state/restaurant/restaurantSlice'
import { OpeningHoursGrid } from './OpeningHoursGrid'

export function RestaurantView() {
  const restaurantResponse = useAppSelector(selectRestaurantResponse)

  const restaurantsJsx = restaurantResponse?.restaurants.map(restaurant => {
    return (
      <Card id={`restaurant-${restaurant.id}`}>
        <CardContent>
          <Grid container columns={12}>
            <Grid xs={10}>
              <Typography variant="h4" id={`restaurant-${restaurant.id}-name`}>
                {restaurant.name}
              </Typography>
              <OpeningHoursGrid
                id={`restaurant-${restaurant.id}-votes`}
                openingHours={restaurant.openingHours}
              />
              <Typography id={`restaurant-${restaurant.id}-votes`}>
                Ääniä: {restaurant.votes}
              </Typography>
            </Grid>
            <Button variant="contained">VOTE</Button>
          </Grid>
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
