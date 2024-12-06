import Link from 'next/link'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from 'lucide-react'
import { useStaffStore } from '@/store/staffStore'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Navbar = () => {
    const { staff } = useStaffStore();
    return (
        <nav className='sticky top-0 z-50 flex items-center justify-between p-4 bg-white '>
            <Link href={'/'} className='text-3xl font-extrabold'>Hospi<span className='text-red-500'>TAL</span></Link>
            <div className='items-center hidden gap-4 md:flex'>
                <Link href={'/#doctors'} className='text-lg font-bold'>DOCTORS</Link>
                <Link href={'/#services'} className='text-lg font-bold'>SERVICES</Link>
                <Link href={'/#medicos'} className='text-lg font-bold'>MEDICOS</Link>
                <Link href={'/#appointment'} className='text-lg font-bold'>APPOINTMENT</Link>
                {
                    staff ? (
                        <Avatar>
                            <AvatarImage src="/images/home-img.svg" />
                            <AvatarFallback>HP</AvatarFallback>
                        </Avatar>
                    ) : (
                        <Link href={'/auth/login'} className='text-lg font-bold text-blue-500 underline'>Login</Link>
                    )
                }
            </div>
            <div className='md:hidden'>
                <DropdownMenu >
                    <DropdownMenuTrigger>{
                        staff ? (
                            <Avatar>
                                <AvatarImage src="/images/home-img.svg" />
                                <AvatarFallback>HP</AvatarFallback>
                            </Avatar>
                        ) : (
                            <Menu />
                        )
                    }</DropdownMenuTrigger>
                    <DropdownMenuContent className='md:hidden'>
                        {
                            staff ? (
                                <DropdownMenuLabel>
                                    <Link href={'/dashboard'}>Dashboard</Link>
                                </DropdownMenuLabel>
                            ) : (
                                <DropdownMenuLabel>
                                    <Link href={'/auth/login'}>Login</Link>
                                </DropdownMenuLabel>
                            )
                        }
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link href={'/#doctors'}>DOCTORS</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href={'/#services'}>SERVICES</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href={'/#midicos'}>MEDICOS</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href={'/#appointment'}>APPOINTMENT</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    )
}

export default Navbar