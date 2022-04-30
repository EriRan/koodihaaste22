import { Provider } from 'react-redux'
import { store } from './app/store'
import { RestaurantView } from './components/RestaurantView'

export function App() {
  return (
    <Provider store={store}>
      <RestaurantView />
    </Provider>
  )
}
