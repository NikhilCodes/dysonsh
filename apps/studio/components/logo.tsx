import * as React from 'react'

export default function Logo({ scale }) {
  return <div style={{ transform: `scale(${scale ?? 1})` }} className={'w-full'}>
    <svg id="e3I17f2F0Ag1" xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 640 480" shapeRendering="geometricPrecision"
         textRendering="geometricPrecision">
      <ellipse rx="30" ry="30"
               transform="translate(305.175859 102.183733)" fill="#fff"
               strokeWidth="0" />
      <ellipse rx="30" ry="21.849407"
               transform="matrix(1 0 0 1.373035 420.800385 303.770352)"
               fill="#fff" strokeWidth="0" />
      <ellipse rx="30" ry="21.849407"
               transform="matrix(1 0 0 1.373035 189.551333 303.770352)"
               fill="#fff" strokeWidth="0" />
      <line x1="-32" y1="0" x2="32" y2="0"
            transform="translate(300.175859 480)" fill="none"
            stroke="#3f5787" strokeWidth="3" />
      <path
        d="M200.17586,174.857587c0-23.867939,17.425498-43.21673,38.920936-43.21673s38.920937,19.348791,38.920937,43.21673-17.425498,43.216729-38.920937,43.216729-38.920936-19.348791-38.920936-43.216729Zm38.920936,38.894685c19.345898,0,35.028844-17.413909,35.028844-38.895057s-15.682946-38.895056-35.028844-38.895056-35.028842,17.413909-35.028842,38.895056s15.682946,38.895057,35.028842,38.895057Z"
        transform="matrix(2.055449 0 0 1.851135-186.275412-86.684998)"
        fill="#fff" strokeWidth="0" />
    </svg>
  </div>
}
