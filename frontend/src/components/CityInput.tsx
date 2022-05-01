import { useAppDispatch } from 'src/app/hooks'
import { getRestaurantResponse } from 'src/app/state/restaurantThunk'

export function CityInput() {
  const dispatch = useAppDispatch()

  function loadRestaurants(): void {
    dispatch(getRestaurantResponse('Helsinki'))
  }

  return (
    <div>
      <input id="city-input" placeholder="Kaupungin nimi..." />
      <button type="button" id="city-input-button" onClick={loadRestaurants}>
        Hae
      </button>
    </div>
  )
}
