import { AppBar, Box, Toolbar } from '@mui/material'
import { AppBarPrimaryButtons } from './AppBarPrimaryButtons'
import { AppBarSecondaryButtons } from './AppBarSecondaryButtons'
import { LounasVoteLogo } from './LounasVoteLogo'

export function LounasVoteAppBar() {
  return (
    <Box>
      <AppBar position="relative">
        <Toolbar>
          <LounasVoteLogo />
          <AppBarPrimaryButtons />
          <AppBarSecondaryButtons />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
