import React from 'react'
import { HiDownload } from "react-icons/hi";

export default function Download({selectedImage}) {
    return (
        <section className='absolute w-full flex flex-col md:flex-row justify-between px-12 max-md:right-5 bottom-8 lg:bottom-10'>
            <div className='flex'>
                <img src="/stars.png" alt="stars" className='size-8 z-10 md:size-20 lg:size-24 max-md:absolute left-8 -top-3' />
                <div className='font-fredoka flex flex-col max-md:absolute -right-2 bottom-20'>
                    <h1 className='bg-primary rounded-r-full w-36 md:w-52 py-2 lg:py-2 px-3'><span className='bg-white rounded-full px-2 py-2 flex gap-1 text-xs md:text-xl'><p>Satisfy</p><p>Your</p><p>Eyes</p></span></h1>
                    <h1 className='bg-primary rounded-r-full md:py-3 px-3'><span className='bg-white rounded-full px-2 py-2 items-center text-xs md:text-xl'>With Ocean Eyes App</span></h1>
                </div>
            </div>
            <div className='mr-6 px-2 py-2 max-md:absolute -top-12 left-16 rounded-full bg-primary'>
                <div className='bg-primary px-3 py-2 flex flex-col items-center border-[.3rem] w-60 h-28 border-cream rounded-full'>
                    <div className="relative grid grid-cols-2">
                        <div className='flex flex-col justify-center px-2 items-center gap-1'>
                            <h2 className="text-main font-bold text-[.7rem]">Download Now!</h2>
                            <h1 className="text-black font-extrabold text-2xl font-poppins leading-4 text-center">100K+ <span className="block text-sm font-extrabold">USERS</span></h1>

                        </div>

                        <div>
                            <div className="flex flex-col items-center gap-1">
                                <a download="" href={`${selectedImage}`} className=' bg-main border-2 border-cream rounded-full px-6 py-1 hover:cursor-pointer'>
                                    <HiDownload className='fill-cream ' size={24} />
                                </a>
                                <div className="flex items-center gap-[3px] bg-main border-[1px] px-1 rounded-sm border-cream">
                                    <span className="text-yellow-400 text-[.4rem]">★★★★★</span>
                                    <img src="/user1.png" alt="User 1" className="w-2 h-2 object-cover object-center rounded-full" />
                                    <img src="/user2.png" alt="User 2" className="w-2 h-2 object-cover object-center rounded-full" />
                                    <img src="/user3.png" alt="User 3" className="w-2 h-2 object-cover object-center rounded-full" />
                                    <span className="text-blue text-[.4rem]">→</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-1 items-center justify-evenly w-full'>
                        <p className="text-black text-[.5rem] font-bold">Available On All Platform</p>
                        <div className='flex gap-1 items-center'>
                            <div className='border-[1px] p-[2px] rounded-full border-black'>
                                <img src="/playstore.png" alt="" className='w-2 h-2  object-cover object-center rounded-full' />
                            </div>
                            <img src="/A.png" alt="" className='w-[19px] h-[19px] object-cover object-center rounded-full' />
                            <div className='border-[1px] p-[2px] rounded-full border-black'>
                                <img src="/microsoft.png" alt="" className='w-2 h-2 border-[2px] border-black object-cover object-center rounded-full' />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
