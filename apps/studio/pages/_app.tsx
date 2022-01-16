import '../styles/global.css'
import Sidebar from '../components/sidebar'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <div className={'flex flex-no-wrap'}>
    <Sidebar />
    <div className={'max-h-screen w-full overflow-y-scroll bg-gray-900'}>
      <Component {...pageProps} />
    </div>
  </div>
}
