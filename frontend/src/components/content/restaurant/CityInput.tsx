import { Grid, IconButton, TextField } from '@mui/material'
import { useAppDispatch } from 'src/app/hooks'
import { changeSearchQuery } from 'src/app/state/restaurant/restaurantSlice'
import { getRestaurantResponse } from 'src/app/state/restaurant/restaurantThunk'
import SearchIcon from '@mui/icons-material/Search'

export function CityInput() {
  const dispatch = useAppDispatch()

  const loadRestaurants = () => {
    dispatch(getRestaurantResponse())
  }

  return (
    <Grid container>
      <TextField
        id="city-input"
        label="Kaupungin nimi..."
        variant="outlined"
        onChange={event => dispatch(changeSearchQuery(event.target.value))}
      />
      <IconButton
        size="large"
        aria-label="Search restaurants"
        onClick={loadRestaurants}
        color="inherit"
      >
        <SearchIcon />
      </IconButton>
    </Grid>
  )
}
