import React from 'react'

interface ProjectTileProps {
  key?: string
  title: string
  is_running?: boolean;
}

export default function ProjectTile(props: ProjectTileProps) {
  return <div
    key={props.key}
    className={'flex flex-col w-96 mb-4 mr-4 p-4 bg-white rounded-lg shadow-md'}>
    <div className={'font-semibold'}>
      {props.title}
    </div>
    <div className={'flex mt-4'}>
      <div
        style={{ fontSize: '0.6rem', padding: '2pt 6pt' }}
        className={`${props.is_running ? 'bg-emerald-500' : 'bg-yellow-500'} rounded-xl flex items-center`}
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
    </div>
  </div>
}
