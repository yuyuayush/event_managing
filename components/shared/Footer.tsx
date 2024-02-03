import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t '>
      <div className="flex justify-center items-center p-5 wrapper flex-between flex-col text-center md:flex-row gap-4">
        <Link href='/'>

       <Image
        src="/assets/images/logo.svg"
        alt='logo'
        width={128}
        height={38}
      />
          </Link>
        <p>2023 Evently .All right reserved</p>
      </div>   
    </footer>
  )
}

export default Footer
