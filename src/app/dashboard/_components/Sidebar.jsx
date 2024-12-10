import { usePathname } from 'next/navigation'
import React from 'react'
import Link from 'next/link';
import { MenuList } from '@/config/Specialization';
function Sidebar() {
    
    const path = usePathname();

    return (
        <div>
            <div className='h-screen border shadow-md'>
                <div
                    className='p-5'>
                    {MenuList.map((menu, idx) => (
                        <Link
                            href={menu.path}
                            key={idx} className={`flex items-center gap-3 p-4 mb-3 text-gray-500 hover:bg-primary hover:text-white rounded-lg cursor-pointer
                        ${path === menu.path && 'bg-primary text-white'}
                        `}>
                            <menu.icon />
                            {menu.name}
                        </Link>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar