import { useAppSelector } from 'src/app/hooks'
import { selectRestaurantResponse } from 'src/app/state/restaurantSlice'

export function RestaurantView() {
  const restaurantResponse = useAppSelector(selectRestaurantResponse)

  const restaurantsJsx = restaurantResponse?.restaurants.map(restaurant => {
    return (
      <div id={`restaurant-${restaurant.id}`}>
        <p>{restaurant.name}</p>
        <p>{restaurant.openingHours}</p>
        <p>{restaurant.votes}</p>
      </div>
    )
  })
  return <div>{restaurantsJsx}</div>
}
