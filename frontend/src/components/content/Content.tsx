import { Box, Container } from '@mui/material'
import { MATERIAL_UI_MARGIN } from '../Constants'
import { CityInput } from './restaurant/CityInput'
import { RestaurantView } from './restaurant/RestaurantView'

export function Content() {
  return (
    <Container>
      <Box sx={{ paddingTop: MATERIAL_UI_MARGIN }}>
        <CityInput />
        <RestaurantView />
      </Box>
    </Container>
  )
}
