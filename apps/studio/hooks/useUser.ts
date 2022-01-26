import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

export function useUser({ failureRedirectTo }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter()

  useEffect(() => {
    axios.get('api/auth/status')
      .then((resp) => {
        if (resp.status === 200) {
          setUser(resp.data)
        }

      }).catch(async () => {
      await router.replace(failureRedirectTo)
    }).finally(() => {
      setIsLoading(false);
    })
  }, [failureRedirectTo])

  return [user, isLoading]
}
