import { Grid, Typography } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

export function OpeningHoursGrid(props: { openingHours: string }) {
  const { openingHours } = props
  const trimmedString = openingHours.trim()

  if (trimmedString.length === 0) {
    return (
      <Grid container>
        <AccessTimeIcon color="disabled" />
        <Typography>Kiinni</Typography>
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
