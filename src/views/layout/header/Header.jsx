import { Logo } from '@/assets'
import OptimizedImage from '@/components/OptimisedImage'
import React from 'react'

const Header = () => {
  return (
    <nav className='h-16'>
      <div className='w-[80%] mx-auto'>
        <div className='h-16 w-60 p-1'>
          <OptimizedImage src={Logo} alt="logo" className='w-[100%] h-[100%]' />
        </div>
      </div>
    </nav>
  )
}

export default Header
