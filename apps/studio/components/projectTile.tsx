import React, { useEffect } from 'react'
import { regionParser } from '../lib/helpers'

interface ProjectTileProps {
  title: string
  region: string
  is_running?: boolean
}

export default function ProjectTile(props: ProjectTileProps) {
  return <div
    className={'flex flex-col w-96 mb-4 mr-4 p-4 bg-white rounded-lg shadow-md cursor-pointer'}>
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
