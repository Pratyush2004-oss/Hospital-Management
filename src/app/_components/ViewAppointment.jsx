import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { usePatientStore } from '@/store/patientStore';
import { Infinity } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';

const ViewAppointment = () => {
    const [input, setInput] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const { viewAppointment, loading, appointment, deleteAppointment } = usePatientStore();
    const handleSubmit = () => {
        setOpenDialog(true);
        viewAppointment(input);
        setInput('');
    }
    return (
        <div>
            <h1 className='font-serif text-xl font-extrabold'>View Appointment</h1>
            <div className='flex flex-wrap items-center justify-center gap-5'>
                <Input placeholder='Mobile Number' value={input} onChange={(e) => setInput(e.target.value)} className='w-1/3' />
                <Button className='font-bold text-red-500 bg-transparent border-2 border-red-500 rounded-full' variant='outline'
                    disabled={loading || !input}
                    onClick={handleSubmit}
                >{loading ? <Infinity className='text-red-500 animate-pulse' /> : 'View Appointment'}</Button>
            </div>
            {
                loading && (
                    <LoadingSpinner />
                )
            }
            {
                appointment && !loading && (
                    <Dialog open={openDialog} asChild>
                        <DialogContent>
                            <DialogHeader className={'my-3'}>
                                <DialogTitle>Apoointment Details</DialogTitle>
                                <DialogDescription>
                                    Get your appointment details
                                </DialogDescription>
                            </DialogHeader>
                            <div>
                                <h1 className='font-serif font-bold text-center border-b-4 border-red-500'>{appointment.hospital} HOSPITAL, {appointment.address}</h1>
                            </div>
                            <div>
                                <h1 className='text-sm font-bold bold'>Date: {appointment.appointmentDate}</h1>
                            </div>
                            <div className='grid grid-cols-2 gap-2 text-sm border-b-2'>
                                <div className='flex items-center justify-center gap-1 max-lg:col-span-2'>Name : <span className='font-bold'>{appointment.name}</span></div>
                                <div className='flex items-center justify-center gap-1'>Age : <span className='font-bold'>{appointment.age}</span></div>
                                <div className='flex items-center justify-center gap-1'>Gender : <span className='font-bold'>{appointment.gender}</span></div>
                            </div>
                            <div>
                                <h1 className='font-serif font-bold'>Suggested Medicines</h1>
                            </div>
                            {
                                appointment.medicines ? (
                                    <div></div>
                                ) : (
                                    <div>No Medicines prescribed yet</div>
                                )
                            }

                            <DialogFooter className={'my-3'}>
                                <Button onClick={() => setOpenDialog(false)} className='rounded-full' variant='outline'>Close</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                )
            }

        </div>
    )
}

export default ViewAppointment