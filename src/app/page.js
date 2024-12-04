'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Appointment from './_components/Appointment'


const page = () => {
  return (
    <div>
      {/* Home section */}
      <div className='flex flex-col min-h-[75vh] bg-red-300'>
        <div className='flex flex-wrap items-center p-4 justify-evenly h-2/3'>
          <div className='p-5 text-3xl font-extrabold border-l-8 border-red-700'>
            <h1>HOSPI<span className='text-red-500'>TAL</span></h1>
            <h1 className='font-light'>IPD, OPD & Emergency</h1>
          </div>
          <div className='border-b-8 border-red-700 rounded-full'>
            <Image src={'/images/home-img.svg'} width={330} height={500} alt={'home'} />
          </div>
        </div>
        <div className='flex flex-col items-center p-5 h-1/3'>
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
      <div className='grid grid-cols-1 gap-4 p-10 bg-red-300 lg:grid-cols-3' id='appointment'>
        <Appointment />
        <div className='hidden lg:block'>
          <Image src={'/images/book-img.svg'} width={400} height={400} alt='appointment' />
        </div>
      </div>
    </div>
  )
}

export default page