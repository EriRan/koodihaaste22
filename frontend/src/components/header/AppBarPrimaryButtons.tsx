import { Button, Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'

/**
 * High priority buttons in header. These are the main features of the app that most users will use
 * @returns functional component
 */
export function AppBarPrimaryButtons() {
  const navigate = useNavigate()
  return (
    <Container maxWidth="xl">
      <Button color="inherit" onClick={() => navigate('/votes')}>
        Äänet
      </Button>
      <Button color="inherit" onClick={() => navigate('/')}>
        Ravintolat
      </Button>
    </Container>
  )
}
