// ImageGallery.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="flex flex-wrap -mx-2">
      {images.map((imageUrl, index) => (
        <motion.div
          key={index}
          className="w-1/2 md:w-1/3 lg:w-1/4 p-10 overflow-hidden"
          whileHover={{ scale: 2 }}
        >
          <img
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className="object-cover w-full h-full transition-transform duration-300 transform"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGallery;