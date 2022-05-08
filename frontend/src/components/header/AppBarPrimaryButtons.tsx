import { Container } from '@mui/material'
import { Link } from 'react-router-dom'

/**
 * High priority buttons in header. These are the main features of the app that most users will use
 * @returns functional component
 */
export function AppBarPrimaryButtons() {
  return (
    <Container maxWidth="xl">
      <Link to="/votes">Äänet</Link>
      <Link to="/restaurants">Ravintolat</Link>
    </Container>
  )
}
