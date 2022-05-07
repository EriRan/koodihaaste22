import { useAppDispatch } from 'src/app/hooks'
import { changeSearchQuery } from 'src/app/state/restaurant/restaurantSlice'
import { getRestaurantResponse } from 'src/app/state/restaurant/restaurantThunk'

export function CityInput() {
  const dispatch = useAppDispatch()

  function loadRestaurants(): void {
    dispatch(getRestaurantResponse())
  }

  return (
    <div>
      <input
        id="city-input"
        type="text"
        placeholder="Kaupungin nimi..."
        onChange={event => dispatch(changeSearchQuery(event.target.value))}
      />
      <button type="button" id="city-input-button" onClick={loadRestaurants}>
        Hae
      </button>
    </div>
  )
}
