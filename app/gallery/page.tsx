'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const images = [
  { 
    src: '/gallery/community-event.jpg', 
    alt: 'Community event', 
    caption: 'Annual community gathering',
    category: 'Community'
  },
  { 
    src: '/gallery/workshop.jpg', 
    alt: 'Workshop', 
    caption: 'Skills development workshop',
    category: 'Education'
  },
  { 
    src: '/gallery/advocacy.jpg', 
    alt: 'Advocacy', 
    caption: 'Advocacy march for rights',
    category: 'Activism'
  },
  { 
    src: '/gallery/support-group.jpg', 
    alt: 'Support group', 
    caption: 'Weekly support group meeting',
    category: 'Support'
  },
  { 
    src: '/gallery/fundraiser.jpg', 
    alt: 'Fundraiser', 
    caption: 'Charity fundraiser event',
    category: 'Fundraising'
  },
  { 
    src: '/gallery/education.jpg', 
    alt: 'Education', 
    caption: 'Public education campaign',
    category: 'Education'
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState('All')

  const categories = ['All', ...new Set(images.map(img => img.category))]

  const filteredImages = filter === 'All' 
    ? images 
    : images.filter(img => img.category === filter)

  return (
    <div className="container section">
      <motion.h1 
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Gallery
      </motion.h1>
      
      <div className="gallery-filter">
        {categories.map(category => (
          <button 
            key={category}
            className={`gallery-filter-tag ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="gallery-grid">
        {filteredImages.map((image, index) => (
          <motion.div 
            key={index}
            className="gallery-item"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedImage(images.indexOf(image))}
          >
            <div className="gallery-item-image">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="gallery-image" 
              />
              <div className="gallery-item-overlay">
                <span className="gallery-item-category">{image.category}</span>
              </div>
            </div>
            <div className="gallery-item-caption">
              {image.caption}
            </div>
          </motion.div>
        ))}
      </div>

      {selectedImage !== null && (
        <motion.div 
          className="gallery-lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <div className="gallery-lightbox-content">
            <button 
              className="gallery-lightbox-close"
              onClick={() => setSelectedImage(null)}
            >
              &#10005;
            </button>
            <img 
              src={images[selectedImage].src} 
              alt={images[selectedImage].alt} 
              className="gallery-lightbox-image" 
            />
            <div className="gallery-lightbox-caption">
              {images[selectedImage].caption}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
