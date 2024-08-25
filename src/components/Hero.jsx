import { useState } from 'react';
import { imageList } from '../data';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiResize } from "react-icons/gi";

export default function Hero({ selectedImage, setSelectedImage, setZoom }) {
    const [opacity, setOpacity] = useState(1)
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const handleImageChange = async (newImage) => {
        setOpacity(0)
        await delay(500)
        setSelectedImage(newImage)
        setOpacity(1)
    };

    const zoomImage = () => {
        setZoom(true)
    }

    return (
        <div className='flex flex-col md:flex-row gap-2 md:gap-6 px-8 pt-3 h-[60vh] items-center'>
            <div className='overflow-y-auto w-[150px] max-md:hidden flex flex-col gap-2 max-h-[30vh] scrollbar-hide'>
                <div className='flex flex-row items-center'>
                    <div className='w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-cream left-4'></div>
                    <div className='w-4 h-[3px] bg-white'></div>
                    <h1 className='text-xs lg:text-sm bg-white rounded-full w-24 text-center'>Ocean Eyes</h1>
                </div>

                {imageList.map((image) => (
                    <div
                        key={image.id}
                        className='group cursor-pointer relative flex items-start'
                        onClick={() => handleImageChange(image.img)}
                    >
                        <div className='flex relative flex-row items-center'>
                            <div className='w-1 absolute h-20 lg:h-28 left-[4px] lg:left-[6px] bg-cream'></div>
                            <div className='w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-cream left-4'></div>
                            <div className='w-6 h-[3px] bg-white'></div>
                            <div className='relative border-[4px] lg:border-4 border-white rounded-xl lg:rounded-3xl'>
                                <img src={image.img} alt={`Thumbnail ${image.id}`} className='w-12 h-12 lg:w-20 lg:h-20 rounded-xl lg:rounded-3xl' />
                                <div className='absolute w-12 h-12 lg:w-20 lg:h-20 rounded-xl lg:rounded-3xl inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center'>
                                    <span className='text-white text-sm font-extrabold'>Preview</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='relative w-[250px] md:w-[800px] h-[30vh] md:h-[60vh] bg-black rounded-3xl'>
                <button className='absolute top-2 right-4' onClick={zoomImage}>
                    <GiResize fill='white' />
                </button>
                <img
                    src={selectedImage}
                    alt="Main Display"
                    className='w-full h-full object-cover rounded-3xl'
                    style={{
                        transition: 'opacity .5s ease-in-out',
                        opacity: opacity,
                    }}
                />
            </div>

            <div className={`overflow-y-auto flex md:hidden w-[200px] bottom-12 gap-2 scrollbar-hide`}>
                {imageList.map((image, index) => (
                    <div key={image.id}
                        className='group cursor-pointer relative flex items-start border-2 rounded-xl border-white'
                        onClick={() => handleImageChange(image.img)}>
                        <div className='absolute rounded-xl w-12 h-12 inset-0 hover:cursor-pointer bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center'>
                            <span className='text-white  text-[10px] font-extrabold'>Preview</span>
                        </div>
                        <img src={image.img} alt={`Thumbnail ${index}`} className='min-w-12 min-h-12 rounded-xl object-cover' />
                    </div>
                ))}
            </div>

            <div className='w-[100px] z-10 flex flex-col md:flex-row max-md:absolute max-md:gap-[3px] bottom-24 left-8 items-center justify-center'>
                <div className='md:-rotate-90 md:-mr-10 rounded-full h-8 md:h-10 px-2 pt-2 flex relative items-center justify-center bg-cream gap-2 text-center'>
                    <div className='bg-white absolute w-2 h-1 top-1 md:top-2 right-4 rounded-full'></div>
                    <h1 className='bg-Secondary rounded-full w-full font-extrabold text-[9px] md:text-xs flex gap-1 px-3'>
                        <span>SOCIAL</span><span>MEDIA</span>
                    </h1>
                </div>

                <div className='flex flex-row md:flex-col  justify-center items-center gap-1'>
                    <div className='bg-cream p-1 md:p-2 rounded-full'>
                        <FaInstagram className='bg-black p-1 rounded-full' size={18} fill='white' />
                    </div>
                    <div className='bg-cream p-1 md:p-2 rounded-full'>
                        <FaFacebook className='bg-white rounded-full' size={18} />
                    </div>
                    <div className='bg-cream p-1 md:p-2 rounded-full'>
                        <FaXTwitter className='bg-black p-1 rounded-full' size={18} fill='white' />
                    </div>
                </div>

                <div className='rotate-180 md:rotate-90 rounded-full md:-ml-10 h-8 md:h-10 px-2 pt-2 flex relative items-center justify-center bg-cream gap-2 text-center'>
                    <div className='bg-white absolute w-2 h-1 top-1 md:top-2 left-4 rounded-full'></div>
                    <h1 className='bg-Secondary rounded-full font-extrabold text-[9px] md:text-xs flex gap-3 px-2 md:px-3'>
                        <span>FIND</span><span>US</span><span>ON</span>
                    </h1>
                </div>
            </div>
        </div>
    );
}
