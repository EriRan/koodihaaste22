import { Button, TextField } from '@mui/material'
import { useAppDispatch } from 'src/app/hooks'
import { changeSearchQuery } from 'src/app/state/restaurant/restaurantSlice'
import { getRestaurantResponse } from 'src/app/state/restaurant/restaurantThunk'

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
        variant="standard"
        onChange={event => dispatch(changeSearchQuery(event.target.value))}
      />
      <Button
        id="city-input-button"
        variant="contained"
        onClick={loadRestaurants}
      >
        Hae
      </Button>
    </div>
  )
}
