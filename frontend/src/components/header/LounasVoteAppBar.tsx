import { AppBar, Box, Toolbar } from '@mui/material'
import { AppBarButtons } from './AppBarButtons'
import { AppBarSecondaryButtons } from './AppBarSecondaryButtons'
import { LounasVoteLogo } from './LounasVoteLogo'

export function LounasVoteAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <LounasVoteLogo />
          <AppBarButtons />
          <AppBarSecondaryButtons />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
