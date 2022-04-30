import { useAppDispatch, useAppSelector } from 'src/app/hooks'
import {
  loadData,
  selectRestaurantResponse,
} from 'src/app/state/restaurantSlice'

export function RestaurantView() {
  const dispatch = useAppDispatch()
  dispatch(
    loadData({
      date: '2022-04-30',
      restaurants: [
        {
          id: '123',
          name: 'Kebab Restorans',
          openingHours: '9-22',
          votes: 0,
        },
      ],
    }),
  )
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
