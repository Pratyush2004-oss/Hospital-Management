import { usePathname } from 'next/navigation'
import React from 'react'
import Link from 'next/link';
import { MenuList } from '@/config/Specialization';

function Bottombar() {  
    const path = usePathname();
    
    return (
        <div>
            <div className='sticky bottom-0 left-0 w-full bg-white border shadow-md'>
                <div className='flex items-center p-3 justify-evenly'>
                    {MenuList.map((menu, idx) => (
                        <Link href={menu.path} key={idx} className={`flex flex-col items-center p-4 text-gray-500 hover:bg-primary hover:text-white rounded-lg cursor-pointer
                            ${path === menu.path && 'bg-primary text-white'}
                            `}>
                            <menu.icon />
                            <span className='hidden md:block'>{menu.name}</span>
                        </Link>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Bottombar