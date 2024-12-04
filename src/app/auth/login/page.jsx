'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label';
import React, { useState } from 'react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Login = () => {
    const [input, setInput] = useState({
        email: '',
        password: '',
        loginType: ''
    });
    return (
        <div className='flex items-center justify-between p-7 min-h-[85vh]'>
            <div className='grid w-full grid-cols-1 gap-5 mx-auto border-4 border-red-500 rounded-lg shadow-lg sm:w-1/2 p-7'>
                <div className='border-b-4 border-red-500'>
                    <h1 className='font-mono text-3xl font-bold text-center'>Login</h1>
                </div>
                <div className='text-lg font-bold'>
                    <Label>Email</Label>
                    <Input type='email' placeholder='Email' value={input.email} onChange={(e) => setInput({ ...input, email: e.target.value })} />
                </div>
                <div className='text-lg font-bold'>
                    <Label>Password</Label>
                    <Input type='password' placeholder='Password' value={input.password} onChange={(e) => setInput({ ...input, password: e.target.value })} />
                </div>
                <div className='text-lg font-bold'>
                    <Label>Login Type</Label>
                    <RadioGroup className='flex items-center justify-evenly' onValueChange={(e) => setInput({ ...input, loginType: e })}>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="doctor" />
                            <Label>Doctor</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="medicos" />
                            <Label>Medicos</Label>
                        </div>
                    </RadioGroup>
                </div>
                <div className='text-lg font-bold'>
                    <Button variant='outline' className='w-full bg-red-300 rounded-full'>Login</Button>
                    <h1 className='m-1 text-sm'>Don't have an account?<Link href={'/auth/register'} className='text-blue-500 underline'>Register</Link></h1>
                </div>
            </div>
        </div>
    )
}

export default Login