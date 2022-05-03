import { AppBar, Box, Toolbar, Typography } from '@mui/material'

export function LounasVoteAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h3"
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
