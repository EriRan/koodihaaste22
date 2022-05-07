import { Provider } from 'react-redux'
import { store } from './app/store'
import { LounasVoteAppBar } from './components/header/LounasVoteAppBar'
import { CityInput } from './components/restaurant/CityInput'
import { RestaurantView } from './components/restaurant/RestaurantView'

export function App() {
  return (
    <Provider store={store}>
      <LounasVoteAppBar />
      <CityInput />
      <RestaurantView />
    </Provider>
  )
}
