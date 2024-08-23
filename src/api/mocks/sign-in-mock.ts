import { http, HttpResponse } from 'msw'

import { SignBody } from '../sign-in'

export const signInMock = http.post<never, SignBody>(
  '/authenticate',
  async ({ request }) => {
    const { email } = await request.json()

    if (email === 'john@example.com') {
      return new HttpResponse(null, {
        status: 200,
        headers: {
          'Set-Cookie': 'auth=sample-jwt',
        },
      })
    }

    return new HttpResponse(null, {
      status: 401,
    })
  },
)
