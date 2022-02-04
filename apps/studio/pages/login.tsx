import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../hooks/user.hook'

export default function Login() {
  const [email, setEmail] = useState('')
  const [passkey, setPasskey] = useState('')
  const [isSigningIn, setIsSigningIn] = useState(true)

  const {refreshUser} = useAuth()

  const onClickSignIn = async () => {
    await axios.post('/api/auth/login', {
      email,
      passkey,
    })

    refreshUser()
  }

  return <div
    className="container flex flex-col justify-center items-center my-20 self-center">
    <form className="w-5/12 px-20 py-14 bg-gray-100 bg-opacity-5 rounded-2xl"
          onSubmit={(e) => e.preventDefault()}>
      {/*Heading*/}
      <div className={'mb-8 text-2xl'}>
        {isSigningIn ? 'Login' : 'Sign Up'}
      </div>

      {/*Form Body*/}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            htmlFor="grid-last-name">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target['value'])}
            autoComplete={'nope'}
            className="appearance-none block w-full bg-transparent text-gray-300 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:border-cyan-300"
            id="grid-last-name" type="text" placeholder="people@email.com" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            htmlFor="grid-last-name">
            Password
          </label>
          <input
            onChange={(e) => setPasskey(e.target.value)}
            autoComplete={'nope'}
            className="appearance-none block w-full bg-transparent text-gray-300 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:border-cyan-300"
            id="grid-last-name" type="text" placeholder="*********" />
        </div>
      </div>

      <div className={'flex justify-between'}>
        <div
          onClick={() => setIsSigningIn(!isSigningIn)}
          className={'align-baseline my-auto text-sm text-gray-500 hover:text-white cursor-pointer'}>
          {isSigningIn ? 'Create account' : 'Login'}
        </div>
        <div className={'flex justify-end'}>
          <Link
            href={process.env.NEXT_PUBLIC_WEB_BASE_URL}
            passHref
          >
            <button
              className="bg-gray-200 bg-opacity-10 transition-colors active:bg-gray-400 text-gray-100 py-2 px-4 rounded inline-flex items-center mr-4">
              <span>Cancel</span>
            </button>
          </Link>

          <button
            onClick={onClickSignIn}
            className="bg-cyan-600 transition-colors active:bg-gray-400 text-gray-100 py-2 px-4 rounded inline-flex items-center">
            <span>{isSigningIn ? 'Hello again' : 'Hello'}</span>
          </button>
        </div>
      </div>
    </form>
  </div>
}
