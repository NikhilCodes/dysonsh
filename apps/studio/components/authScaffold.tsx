import { useRouter } from 'next/router'
import { useAuth } from '../hooks/user.hook'
import Suspense from './suspense'

export const AuthScaffold = (props) => {
  const router = useRouter()
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return <Suspense/>
  }

  return <>{props.children}</>
}
