import React, { useState } from 'react';
import './Modal.scss';

const Modal = ({ show, onClose, title, video='', image='' }) => {
  if (!show) {
    return null; // Si no se debe mostrar el modal, no renderiza nada
  }

  const projectvideo = `videos/${video}`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className='modal-header'>
          <h2>{title}</h2>
          <img src="icons/close.svg" alt="cerrar modal" onClick={onClose}/>
        </div>
        <div className='modal-content'>

        <video height='300' controls autoplay loop muted poster="imagen-poster.jpg">
          <source src={projectvideo} type="video/mp4" />
            Tu navegador no soporta el elemento <code>video</code>.
        </video>

        </div>

      </div>
    </div>
  );
};

export default Modal;
