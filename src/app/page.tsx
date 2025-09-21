import Image from 'next/image'
import React from 'react'

const LandingView = () => {
  return (
    <main className='w-screen h-screen flex items-center justify-center bg-[#3C4BF0]'>
      <Image src={'logo.svg'} alt='logo' width={300} height={200} />
    </main>
  )
}

export default LandingView