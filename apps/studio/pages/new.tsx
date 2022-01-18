import Link from 'next/link';
import { useRouter } from 'next/router'

export default function NewOrganization() {
  const regions = [
    'India',
    'East US (North Virginia)',
  ];

  const pricing = [
    'Free',
    'Production - $20/month'
  ];

  return <div
    className="container flex flex-col justify-center items-center my-20 self-center">
    <form className="w-5/12 px-20 py-14 bg-gray-100 bg-opacity-5 rounded-2xl" onSubmit={(e) => e.preventDefault()}>
      {/*Heading*/}
      <div className={'mb-8 text-2xl'}>
        Create a new project
      </div>

      {/*Form Body*/}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            htmlFor="grid-last-name">
            Name
          </label>
          <input
            autoComplete={'nope'}
            className="appearance-none block w-full bg-transparent text-gray-300 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:border-cyan-300"
            id="grid-last-name" type="text" placeholder="Project Name" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            htmlFor="grid-state">
            Region
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-transparent border border-gray-200 text-gray-300 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:border-cyan-300"
              id="grid-state">
              {regions.map((regionName, index) => (
                <option className={'bg-gray-800 text-green-100'} key={index}>{regionName}</option>))}
            </select>
            <div
              className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4"
                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <div className={'text-gray-500 text-sm mt-1.5'}>Select a region close to you for the best performance.</div>
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            htmlFor="grid-state">
            Pricing
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-transparent border border-gray-200 text-gray-300 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:border-cyan-300"
              id="grid-state">
              {pricing.map((regionName, index) => (
                <option className={'bg-gray-800 text-green-100'} key={index}>{regionName}</option>))}
            </select>
            <div
              className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4"
                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className={'flex justify-end'}>
        <Link
          href={'/'}
          passHref
        >
          <button
            className="bg-gray-200 bg-opacity-10 transition-colors active:bg-gray-400 text-gray-100 py-2 px-4 rounded inline-flex items-center mr-4">
            <span>Cancel</span>
          </button>
        </Link>

        <button
          className="bg-cyan-600 transition-colors active:bg-gray-400 text-gray-100 py-2 px-4 rounded inline-flex items-center">
          <span>Lift Off!</span>
        </button>
      </div>
    </form>
  </div>
}
