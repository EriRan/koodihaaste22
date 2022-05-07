import { Container } from '@mui/material'
import { CityInput } from './restaurant/CityInput'
import { RestaurantView } from './restaurant/RestaurantView'

export function Content() {
  return (
    <Container>
      <CityInput />
      <RestaurantView />
    </Container>
  )
}
