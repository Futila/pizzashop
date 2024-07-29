import { api } from '@/lib/axios'

interface UpdateProfileBody {
  name: string
  description: string | null
}

export async function updateProfile({ name, description }: UpdateProfileBody) {
  // throw new Error()

  // simulating a delay
  await new Promise((resolve, reject) => {
    setTimeout(reject, 3000)
  })

  // await api.put('/profile', { name, description })
}
