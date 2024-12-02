'use client'
import Link from 'next/link'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Appointment from './_components/Appointment'


const page = () => {
  return (
    <div>
      <nav className='sticky top-0 z-50 flex items-center justify-between p-4 bg-white '>
        <Link href={'/'} className='text-3xl font-extrabold'>Hospi<span className='text-red-500'>TAL</span></Link>
        <div className='items-center hidden gap-4 md:flex'>
          <Link href={'#doctors'} className='text-xl font-bold'>DOCTORS</Link>
          <Link href={'#services'} className='text-xl font-bold'>SERVICES</Link>
          <Link href={'#medicos'} className='text-xl font-bold'>MEDICOS</Link>
          <Link href={'#appointment'} className='text-xl font-bold'>APPOINTMENT</Link>
        </div>
        <div className='md:hidden'>
          <DropdownMenu >
            <DropdownMenuTrigger><Menu /></DropdownMenuTrigger>
            <DropdownMenuContent className='md:hidden'>
              <DropdownMenuLabel>
                <Link href={'login'}>Login</Link>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={'#doctors'}>DOCTORS</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'#services'}>SERVICES</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'#midicos'}>MEDICOS</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'#appointment'}>APPOINTMENT</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>


      {/* Home section */}
      <div className='flex flex-col min-h-[75vh] bg-red-300'>
        <div className='flex flex-wrap items-center justify-between p-4 h-2/3'>
          <div className='p-5 text-3xl font-extrabold border-l-8 border-red-700'>
            <h1>HOSPI<span className='text-red-500'>TAL</span></h1>
            <h1 className='font-light'>IPD, OPD & Emergency</h1>
          </div>
          <div className='border-b-8 border-red-700 rounded-full'>
            <Image src={'/images/home-img.svg'} width={330} height={500} alt={'home'} />
          </div>
        </div>
        <div className='p-5 h-1/3'>
          <h1 className='font-serif text-3xl font-bold'>Call 108 for Ambulance</h1>
          <Button variant='destructive' size='lg'>Call Now</Button>
        </div>
      </div>


      {/* Doctors */}
      <div className='flex flex-col p-4 min-h-[75vh]' id='doctors'>
        <h1 className='font-serif text-3xl font-extrabold'>Meet Our Doctors</h1>
      </div>

      {/* Services */}
      <div id='services' className='flex flex-col p-4 min-h-[75vh]'>
        <h1 className='font-serif text-3xl font-extrabold'>Our Services</h1>
      </div>


      {/* Medicos */}
      <div id='medicos'></div>

      {/* Appointment */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-10 min-h-[75vh] bg-red-300' id='appointment'>
        <Appointment />
        <div className='hidden lg:block'>
        <Image src={'/images/book-img.svg'} width={400} height={400} alt='appointment'/>
        </div>
      </div>
    </div>


  )
}

export default page