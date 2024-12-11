import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Problem } from '@/config/Specialization'
import { usePatientStore } from '@/store/patientStore'
import { InfinityIcon } from 'lucide-react'
import React, { useState } from 'react'
import ViewAppointment from './ViewAppointment'

const Appointment = () => {
    const [input, setInput] = useState({
        name: '',
        age: '',
        gender: '',
        address: '',
        hospital:'',
        problem: '',
        mobile: '',
        appointmentDate: ''
    });
    const { loading, bookAppointment } = usePatientStore();

    const handleSubmit = (e) => {
        e.preventDefault();
        bookAppointment(input);

        setInput({
            name: '',
            age: '',
            gender: '',
            address: '',
            problem: '',
            mobile: '',
            hospital:'',
            appointmentDate: ''
        })
    }
    return (
        <div className='col-span-2'>
            <h1 className='font-serif text-3xl font-extrabold'>Book Your Appointment</h1>
            <div className='grid grid-cols-1 gap-4 p-4 my-5 border-2 rounded-lg shadow-lg md:grid-cols-2'>
                <div className='font-bold'>
                    <Label className='font-bold'>Full Name</Label>
                    <Input placeholder='Name' required value={input.name} onChange={(e) => setInput({ ...input, name: e.target.value })} />
                </div>
                <div className='font-bold'>
                    <Label className='font-bold'>Age</Label>
                    <Input placeholder='Age' required min={0} type='number' value={input.age} onChange={(e) => setInput({ ...input, age: e.target.value })} />
                </div>
                <div className='font-bold'>
                    <Label className='font-bold'>Gender</Label>
                    <RadioGroup className='flex items-center justify-evenly' onValueChange={(e) => setInput({ ...input, gender: e })}>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="male" />
                            <Label>Male</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="female" />
                            <Label>Female</Label>
                        </div>
                    </RadioGroup>
                </div>
                <div className='font-bold'>
                    <Label className='font-bold'>Hospital</Label>
                    <Input placeholder='Hospital' required value={input.hospital} onChange={(e) => setInput({ ...input, hospital: e.target.value })} />
                </div>
                <div className='font-bold'>
                    <Label className='font-bold'>City</Label>
                    <Input placeholder='Enter City' required value={input.address} onChange={(e) => setInput({ ...input, address: e.target.value })} />
                </div>
                <div className='font-bold'>
                    <Label className='font-bold'>Problem</Label>
                    <Select onValueChange={(e) => setInput({ ...input, problem: e })}>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Problem" />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                Problem.map((item) => (
                                    <SelectItem key={item} value={item}>{item}</SelectItem>
                                ))
                            }
                        </SelectContent>
                    </Select>
                </div>
                <div className='font-bold'>
                    <Label className='font-bold'>Mobile Number</Label>
                    <Input placeholder='Mobile Number' required value={input.mobile} onChange={(e) => setInput({ ...input, mobile: e.target.value })} />
                </div>
                <div className='font-bold'>
                    <Label className='font-bold'>Appointment Date</Label>
                    <Input type='date' required placeholder='Appointment Date' value={input.appointmentDate} onChange={(e) => setInput({ ...input, appointmentDate: e.target.value })} />
                </div>

                <div className='md:col-span-2'>
                    <Button disabled={loading} onClick={handleSubmit} className='w-full text-lg font-bold text-red-500 bg-transparent border-2 border-red-500 rounded-full' variant={'outline'} >
                        {loading ? <InfinityIcon className='animate-pulse' /> : 'Book Appointment'}
                    </Button>
                </div>
            </div>
            {/* View Appointment */}
            <ViewAppointment/>
        </div>
    )
}

export default Appointment