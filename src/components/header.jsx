import React from 'react'

export default function Header() {
    return (
        <header className='flex flex-wrap justify-center max-md:gap-2 items-center md:justify-between pt-2 px-2 md:pt-4 md:px-8'>
            <div className='flex gap-4 max-md:items-center'>
                <img src="/logo.png" alt="logo" className='w-24 max-md:h-8 md:w-32' />
                <div className='bg-[#ffffff] w-full h-12 md:h-8 rounded-lg flex flex-col md:flex-row max-md:py-2 gap-1 md:gap-2 items-center px-2'>
                    <div className='flex w-20 p-[1px] md:p-1 rounded-md bg-cream items-center text-center justify-center gap-1'>
                        <p className='font-bold text-[7px]'>SIGN UP NOW!</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                        </svg>
                    </div>
                    <div className='w-24'>
                        <div className='bg-Secondary rounded-lg flex px-[3px] h-4 py-0 items-center justify-center ' >
                            <h1 className='bg-white inline rounded-full w-full px-2 text-[7px] font-extrabold tracking-wider'>FREE TRIAL NOW!</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col text-center items-center font-extrabold'>
                <h1 className=' text-gray-700 tracking-widest text-sm'>YOUR FAVORITE</h1>
                <h2 className='text-xs text-cream bg-Secondary px-2 py-1 rounded-md '>DESKTOP WALLPAPER</h2>
            </div>

        </header>
    )
}
