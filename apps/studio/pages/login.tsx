import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../hooks/user.hook'
import Image  from 'next/image'
import QuoteSvg from '../assets/quote-svgrepo-com.svg'

export default function Login() {
  const [email, setEmail] = useState('')
  const [passkey, setPasskey] = useState('')
  const [isSigningIn, setIsSigningIn] = useState(true)

  const { refreshUser } = useAuth()

  const onClickSignIn = async () => {
    await axios.post('/api/auth/login', {
      email,
      passkey,
    })

    refreshUser()
  }

  return <div
    className="flex justify-center items-center self-center h-screen">
    <div
      className={'flex bg-white shadow-lg rounded-2xl overflow-hidden'}
    >
      <div className="px-20 py-14 flex flex-1 min-w-fit">
        <form
          className={'w-full'}
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
                name={'email'}
                onChange={(e) => setEmail(e.target['value'])}
                autoComplete={'nope'}
                className="appearance-none block w-full bg-transparent text-gray-300 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:border-cyan-300"
                id="grid-last-name" type="text"
                placeholder="people@email.com" />
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
                name={'password'}
                onChange={(e) => setPasskey(e.target.value)}
                autoComplete={'nope'}
                className="appearance-none block w-full bg-transparent text-gray-300 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:border-cyan-300"
                id="grid-last-name" type="password" placeholder="*********" />
            </div>
          </div>

          <div className={'flex justify-between'}>
            <div
              onClick={() => setIsSigningIn(!isSigningIn)}
              className={'align-baseline my-auto text-sm text-gray-500 hover:text-gray cursor-pointer'}>
              {isSigningIn ? 'Create account' : 'Login'}
            </div>
            <div className={'flex justify-end'}>
              <button
                onClick={onClickSignIn}
                className="bg-cyan-600 transition-colors active:bg-gray-400 text-gray-100 py-2 px-4 rounded inline-flex items-center">
                <span>{isSigningIn ? 'Hello again' : 'Welcome'}</span>
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className={'flex-1 bg-gradient-to-b from-blue-900 to-cyan-600 px-14 py-14'}>
        <div>
          <div className={'rounded-full w-10 h-10 bg-emerald-400 p-2 mb-5'}>
            <Image src={QuoteSvg} alt={'quote-svg'} />
          </div>

          <div className={'text-white text-6xl font-bold'}>
            Build a dream
          </div>
        </div>
      </div>
    </div>
  </div>
}
