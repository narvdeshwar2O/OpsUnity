import Orb from '@/components/ui/Orb'
import Particles from '@/components/ui/Particles'
import React from 'react'
import VideoContainer from './comp/VideoContainer'
import Product from './comp/Product'
import WhatYouCanDo from './comp/WhatYouCanDo'

function Home() {
  return (
    <>
      <div className='overflow-hidden'>
        <Particles />
        <Orb />
      </div>
      <div className='grid grid-cols-[1fr_2fr] w-[90%] mx-auto'>
        <Product />
        <VideoContainer />
      </div>
      <WhatYouCanDo />
    </>
  )
}

export default Home
