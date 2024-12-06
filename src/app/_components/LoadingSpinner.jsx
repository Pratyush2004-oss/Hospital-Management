import { Loader2 } from 'lucide-react'
import React from 'react'

const LoadingSpinner = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <Loader2 className='text-red-500 size-64 animate-spin' />
        </div>
    )
}

export default LoadingSpinner