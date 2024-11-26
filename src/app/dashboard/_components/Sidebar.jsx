import { LibraryBig, LineChart, MessagesSquare, Shield } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
function Sidebar() {
    const MenuList = [
        {
            id: 1,
            name: 'My Forms',
            icon: LibraryBig,
            path: '/dashboard'
        },
        {
            id: 2,
            name: 'Responses',
            icon: MessagesSquare,
            path: '/dashboard/responses'
        },
        {
            id: 3,
            name: 'Analytics',
            icon: LineChart,
            path: '/dashboard/analytics'
        },
        {
            id: 4,
            name: 'Upgrade',
            icon: Shield,
            path: '/dashboard/upgrade'
        },
    ]

    const [formList, setFormList] = useState();
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