import { Grid, IconButton, TextField } from '@mui/material'
import { useAppDispatch } from 'src/app/hooks'
import { changeSearchQuery } from 'src/app/state/restaurant/restaurantSlice'
import { getRestaurantResponse } from 'src/app/state/restaurant/restaurantThunk'
import SearchIcon from '@mui/icons-material/Search'
import React from 'react'

export function CityInput() {
  const dispatch = useAppDispatch()

  const loadRestaurants = () => {
    dispatch(getRestaurantResponse())
  }

  const handleOnKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      loadRestaurants()
    }
  }

  return (
    <Grid container>
      <TextField
        id="city-input"
        label="Kaupungin nimi..."
        variant="outlined"
        onChange={event => dispatch(changeSearchQuery(event.target.value))}
        onKeyDown={handleOnKeyDown}
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
