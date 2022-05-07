import { Box, Container, Typography } from '@mui/material'
import { MATERIAL_UI_MARGIN } from 'src/components/Constants'
import { CityInput } from './CityInput'
import { RestaurantView } from './RestaurantView'

export function RestaurantContent() {
  return (
    <div>
      <Container maxWidth="sm">
        <Box sx={{ paddingTop: MATERIAL_UI_MARGIN }}>
          <Typography variant="h3">Etsi lounasravintolat</Typography>
          <CityInput />
        </Box>
        <RestaurantView />
      </Container>
    </div>
  )
}
