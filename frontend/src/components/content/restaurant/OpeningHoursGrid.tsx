import { Grid, Typography } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

const NO_LUNCH_AVAILABLE = 'ei lounasta'

export function OpeningHoursGrid(props: { openingHours: string; id: string }) {
  const { openingHours, id } = props
  const trimmedString = openingHours.trim()

  if (trimmedString.length === 0) {
    return (
      <Grid id={id} container>
        <AccessTimeIcon color="disabled" />
        <Typography>Kiinni</Typography>
      </Grid>
    )
  }
  if (trimmedString === NO_LUNCH_AVAILABLE) {
    return (
      <Grid id={id} container>
        <AccessTimeIcon color="disabled" />
        <Typography>Ei lounasta</Typography>
      </Grid>
    )
  }
  return (
    <Grid container>
      <AccessTimeIcon />
      <Typography>{trimmedString}</Typography>
    </Grid>
  )
}
