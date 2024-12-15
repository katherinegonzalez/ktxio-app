import React, { useEffect, useState } from 'react';
import './Corousel.scss';

const Carousel = () => {

    const images = [
        "Nutriexercise.jpeg", // Cambia estas rutas por las de tus imágenes reales
        "Nutriexercise.jpeg",
        "Nutriexercise.jpeg",
        "Nutriexercise.jpeg", 
        "Nutriexercise.jpeg",
        "Nutriexercise.jpeg",
        "Nutriexercise.jpeg"
      ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [modalImage, setModalImage] = useState(null);

    const [itemsToShow, setItemsToShow] = useState(4); // Número de imágenes visibles

  useEffect(() => {
    // Ajustar el número de imágenes visibles según el ancho de la pantalla
    const updateItemsToShow = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(4);
      } else if (window.innerWidth >= 768) {
        setItemsToShow(2);
      } else {
        setItemsToShow(1);
      }
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);

    console.log('items to show: ', itemsToShow);

    return () => window.removeEventListener("resize", updateItemsToShow);
  }, [itemsToShow]);


  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsToShow >= images.length ? 0 : prevIndex + 1
    );
  };
    
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(0, images.length - itemsToShow)
        : prevIndex - 1
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
            gridTemplateColumns: `repeat(${images.length}, ${100 / itemsToShow}%)`,
          }}   
                >

                    {images.map((image, index) => (

                        <div key={index}
                             className="carousel-image"
                             onClick={() => openModal(image)}>
                            <img src={image} alt={`Slide ${index}`}/>
                            <div className="overlay">
                                <p>Texto sobre la imagen</p>
                            </div>
                        </div>

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