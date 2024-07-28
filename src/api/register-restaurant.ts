import { api } from '@/lib/axios'

interface RegisterRestaurantBody {
  email: string
  phone: string
  restaurantName: string
  managerName: string
}

export async function registerRestaurant({
  email,
  managerName,
  phone,
  restaurantName,
}: RegisterRestaurantBody) {
  await api.post('/restaurants', {
    restaurantName,
    managerName,
    email,
    phone,
  })
}
