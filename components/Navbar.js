import React from 'react'
import Link from 'next/link'
const navbar = () => {
  return (
    <>
      <nav className='bg-indigo-500 p-4 h-15 shadow-md flex justify-between items-center'>
          <div className='font-bold text-white '>Linkify</div>
        <ul className="flex space-x-5 size-2xl text-white items-center">
          <Link href='/'><li>Home</li></Link>
          <Link href='/about'><li>About</li></Link>
          <Link href='/shorten'><li>Shorten</li></Link>
          <Link href='/contact'><li>Contact Us</li></Link>
          <li className='flex space-x-2'>
          <Link href='shorten'><button className='bg-indigo-300 p-2 font-bold rounded-l-2xl'>Try Now</button></Link>
          <Link href='github'><button className='bg-indigo-300 p-2 font-bold rounded-r-2xl'>Github</button></Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default navbar
