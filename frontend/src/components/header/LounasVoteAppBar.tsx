import { AppBar, Box, Toolbar } from '@mui/material'
import { AppBarPrimaryButtons } from './AppBarPrimaryButtons'
import { AppBarSecondaryButtons } from './AppBarSecondaryButtons'
import { LounasVoteLogo } from './LounasVoteLogo'

export function LounasVoteAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <LounasVoteLogo />
          <AppBarPrimaryButtons />
          <AppBarSecondaryButtons />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
