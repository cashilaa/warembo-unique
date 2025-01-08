'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const images = [
  { src: '/placeholder.svg?height=300&width=400', alt: 'Community event', caption: 'Annual community gathering' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'Workshop', caption: 'Skills development workshop' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'Advocacy', caption: 'Advocacy march for rights' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'Support group', caption: 'Weekly support group meeting' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'Fundraiser', caption: 'Charity fundraiser event' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'Education', caption: 'Public education campaign' },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <div className="container mx-auto px-4">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-teal-700 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Gallery
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative cursor-pointer"
            onClick={() => setSelectedImage(index)}
          >
            <Image 
              src={image.src} 
              alt={image.alt} 
              width={400} 
              height={300} 
              className="rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
              <p>{image.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedImage !== null && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <Image 
              src={images[selectedImage].src} 
              alt={images[selectedImage].alt} 
              width={800} 
              height={600} 
              className="rounded-lg"
            />
            <p className="absolute bottom-4 left-4 right-4 text-white text-center bg-black bg-opacity-50 p-2 rounded">
              {images[selectedImage].caption}
            </p>
          </div>
        </motion.div>
      )}
    </div>
  )
}

