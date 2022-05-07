import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import { useAppSelector } from 'src/app/hooks'
import { selectRestaurantResponse } from 'src/app/state/restaurant/restaurantSlice'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

export function RestaurantView() {
  const restaurantResponse = useAppSelector(selectRestaurantResponse)

  const formatOpeningHours = (openingHours: string) => {
    const trimmedString = openingHours.trim()
    return trimmedString.length > 0 ? trimmedString : 'Kiinni'
  }

  const restaurantsJsx = restaurantResponse?.restaurants.map(restaurant => {
    return (
      <Card id={`restaurant-${restaurant.id}`}>
        <CardContent>
          <Typography variant="h4" id={`restaurant-${restaurant.id}-name`}>
            {restaurant.name}
          </Typography>
          <Grid container>
            <AccessTimeIcon />
            <Typography>
              {formatOpeningHours(restaurant.openingHours)}
            </Typography>
          </Grid>
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
