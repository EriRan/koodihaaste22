import { Box, Container } from '@mui/material'
import { MATERIAL_UI_MARGIN } from '../Constants'
import { RestaurantContent } from './restaurant/RestaurantContent'

export function Content() {
  return (
    <Container>
      <Box sx={{ paddingTop: MATERIAL_UI_MARGIN }}>
        <RestaurantContent />
      </Box>
    </Container>
  )
}
