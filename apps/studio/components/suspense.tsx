import React from 'react'

export default function Suspense() {
  return <div className={'w-100 h-full flex items-center justify-center'}>
    <div
      className="animate-spin inline-block h-fit align-middle justify-center flex"
      role="status">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="90px" height="90px"
        viewBox="0 0 100 100"
        alignmentBaseline={'central'}
        preserveAspectRatio="xMidYMid"
        style={{
          // marginRight: '-2px',
          display: 'block',
          backgroundRepeat: 'initial',
          backgroundColor: 'transparent',
          animationPlayState: 'paused',
        }}>
        <circle
          cx="50" cy="50" fill="none" stroke="#4dd0e1" strokeWidth="10"
          r="35" strokeDasharray="164.93361431346415 56.97787143782138"
          transform="matrix(1,0,0,1,0,0)"
          style={{
            transform: 'matrix(1, 0, 0, 1, 0, 0)',
            animationPlayState: 'paused',
          }} />
      </svg>
    </div>
  </div>

}
