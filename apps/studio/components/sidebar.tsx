export default function Sidebar() {
  return <div>
    <div
      className="w-64 absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex max-h-screen min-h-screen overflow-y-scroll hide-scrollbar">
      <div className="px-8">
        <div className="h-16 w-full flex items-center flex flex-nowrap pt-10">
          <a
            href={'/'}
            className={'font-semibold text-white text-2xl w-full'}>
            Dyson<span className={'text-cyan-300'}>Sh</span>
          </a>
        </div>
        <ul className="mt-12">
          <li
            className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
            <div
               className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
              <svg xmlns="http://www.w3.org/2000/svg"
                   className="icon icon-tabler icon-tabler-grid" width="18"
                   height="18" viewBox="0 0 24 24" strokeWidth="1.5"
                   stroke="currentColor" fill="none" strokeLinecap="round"
                   strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x="4" y="4" width="6" height="6" rx="1" />
                <rect x="14" y="4" width="6" height="6" rx="1" />
                <rect x="4" y="14" width="6" height="6" rx="1" />
                <rect x="14" y="14" width="6" height="6" rx="1" />
              </svg>
              <span className="text-sm ml-2">Dashboard</span>
            </div>
            <div
              className="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">5
            </div>
          </li>
          <li
            className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
            <div
               className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
              <svg xmlns="http://www.w3.org/2000/svg"
                   className="icon icon-tabler icon-tabler-puzzle" width="18"
                   height="18" viewBox="0 0 24 24" strokeWidth="1.5"
                   stroke="currentColor" fill="none" strokeLinecap="round"
                   strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path
                  d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
              </svg>
              <span className="text-sm ml-2">Products</span>
            </div>
            <div
              className="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">8
            </div>
          </li>
          <li
            className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
            <div
               className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
              <svg xmlns="http://www.w3.org/2000/svg"
                   className="icon icon-tabler icon-tabler-compass" width="18"
                   height="18" viewBox="0 0 24 24" strokeWidth="1.5"
                   stroke="currentColor" fill="none" strokeLinecap="round"
                   strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="8 16 10 10 16 8 14 14 8 16" />
                <circle cx="12" cy="12" r="9" />
              </svg>
              <span className="text-sm ml-2">Performance</span>
            </div>
          </li>
          <li
            className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
            <div
               className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
              <svg xmlns="http://www.w3.org/2000/svg"
                   className="icon icon-tabler icon-tabler-code" width="20"
                   height="20" viewBox="0 0 24 24" strokeWidth="1.5"
                   stroke="currentColor" fill="none" strokeLinecap="round"
                   strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="7 8 3 12 7 16" />
                <polyline points="17 8 21 12 17 16" />
                <line x1="14" y1="4" x2="10" y2="20" />
              </svg>
              <span className="text-sm ml-2">Deliverables</span>
            </div>
          </li>
          <li
            className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
            <div
               className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
              <svg xmlns="http://www.w3.org/2000/svg"
                   className="icon icon-tabler icon-tabler-puzzle" width="18"
                   height="18" viewBox="0 0 24 24" strokeWidth="1.5"
                   stroke="currentColor" fill="none" strokeLinecap="round"
                   strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path
                  d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
              </svg>
              <span className="text-sm ml-2">Invoices</span>
            </div>
            <div
              className="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">25
            </div>
          </li>
          <li
            className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
            <div
               className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
              <svg xmlns="http://www.w3.org/2000/svg"
                   className="icon icon-tabler icon-tabler-stack" width="18"
                   height="18" viewBox="0 0 24 24" strokeWidth="1.5"
                   stroke="currentColor" fill="none" strokeLinecap="round"
                   strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="12 4 4 8 12 12 20 8 12 4" />
                <polyline points="4 12 12 16 20 12" />
                <polyline points="4 16 12 20 20 16" />
              </svg>
              <span className="text-sm ml-2">Inventory</span>
            </div>
          </li>
          <li
            className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center">
            <div
               className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
              <svg xmlns="http://www.w3.org/2000/svg"
                   className="icon icon-tabler icon-tabler-settings" width="18"
                   height="18" viewBox="0 0 24 24" strokeWidth="1.5"
                   stroke="currentColor" fill="none" strokeLinecap="round"
                   strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span className="text-sm ml-2">Settings</span>
            </div>
          </li>
        </ul>
        <div className="flex justify-center mt-16 mb-4 w-full">
          <div className="relative">
            <div className="text-gray-300 absolute ml-4 inset-0 m-auto w-4 h-4">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg2.svg"
                alt="Search" />
            </div>
            <input
              className="outline-none bg-transparent transition-all rounded-lg w-full text-sm text-gray-300 placeholder-gray-400 pl-10 py-2 border border-gray-500"
              type="text" placeholder="Search" />
          </div>
        </div>
      </div>
      <div className="px-8 border-t border-gray-700">
        <ul className="w-full flex items-center justify-between bg-gray-800">
          <li className="cursor-pointer text-white pt-5 pb-3">
            <button aria-label="show notifications"
                    className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg3.svg"
                alt="notifications" />
            </button>
          </li>
          <li className="cursor-pointer text-white pt-5 pb-3">
            <button aria-label="open chats"
                    className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg4.svg"
                alt="chat" />
            </button>
          </li>
          <li className="cursor-pointer text-white pt-5 pb-3">
            <button aria-label="open settings"
                    className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg5.svg"
                alt="settings" />
            </button>
          </li>
          <li className="cursor-pointer text-white pt-5 pb-3">
            <button aria-label="open logs"
                    className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg6.svg"
                alt="drawer" />
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div
      className="w-64 z-40 absolute bg-gray-800 shadow md:h-full flex-col justify-between sm:hidden transition duration-150 ease-in-out"
      id="mobile-nav">
      <button aria-label="toggle sidebar" id="openSideBar"
              className="h-10 w-10 bg-gray-800 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 rounded focus:ring-gray-800"
      >
        <img
          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg7.svg"
          alt="toggler" />
      </button>
      <button aria-label="Close sidebar" id="closeSideBar"
              className="hidden h-10 w-10 bg-gray-800 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer text-white"
      >
        <img
          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg8.svg"
          alt="cross" />
      </button>
      <div className="px-8">
        <div className="h-16 w-full flex items-center">
          <img
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg1.svg"
            alt="Logo" />
        </div>
        <ul className="mt-12">
          <li
            className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
            <div
               className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
              <svg xmlns="http://www.w3.org/2000/svg"
                   className="icon icon-tabler icon-tabler-grid" width="18"
                   height="18" viewBox="0 0 24 24" strokeWidth="1.5"
                   stroke="currentColor" fill="none" strokeLinecap="round"
                   strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x="4" y="4" width="6" height="6" rx="1" />
                <rect x="14" y="4" width="6" height="6" rx="1" />
                <rect x="4" y="14" width="6" height="6" rx="1" />
                <rect x="14" y="14" width="6" height="6" rx="1" />
              </svg>
              <span className="text-sm ml-2">Dashboard</span>
            </div>
            <div
              className="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">5
            </div>
          </li>
          <li
            className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
            <div
               className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
              <svg xmlns="http://www.w3.org/2000/svg"
                   className="icon icon-tabler icon-tabler-puzzle" width="18"
                   height="18" viewBox="0 0 24 24" strokeWidth="1.5"
                   stroke="currentColor" fill="none" strokeLinecap="round"
                   strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path
                  d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
              </svg>
              <span className="text-sm ml-2">Products</span>
            </div>
            <div
              className="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">8
            </div>
          </li>
          <li
            className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
            <div
               className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
              <svg xmlns="http://www.w3.org/2000/svg"
                   className="icon icon-tabler icon-tabler-compass" width="18"
                   height="18" viewBox="0 0 24 24" strokeWidth="1.5"
                   stroke="currentColor" fill="none" strokeLinecap="round"
                   strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="8 16 10 10 16 8 14 14 8 16" />
                <circle cx="12" cy="12" r="9" />
              </svg>
              <span className="text-sm ml-2">Performance</span>
            </div>
          </li>
          <li
            className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
            <div
               className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
              <svg xmlns="http://www.w3.org/2000/svg"
                   className="icon icon-tabler icon-tabler-code" width="20"
                   height="20" viewBox="0 0 24 24" strokeWidth="1.5"
                   stroke="currentColor" fill="none" strokeLinecap="round"
                   strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="7 8 3 12 7 16" />
                <polyline points="17 8 21 12 17 16" />
                <line x1="14" y1="4" x2="10" y2="20" />
              </svg>
              <span className="text-sm ml-2">Deliverables</span>
            </div>
          </li>
          <li
            className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
            <div
               className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
              <svg xmlns="http://www.w3.org/2000/svg"
                   className="icon icon-tabler icon-tabler-puzzle" width="18"
                   height="18" viewBox="0 0 24 24" strokeWidth="1.5"
                   stroke="currentColor" fill="none" strokeLinecap="round"
                   strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path
                  d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
              </svg>
              <span className="text-sm ml-2">Invoices</span>
            </div>
            <div
              className="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">25
            </div>
          </li>
          <li
            className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
            <div
               className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
              <svg xmlns="http://www.w3.org/2000/svg"
                   className="icon icon-tabler icon-tabler-stack" width="18"
                   height="18" viewBox="0 0 24 24" strokeWidth="1.5"
                   stroke="currentColor" fill="none" strokeLinecap="round"
                   strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="12 4 4 8 12 12 20 8 12 4" />
                <polyline points="4 12 12 16 20 12" />
                <polyline points="4 16 12 20 20 16" />
              </svg>
              <span className="text-sm ml-2">Inventory</span>
            </div>
          </li>
          <li
            className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center">
            <div
               className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
              <svg xmlns="http://www.w3.org/2000/svg"
                   className="icon icon-tabler icon-tabler-settings" width="18"
                   height="18" viewBox="0 0 24 24" strokeWidth="1.5"
                   stroke="currentColor" fill="none" strokeLinecap="round"
                   strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span className="text-sm ml-2">Settings</span>
            </div>
          </li>
        </ul>
        <div className="flex justify-center mt-48 mb-4 w-full">
          <div className="relative">
            <div className="text-gray-300 absolute ml-4 inset-0 m-auto w-4 h-4">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg2.svg"
                alt="Search" />
            </div>
            <input
              className="bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-100  rounded w-full text-sm text-gray-300 placeholder-gray-400 bg-gray-100 pl-10 py-2"
              type="text" placeholder="Search" />
          </div>
        </div>
      </div>
      <div className="px-8 border-t border-gray-700">
        <ul className="w-full flex items-center justify-between bg-gray-800">
          <li className="cursor-pointer text-white pt-5 pb-3">
            <button aria-label="show notifications"
                    className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg3.svg"
                alt="notifications" />
            </button>
          </li>
          <li className="cursor-pointer text-white pt-5 pb-3">
            <button aria-label="open chats"
                    className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg4.svg"
                alt="chat" />
            </button>
          </li>
          <li className="cursor-pointer text-white pt-5 pb-3">
            <button aria-label="open settings"
                    className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg5.svg"
                alt="settings" />
            </button>
          </li>
          <li className="cursor-pointer text-white pt-5 pb-3">
            <button aria-label="open logs"
                    className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg6.svg"
                alt="drawer" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
}
