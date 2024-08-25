import { useEffect, useState } from "react";
import { TbWindowMinimize } from "react-icons/tb";
import { imageList } from '../data';
import { motion, AnimatePresence } from 'framer-motion';

export default function ZoomMode({ selectedImage, setSelectedImage, setZoom, zoom }) {
    const [showImages, setShowImages] = useState(false);

    useEffect(() => {
        if (zoom) {
            const timer = setTimeout(() => {
                setShowImages(true);
            }, 800);
            return () => clearTimeout(timer);
        } else {
            setShowImages(false);
        }
    }, [zoom]);

    const handleImageChange = (newImage) => {
        setSelectedImage(newImage);
    };

    const setDefault = () => {
        setShowImages(false)
        setZoom(false);
    };

    return (
        <>
            <div
                className='absolute top-0 left-0 w-full h-full'
                style={{
                    backgroundImage: `url(${selectedImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'background-image 1s ease-in-out, filter 1s ease-in-out',
                    zIndex: -1,
                }}
            />
            {showImages && (
                <>
                    <button className='absolute top-4 right-4' onClick={setDefault}>
                        <TbWindowMinimize size={32} className='text-white' />
                    </button>

                    <div className={`overflow-y-auto flex absolute -ml-24 md:right-64 lg:right-[500px]  w-[200px] md:w-[300px] bottom-24 md:bottom-12 gap-2 scrollbar-hide`}>
                        <AnimatePresence>
                            {imageList.map((image, index) => (
                                <motion.div
                                    key={index}
                                    className='relative group border-2 md:border-4 border-white rounded-xl md:rounded-3xl'
                                    onClick={() => handleImageChange(image.img)}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 2, ease: 'easeInOut' }}
                                >
                                    <div className='absolute rounded-xl md:rounded-3xl w-12 h-12 md:w-20 md:h-20 inset-0 hover:cursor-pointer bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center'>
                                        <span className='text-white text-[10px] md:text-sm font-extrabold'>Preview</span>
                                    </div>
                                    <img src={image.img} alt={`Thumbnail ${index}`} className='max-w-12 min-h-12 md:min-w-20 md:min-h-20 rounded-xl md:rounded-3xl object-cover' />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </>
            )}

            <img src="/stars.png" alt="stars" className="absolute size-8 md:size-12 left-6 bottom-24 md:bottom-12" />
        </>
    );
}
