import React from 'react'
import Link from 'next/link'
const navbar = () => {
  return (
    <>
      <nav className='bg-blue-950 p-4 h-15 shadow-md flex justify-between items-center'>
          <div className='font-bold text-white '>Linkify</div>
        <ul className="flex space-x-5 size-2xl text-white items-center">
          <Link href='/'><li className='hover:underline'>Home</li></Link>
          {/* The about page is in development */}
          {/* <Link href='/about'><li className='hover:underline'>About</li></Link> */}
          <Link href='/shorten'><li className='hover:underline'>Shorten</li></Link>
          <Link target='_blank' href="mailto:rohanusulakhe@gmail.com"><li className='hover:underline'>Contact Us</li></Link>
          <li className='flex space-x-2'>
          <Link href='shorten'><button className='bg-blue-900 p-2 font-bold rounded-l-2xl hover:cursor-pointer'>Try Now</button></Link>
          <Link target="_blank" href={'https://github.com/RohanSulakhe/Linkify.git'}><button className='hover:cursor-pointer bg-blue-900 p-2 font-bold rounded-r-2xl'>Github</button></Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default navbar
