import { Typography } from '@mui/material'
import { CityInput } from './CityInput'
import { RestaurantView } from './RestaurantView'

export function RestaurantContent() {
  return (
    <div>
      <Typography variant="h3">Etsi lounasravintolat</Typography>
      <CityInput />
      <RestaurantView />
    </div>
  )
}
