import '../styles/global.css'
import Sidebar from '../components/sidebar'
import { UserProvider, useUser, } from '@auth0/nextjs-auth0'
import { AuthScaffold } from '../components/authScaffold'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <UserProvider>
    <AuthScaffold>
      <div className={'flex flex-no-wrap text-white'}>
        <Sidebar />
        <div
          className={'max-h-screen w-full overflow-y-scroll bg-gray-900 flex flex-col justify-start'}>
          <Component {...pageProps} />
        </div>
      </div>
    </AuthScaffold>
  </UserProvider>
}
