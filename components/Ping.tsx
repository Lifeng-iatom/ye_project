import React from 'react'

const Ping = () => {
  return (
    <div className='relative'>
        <div className='absolute -left-4 top-1'>
            <span className='flex size-[11px]'>
                <span className='ping'></span>
                <span className='ping-fix'></span>
            </span>
        </div>
    </div>
  )
}

export default Ping