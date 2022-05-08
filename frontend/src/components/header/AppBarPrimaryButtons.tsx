import { Button, Container } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

/**
 * High priority buttons in header. These are the main features of the app that most users will use
 * @returns functional component
 */
export function AppBarPrimaryButtons() {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <Container maxWidth="xl">
      <Button
        color="inherit"
        disabled={location.pathname === '/votes'}
        onClick={() => navigate('/votes')}
      >
        Äänet
      </Button>
      <Button
        color="inherit"
        disabled={location.pathname === '/'}
        onClick={() => navigate('/')}
      >
        Ravintolat
      </Button>
    </Container>
  )
}
