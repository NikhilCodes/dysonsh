import '../styles/global.css'
import Sidebar from '../components/sidebar'
import { AuthScaffold } from '../components/authScaffold'
import { useRouter } from 'next/router'
import { useUser } from '../hooks/useUser'


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [user, isLoading] = useUser({ failureRedirectTo: '/login' })

  if (isLoading) {
    return <div>Loading...</div>
  }
  return <div className={'flex flex-no-wrap text-white min-h-screen'}>
    {router.pathname !== '/login' && <Sidebar />}
    <div
      className={'max-h-screen w-full overflow-y-scroll flex flex-col justify-start app-bg'}>
      <Component {...pageProps} />
    </div>
  </div>
}
