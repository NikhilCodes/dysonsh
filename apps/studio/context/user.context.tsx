import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

export const AuthContext = React.createContext({
  user: null,
  isLoading: true,
  refreshUser: () => {},
})

export const AuthProvider = ({ children, failureRedirectTo, successRedirectTo }) => {
  const [user, setUser] = useState(null)

  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter()

  const getUser = () => {
    return axios.get('http://localhost:3000/api/auth/status')
      .then(async (resp) => {
        if (resp.status === 200) {
          setUser(resp.data)
          console.log(router.pathname)
          if (router.pathname.includes('login')) {
            await router.replace(successRedirectTo)
          }
        }

      }).catch(async () => {
        if (failureRedirectTo) {
          await router.replace(failureRedirectTo)
        }
      })
  }

  const refreshUser = async () => {
    setIsLoading(true);
    await getUser().finally(() => {
      setIsLoading(false);
    })
  }

  useEffect(() => {
    getUser().finally(() => {
      setIsLoading(false);
    })
  }, [failureRedirectTo, successRedirectTo])

  return (
    <AuthContext.Provider value={{ user, isLoading, refreshUser }}>
      {children}
    </AuthContext.Provider>
  )
}
