import Header from './header'
import Hero from './Hero'
import Download from './Download';

export default function Section({ selectedImage, setSelectedImage, setZoom }) {

    return (
        <div className='bg-primary relative rounded-3xl w-[300px] md:w-[800px] lg:w-[1000px] max-md:-top-8 h-[80vh]'>
            <Header />
            <Hero selectedImage={selectedImage} setSelectedImage={setSelectedImage} setZoom={setZoom}/>
            <Download selectedImage={selectedImage} />
        </div>
    )
}
