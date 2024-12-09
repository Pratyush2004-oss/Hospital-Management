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
                            <DialogHeader>
                                <DialogTitle className='my-5'>Apoointment Details</DialogTitle>
                                <DialogDescription className='gap-5 sm:grid-cols-2 sm:grid'>
                                    <span className='font-bold'>Name:</span> {appointment.name}<br />
                                    <span className='font-bold'>Age:</span> {appointment.age}<br />
                                    <span className='font-bold'>Gender:</span> {appointment.gender}<br />
                                    <span className='font-bold'>Address:</span> {appointment.address}<br />
                                    <span className='font-bold'>Problem:</span> {appointment.problem}<br />
                                    <span className='font-bold'>Mobile:</span> {appointment.mobile}<br />
                                    <span className='font-bold'>Appointment Date:</span> {appointment.appointmentDate}<br />
                                </DialogDescription>
                            </DialogHeader>
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