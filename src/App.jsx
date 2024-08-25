import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./components/section";
import ZoomMode from "./components/ZoomMode";

function App() {
  const [selectedImage, setSelectedImage] = useState('/grass.avif');
  const [zoom, setZoom] = useState(false);

  return (
    <div className='w-screen h-screen relative flex items-center justify-center'>
      <AnimatePresence>
        {!zoom ? (
          <motion.div
            key="background"
            className='absolute top-0 left-0 w-full h-full'
            initial={{ opacity: 0, backgroundPosition: "center top" }}
            animate={{ opacity: 1, backgroundPosition: "center center" }}
            exit={{ opacity: 0, backgroundPosition: "center bottom" }}
            transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
            style={{
              backgroundImage: `url(${selectedImage})`,
              backgroundSize: 'cover',
              filter: 'blur(8px)',
              zIndex: -1,
            }}
          />
        ) : (
          <motion.div
            key="backgroundZoomed"
            className='absolute top-0 left-0 w-full h-full'
            initial={{ opacity: 0, backgroundPosition: "center top" }}
            animate={{ opacity: 1, backgroundPosition: "center center" }}
            exit={{ opacity: 0, backgroundPosition: "center bottom" }}
            transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
            style={{
              backgroundImage: `url(${selectedImage})`,
              backgroundSize: 'cover',
              filter: 'blur(8px)',
              zIndex: -1,
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!zoom ? (
          <motion.div
            key="section"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}  // Smooth easing
          >
            <Section
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
              setZoom={setZoom}
            />
          </motion.div>
        ) : (
          <motion.div
            key="zoomMode"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}  // Smooth easing
          >
            <ZoomMode
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
              setZoom={setZoom}
              zoom={zoom}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
