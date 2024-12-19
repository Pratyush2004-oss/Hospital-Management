'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Appointment from './_components/Appointment'
import { usePatientStore } from '@/store/patientStore'
import { Library, User } from 'lucide-react'
import LoadingSpinner from './_components/LoadingSpinner'
import { specialization } from '@/config/Specialization'

const page = () => {
  const { getDoctors, getMedicos, loading, doctors, medicos } = usePatientStore();
  useEffect(() => {
    getDoctors();
    getMedicos();
  }, [getDoctors, getMedicos]);
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
      <div className='flex flex-col p-4 min-h-[65vh]' id='doctors'>
        <h1 className='font-serif text-3xl font-extrabold'>Meet Our Doctors</h1>
        {
          loading && (
            <LoadingSpinner />
          )
        }
        <div className='grid grid-cols-1 gap-4 my-5 md:grid-cols-2 lg:grid-cols-4'>
          {
            doctors && doctors.map(doctor => (
              <div key={doctor.id} className='flex flex-col items-center p-4 border-2 border-red-500 rounded-lg'>
                <h1 className='flex gap-5 font-serif text-2xl font-bold '><User /> {doctor.name}</h1>
                <h1 className='font-serif text-lg font-bold'>{doctor.specialization}</h1>
                <h1 className='font-serif text-lg font-bold'>{doctor.experience} years</h1>
                <h1 className='font-serif text-lg font-bold'>{doctor.hospital}</h1>
              </div>
            ))
          }
        </div>
      </div>

      {/* Services */}
      <div id='services' className='flex flex-col p-4 min-h-[50vh]'>
        <h1 className='font-serif text-3xl font-extrabold'>Our Services</h1>
        <div className='grid grid-cols-1 gap-4 my-5 lg:grid-cols-4'>
          {
            specialization.map((specialization, idx) => (
              <div key={idx} className='flex flex-wrap items-center p-4 transition-all duration-150 border-2 border-red-500 rounded-lg cursor-pointer hover:text-white hover:scale-105 hover:bg-red-300'>
                <h1 className='flex gap-5 font-mono text-xl font-bold '><Library /> {specialization.value}</h1>
              </div>
            ))
          }
        </div>
      </div>

      {/* Medicos */}
      <div className='flex flex-col p-4 min-h-[60vh]' id='medicos'>
        <h1 className='font-serif text-3xl font-extrabold'>Medicos</h1>
        {
          loading && (
            <LoadingSpinner />
          )
        }
        <div className='grid grid-cols-1 gap-4 my-5 lg:grid-cols-4 md:grid-cols-2'>
          {
            medicos && medicos.map(medico => (
              <div key={medico.id} className='flex flex-col items-center p-4 border-2 border-red-500 rounded-lg'>
                <h1 className='flex gap-5 font-serif text-2xl font-bold'><User /> {medico.name}</h1>
                <h1 className='font-serif text-lg font-bold'>{medico.experience} years</h1>
                <h1 className='font-serif text-lg font-bold'>{medico.city}</h1>
                <h1 className='font-serif text-lg font-bold'>{medico.hospital}</h1>
              </div>
            ))
          }
        </div>
      </div>

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