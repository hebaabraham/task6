import React from 'react';
import './ImageModal.css';

const ImageModal = ({ image, onClose }) => {
  return (
    <div className="modal">
      <span className="close" onClick={onClose}>&times;</span>
      <img className="modal-content" src={image} alt="Modal" />
    </div>
  );
};

export default ImageModal;
