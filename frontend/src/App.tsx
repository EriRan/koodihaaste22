import { Provider } from 'react-redux'
import { store } from './app/store'
import { LounasVoteAppBar } from './components/header/LounasVoteAppBar'
import { Content } from './components/content/Content'

export function App() {
  return (
    <Provider store={store}>
      <LounasVoteAppBar />
      <Content />
    </Provider>
  )
}
