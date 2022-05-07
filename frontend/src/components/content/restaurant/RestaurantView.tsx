import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import { useAppSelector } from 'src/app/hooks'
import { selectRestaurantResponse } from 'src/app/state/restaurant/restaurantSlice'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

export function RestaurantView() {
  const restaurantResponse = useAppSelector(selectRestaurantResponse)

  const restaurantsJsx = restaurantResponse?.restaurants.map(restaurant => {
    return (
      <Card id={`restaurant-${restaurant.id}`}>
        <CardContent>
          <Typography variant="h4" id={`restaurant-${restaurant.id}-name`}>
            {restaurant.name}
          </Typography>
          <Grid container>
            <AccessTimeIcon />
            <Typography>{restaurant.openingHours.trim()}</Typography>
          </Grid>
          <Typography>Votes: {restaurant.votes}</Typography>
        </CardContent>
      </Card>
    )
  })
  return <Box>{restaurantsJsx}</Box>
}
