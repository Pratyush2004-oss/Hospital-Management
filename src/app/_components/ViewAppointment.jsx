import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import React, { useEffect, useState } from 'react'
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
    const { viewAppointment, loading, appointment } = usePatientStore();
    const handleSubmit = () => {
        setOpenDialog(true);
        viewAppointment(input);
        setInput('');
    }
    const [medicines, setMedicines] = useState([]);
    useEffect(() => {
        if (appointment && appointment.medicines) {
            setMedicines(JSON.parse(appointment.medicines));
        }
    }, [appointment])

    const HandleDownload = () => {
        window.print();
    }
    return (
        <div id='no-print'>
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
                            <DialogHeader className={'my-3'} id='no-print'>
                                <DialogTitle>Apoointment Details</DialogTitle>
                                <DialogDescription>
                                    Get your appointment details
                                </DialogDescription>
                            </DialogHeader>
                            <div id='print-area'>
                                <h1 className='font-serif font-bold text-center border-b-4 border-red-500'>{appointment.hospital} HOSPITAL, {appointment.address}</h1>
                            </div>
                            <div>
                                <h1 className='text-sm font-bold bold'>Date: {appointment.appointmentDate}</h1>
                            </div>
                            <div className='grid grid-cols-2 gap-2 text-sm border-b-2'>
                                <div className='flex items-center justify-center col-span-2 gap-1'>Name : <span className='font-bold'>{appointment.name}</span></div>
                                <div className='flex items-center justify-center gap-1'>Age : <span className='font-bold'>{appointment.age}</span></div>
                                <div className='flex items-center justify-center gap-1'>Gender : <span className='font-bold'>{appointment.gender}</span></div>
                            </div>
                            <div>
                                <h1 className='font-serif font-bold'>Suggested Medicines</h1>
                            </div>
                            <ul>
                                {
                                    medicines.length > 0 ? medicines.map((item, idx) => (
                                        <li key={idx} className='mx-5 list-disc'><span className='font-mono text-lg font-bold'>{item.medicine}</span> - {item.consumption} - {item.days} days </li>
                                    ))
                                        : (
                                            <div>No Medicines prescribed yet</div>
                                        )
                                }
                            </ul>

                            <DialogFooter className={'my-3 flex items-center justify-between md:justify-between'} id='no-print'>
                                <Button onClick={HandleDownload} className='bg-green-500 rounded-full' variant='outline'>Print</Button>
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