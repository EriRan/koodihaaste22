import { AppBar, Box, Toolbar, Typography } from '@mui/material'

export function AppBarCustom() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            align="center"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            LounasVote
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
