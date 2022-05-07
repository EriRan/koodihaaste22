import { IconButton, TextField } from '@mui/material'
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
    <div>
      <TextField
        id="city-input"
        label="Kaupungin nimi..."
        variant="outlined"
        onChange={event => dispatch(changeSearchQuery(event.target.value))}
      />
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={loadRestaurants}
        color="inherit"
      >
        <SearchIcon />
      </IconButton>
    </div>
  )
}
