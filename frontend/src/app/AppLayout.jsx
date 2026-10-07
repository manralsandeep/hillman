import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Headroom from 'react-headroom';
const AppLayout = () => {
    return (
        <div className='flex flex-col min-h-screen bg-[#F8FAFC]'>
            <Headroom>
                <Navbar />
            </Headroom>

            <main className='flex-1 width-full '>
                <Outlet />
            </main>

        </div>
    )
}

export default AppLayout
