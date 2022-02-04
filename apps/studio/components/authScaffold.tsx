import { useRouter } from 'next/router'
import { useAuth } from '../hooks/user.hook'

export const AuthScaffold = (props) => {
  const router = useRouter()
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return <>{props.children}</>
}
