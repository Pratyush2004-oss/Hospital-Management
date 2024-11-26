import { LibraryBig, LineChart, MessagesSquare, Shield } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';

function Bottombar() {
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


    const getFormList = async () => {
        const result = await db.select().from(JsonForms)
            .where(eq(JsonForms.createdBy, user?.primaryEmailAddress?.emailAddress))
            .orderBy(desc(JsonForms.id));
        setFormList(result)
    }

    return (
        <div>
            <div className='sticky bottom-0 left-0 w-full bg-white border shadow-md'>
                <div className='px-6 py-2 border'>

                </div>
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