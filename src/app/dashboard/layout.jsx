'use client'
import React from 'react'
import Sidebar from './_components/Sidebar'
import Bottombar from './_components/Bottombar'

const layout = ({ children }) => {
    return (
        <div>
            <div className='fixed hidden md:block md:w-56'>
                <Sidebar />
            </div>
            <div className='md:ml-56 md:pb-0'>
                {children}
            </div>
            <div className='fixed bottom-0 left-0 w-full md:hidden'>
                <Bottombar />
            </div>
        </div>
    )
}

export default layout