import { Button, Container } from '@mui/material'

/**
 * High priority buttons in header. These are the main features of the app that most users will use
 * @returns functional component
 */
export function AppBarPrimaryButtons() {
  return (
    <Container maxWidth="xl">
      <Button color="inherit">Äänet</Button>
      <Button color="inherit">Ravintolat</Button>
    </Container>
  )
}
