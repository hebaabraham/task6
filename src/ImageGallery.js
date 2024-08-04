import React, { useState } from 'react';
import ImageModal from './ImageModal';
import './ImageGallery.css';

const images = [
  '/image1.jpg',
  '/image2.jpg',
  '/image3.jpg',
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="image-gallery">
        {images.map((image, index) => (
          <image
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            onClick={() => openModal(image)}
            className="gallery-image"
          />
        ))}
      </div>
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default ImageGallery;
