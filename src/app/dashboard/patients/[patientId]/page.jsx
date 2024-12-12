'use client'
import { useStaffStore } from '@/store/staffStore'
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'

const page = () => {
    const { staff, patient, getPatientbyId } = useStaffStore();
    const params = useParams();
    const patientId = params.patientId
    useEffect(() => {
        getPatientbyId(patientId)
    }, [getPatientbyId])
    return patient && (
        <div className='p-5 lg:p-10 lg:mx-8 max-w-7xl'>
            <div className='flex items-center justify-center pb-2 border-b-4 border-red-500'>
                <h1 className='font-serif text-xl font-bold lg:text-2xl'>{staff.hospital}</h1>
            </div>
            <div className='flex items-center justify-between w-full p-4 my-3 bg-red-100 '>
                <h1 className='max-sm:text-sm'>Appointed by: <span className='font-bold'>{staff.name}</span></h1>
                <h1 className='max-sm:text-sm'>Appointment Date: <span className='font-bold'>{patient.appointmentDate}</span></h1>
            </div>

            <div className='grid grid-cols-2 gap-2 text-lg border-b-4 border-red-500 lg:grid-cols-3 max-md:text-sm'>
                <div className='flex items-center justify-center gap-1 max-lg:col-span-2'>Name : <span className='font-bold'>{patient.name}</span></div>
                <div className='flex items-center justify-center gap-1'>Age : <span className='font-bold'>{patient.age}</span></div>
                <div className='flex items-center justify-center gap-1'>Gender : <span className='font-bold'>{patient.gender}</span></div>
            </div>
            <div className='my-4'>
                <h1 className='font-serif text-xl font-bold underline lg:text-2xl'>Suggested Medicines</h1>
            </div>
            {
                patient.medicines ? (
                    <div></div>
                ) : (
                    <div>No Medicines prescribed yet</div>
                )
            }
            <div></div>


        </div>
    )
}

export default page