import { useRouter } from 'next/router'

export const AuthScaffold = (props) => {
  const router = useRouter()
  return <>{props.children}</>
}
