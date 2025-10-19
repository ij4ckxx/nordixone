import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='text-center font-bold text-black text-8xl font-druk'>
      
      <div>Main page</div>
      <div className='flex flex-col text-2xl text-center gap-1 mt-10'>
      <Link href={'/get-started'}>Get started</Link>
      <Link href={'/careers'}>Careers</Link>
      <Link href={'/about'}>About</Link>
      </div>
    </div>
  )
}

export default page
