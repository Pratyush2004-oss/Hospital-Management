'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { specialization } from '@/config/Specialization';
import Link from 'next/link';
import React, { useState } from 'react'

const Register = () => {
    const [input, setInput] = useState({
        name: '',
        experience: '',
        email: '',
        password: '',
        hospital: '',
        specialization: '',
        password: ''
    });
    return (
        <div className='flex items-center justify-between min-h-screen'>
            <div className='grid w-2/3 grid-cols-1 gap-5 mx-auto border-4 border-red-500 rounded-lg shadow-lg p-7 md:grid-cols-2'>

                <div className='border-b-4 border-red-500 md:col-span-2'>
                    <h1 className='font-mono text-3xl font-bold text-center'>Register</h1>
                </div>
                <div className='text-lg font-bold'>
                    <Label>Name</Label>
                    <Input type='text' placeholder='Name' />
                </div>
                <div className='text-lg font-bold'>
                    <Label>Experience</Label>
                    <Input type='number' placeholder='Experience' value={input.experience} onChange={(e) => setInput({ ...input, experience: e.target.value })} />
                </div>
                <div className='text-lg font-bold'>
                    <Label>Email</Label>
                    <Input placeholder='Email' type='email' value={input.email} onChange={(e) => setInput({ ...input, email: e.target.value })} />
                </div>
                <div className='text-lg font-bold'>
                    <Label>Specialization</Label>
                    <Select onValueChange={(e) => setInput({ ...input, problem: e })}>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Specializition" />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                specialization.map((item) => (
                                    <SelectItem key={item.id} value={item.value}>{item.name}</SelectItem>
                                ))
                            }
                        </SelectContent>
                    </Select>                </div>
                <div className='text-lg font-bold'>
                    <Label>Hospital</Label>
                    <Input placeholder='Hospital' value={input.hospital} onChange={(e) => setInput({ ...input, hospital: e.target.value })} />
                </div>
                <div className='text-lg font-bold'>
                    <Label>Password</Label>
                    <Input placeholder='Password' type='password' value={input.password} onChange={(e) => setInput({ ...input, password: e.target.value })} />
                </div>
                <div className='text-lg font-bold md:col-span-2'>
                    <Button variant='outline' className='w-full bg-red-300 rounded-full'>Register</Button>
                    <h1 className='m-1 text-sm'>Already have an account?<Link href={'/auth/login'} className='text-blue-500 underline'>Login</Link></h1>
                </div>

            </div>

        </div>
    )
}

export default Register