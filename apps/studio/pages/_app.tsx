import '../styles/global.css'
import Sidebar from '../components/sidebar'
import { AuthScaffold } from '../components/authScaffold'
import { useRouter } from 'next/router'
import { AuthProvider } from '../context/user.context'


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return <AuthProvider failureRedirectTo={'/login'} successRedirectTo={'/'}>
    <AuthScaffold>
      <div className={'flex flex-no-wrap text-white min-h-screen'}>
        {router.pathname !== '/login' && <Sidebar />}
        <div
          className={'max-h-screen w-full overflow-y-scroll flex flex-col justify-start app-bg'}>
          <Component {...pageProps} />
        </div>
      </div>
    </AuthScaffold>
  </AuthProvider>
}
