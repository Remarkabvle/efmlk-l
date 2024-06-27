import React, { useEffect } from 'react';
import './Modal.scss';

const Modal = ({ title, image, onClose }) => {
  useEffect(() => {
    // Add class to body to prevent scrolling
    document.body.style.overflow = 'hidden';

    return () => {
      // Remove class from body when modal is closed
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2 className="modal-title">{title}</h2>
        <img src={image} alt={title} className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;
