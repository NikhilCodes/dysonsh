// This default export is required in a new `pages/_app.js` file.
import { UserProvider } from '@auth0/nextjs-auth0'

export default function MyApp({ Component, pageProps }) {
  return <UserProvider>
    <div>
      <Component {...pageProps} />
    </div>
  </UserProvider>
}
