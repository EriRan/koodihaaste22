import { AppBar, Box, Toolbar } from '@mui/material'
import { LounasVoteLogo } from './LounasVoteLogo'

export function LounasVoteAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <LounasVoteLogo />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
