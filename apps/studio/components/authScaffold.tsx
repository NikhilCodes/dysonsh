import { useUser } from '@auth0/nextjs-auth0'
import { useRouter } from 'next/router'

export const AuthScaffold = (props) => {
  const { user, error, isLoading } = useUser()
  const router = useRouter()
  if (isLoading) {
    return <div>Hold tight!</div>
  } else if (user.sub) {
    return <>{props.children}</>
  } else {
    router.replace(process.env.NEXT_PUBLIC_WEB_BASE_URL)
    return <>:(</>
  }
}
