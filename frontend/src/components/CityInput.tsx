import { useAppDispatch } from 'src/app/hooks'
import { getRestaurantResponse } from 'src/app/state/restaurantThunk'
import { changeSearchQuery } from 'src/app/state/restaurantSlice'

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
