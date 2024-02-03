import {  SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import Navbar from './NavItems'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='w-full border-b '>
      <div className="wrapper flex justify-between items-center">
        <Link href='/' className='w-36'>
          <Image src='/assets/images/logo.svg' width={128} height={38}
          alt='Evently logo'/>
        </Link>

        <div className='hidden md:flex '>

        <NavItems/>
        </div>

        
          {/* <MobileNav/> */}
        {/* <SignedIn>
        <nav className='md:flex-between hidden w-full max-w-xs'>

        </nav>
        </SignedIn> */}

        <div className='flex gap-2'>
        <SignedIn>
          <UserButton  afterSignOutUrl="/" />
          {/* <NavItems/> */}
        </SignedIn>
        <SignedOut>
          <Button asChild className='rounded-full' size='lg'>
            <Link href='/sign-in'>
              Login
            </Link>
          </Button>
        </SignedOut>
        <div>
          <MobileNav/>
        </div>

      </div>

      </div>
     
    </header>
  )
}

export default Header
