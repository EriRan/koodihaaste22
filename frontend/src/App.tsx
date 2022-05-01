import { Provider } from 'react-redux'
import { store } from './app/store'
import { CityInput } from './components/CityInput'
import { RestaurantView } from './components/RestaurantView'

export function App() {
  return (
    <Provider store={store}>
      <CityInput />
      <RestaurantView />
    </Provider>
  )
}
