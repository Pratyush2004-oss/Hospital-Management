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

import React, { useState } from 'react'

const Appointment = () => {
    const [input, setInput] = useState({
        name: '',
        age: '',
        gender: '',
        address: '',
        problem: '',
        mobile: '',
        appointmentDate: ''
    });
    return (
        <div className='col-span-2'>
            <h1 className='font-serif text-3xl font-extrabold'>Book Your Appointment</h1>
            <div className='grid grid-cols-1 gap-4 p-4 my-5 border-2 rounded-lg shadow-lg sm:grid-cols-2'>
                <div className='font-bold'>
                    <Label className='font-bold'>Full Name</Label>
                    <Input placeholder='Name' value={input.name} onChange={(e) => setInput({ ...input, name: e.target.value })} />
                </div>
                <div className='font-bold'>
                    <Label className='font-bold'>Age</Label>
                    <Input placeholder='Age' type='number' value={input.age} onChange={(e) => setInput({ ...input, age: e.target.value })} />
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
                    <Label className='font-bold'>Address</Label>
                    <Input placeholder='Address' />
                </div>
                <div className='font-bold'>
                    <Label className='font-bold'>Problem</Label>
                    <Select>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Problem" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className='font-bold'>
                    <Label className='font-bold'>Mobile Number</Label>
                    <Input placeholder='Mobile Number' value={input.mobile} onChange={(e) => setInput({ ...input, mobile: e.target.value })} />
                </div>
                <div className='font-bold'>
                    <Label className='font-bold'>Appointment Date</Label>
                    <Input type='date' placeholder='Appointment Date' value={input.appointmentDate} onChange={(e) => setInput({ ...input, appointmentDate: e.target.value })} />
                </div>

                <div className='col-span-2'>
                    <Button className='w-full text-lg font-bold text-red-500 bg-transparent rounded-full' variant={'outline'} >Submit</Button>
                </div>


            </div>
        </div>
    )
}

export default Appointment