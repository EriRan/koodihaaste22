import { Grid, Typography } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

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

  return (
    <Grid container>
      <AccessTimeIcon />
      <Typography>{trimmedString}</Typography>
    </Grid>
  )
}
