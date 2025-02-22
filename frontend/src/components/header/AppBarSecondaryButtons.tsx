import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

/**
 * Secondary buttons of the header. These would be used less commonly
 * @returns functional component
 */
export function AppBarSecondaryButtons() {
  const navigate = useNavigate()
  const location = useLocation()
  const [anchorArchiveMenu, setAnchorArchiveMenu] =
    React.useState<null | HTMLElement>(null)

  const handleOpenArchiveMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorArchiveMenu(event.currentTarget)
  }

  const handleCloseArchiveMenu = () => {
    setAnchorArchiveMenu(null)
  }

  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenArchiveMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorArchiveMenu}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorArchiveMenu)}
        onClose={handleCloseArchiveMenu}
      >
        <MenuItem
          onClick={handleCloseArchiveMenu}
          disabled={location.pathname === '/archive'}
        >
          <Typography textAlign="center" onClick={() => navigate('/archive')}>
            Arkisto
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  )
}
