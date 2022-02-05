import React, { useEffect } from 'react'
import { regionParser } from '../lib/helpers'
import { useRouter } from 'next/router'

interface ProjectTileProps {
  id?: String
  title: string
  region: string
  is_running?: boolean
  pricing: 'DEDICATED' | 'SERVERLESS'
}

export default function ProjectTile(props: ProjectTileProps) {
  const router = useRouter()
  const is_dedicated = props.pricing === 'DEDICATED'

  const onClickProject = () => {
    router.push(`${props.id}`)
  }

  return <div
    className={'flex flex-col w-96 mb-4 mr-4 p-4 bg-white rounded-lg shadow-md cursor-pointer relative overflow-hidden'}
    onClick={onClickProject}
  >
    {is_dedicated && <PremiumRibbon />}
    <div className={'font-semibold'}>
      {props.title}
    </div>
    <div className={'flex mt-4'} style={{ fontSize: '0.6rem' }}>
      <div
        className={`${props.is_running ? 'bg-emerald-500' : 'bg-yellow-500'} cell`}
      >
        {props.is_running
          ? <div className={'w-2 h-2 rounded-full bg-white mr-1.5'} />
          : <>
            <div className={'w-0.5 h-2 bg-white mr-0.5'} />
            <div className={'w-0.5 h-2 bg-white mr-1.5'} />
          </>}
        <div
          className={'font-extrabold text-white '}>{props.is_running ? 'RUNNING' : 'PAUSED'}</div>
      </div>

      <div className={'cell bg-gray-200 ml-2'}>
        {regionParser(props.region)}
      </div>
    </div>
  </div>
}


// Subcomponents
function PremiumRibbon() {
  return <div
    className={'absolute top-5 right-5 bg-gradient-to-r from-yellow-200 to-amber-400 w-28 flex items-center justify-center rotate-45 translate-x-12'}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
         viewBox="0 0 20 20" fill="currentColor">
      <path
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  </div>
}
