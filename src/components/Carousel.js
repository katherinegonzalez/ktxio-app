import React, { useState } from 'react';
import './Corousel.scss';

const Carousel = () => {

    const images = [
        "Nutriexercise.jpeg", // Cambia estas rutas por las de tus imágenes reales
        "Nutriexercise.jpeg",
        "Nutriexercise.jpeg",
        "Nutriexercise.jpeg", 
        "Nutriexercise.jpeg",
        "Nutriexercise.jpeg"
      ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [modalImage, setModalImage] = useState(null);

      // Determina cuántas imágenes mostrar dependiendo del tamaño de la pantalla
    const itemsToShow = window.innerWidth >= 1024 ? 4 : 1;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex + itemsToShow >= images.length ? 0 : prevIndex + itemsToShow
        );
    };
    
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0
            ? Math.max(0, images.length - itemsToShow)
            : prevIndex - itemsToShow
        );
    };

    const openModal = (image) => {
        setModalImage(image); // Muestra la imagen seleccionada en el modal
      };
    
    const closeModal = () => {
        setModalImage(null); // Cierra el modal
      };
    

    return (
        <div className="projects-carousel">
            <button className="carousel-btn prev" onClick={prevSlide}>
              <img src="arrow-left.svg" alt="flecha izquierda"/>
            </button>
            <div className="carousel-container">
                <div className="carousel-track" 
                     style={{
                     transform: `translateX(-${(currentIndex / itemsToShow) * 100}%)`,
                     transition: "transform 0.5s ease-in-out",
                     display: "flex",
                    }}     
                >

                    {images.map((image, index) => (
                        <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className="carousel-image"
                        onClick={() => openModal(image)}
                        />
                    ))}

                </div>
            </div>
            <button className="carousel-btn next" onClick={nextSlide}>
              <img src="arrow-right.svg" alt="flecha derecha"/>
            </button>

            {/* Modal */}
            {modalImage && (
                <div className="modal" onClick={closeModal}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <img src={modalImage} alt="Ampliada" className="modal-image" />
                    <button className="modal-close" onClick={closeModal}>
                    ×
                    </button>
                </div>
                </div>
            )}

          </div>
    );
} 

export default Carousel;