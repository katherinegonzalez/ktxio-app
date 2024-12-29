import React, { useEffect, useState } from 'react';
import './Corousel.scss';
import Modal from './Modal';

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

    const projectsList = [
        {image: 'Nutriexercise.jpeg', title: 'NUTRIEXERCISE', url: "", video: 'nutriexercise.mp4'}, // Cambia estas rutas por las de tus imágenes reales
        {image: 'Nutriexercise.jpeg', title: 'NUTRIEXERCISE', url: ""},
        {image: 'Nutriexercise.jpeg', title: 'NUTRIEXERCISE', url: ""},
        {image: 'Nutriexercise.jpeg', title: 'NUTRIEXERCISE', url: ""},
        {image: 'Nutriexercise.jpeg', title: 'NUTRIEXERCISE', url: ""},
        {image: 'Nutriexercise.jpeg', title: 'NUTRIEXERCISE', url: ""}
      ];
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [modalImage, setModalImage] = useState(null);
    const [modalTitle, setModalTitle] = useState('');
    const [projectVideo, setProjectVideo] = useState('');

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

    const [showModal, setShowModal] = useState(false);

    const openModal = ({title, video, image}) => {
      setModalTitle(title)
      setProjectVideo(video)
      setModalImage(image)
      setShowModal(true)
    };
    const closeModal = () => setShowModal(false);
    

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

                    {projectsList.map((project, index) => (

                        <div key={index}
                             className="carousel-image"
                             onClick={() => openModal({title: project.title, video: project.video, image: project.image})}>
                            <img src={project.image} alt={`Slide ${index}`}/>
                            <div className="overlay">
                                <p>{project.title}</p>
                            </div>
                            <div className="sourceCode">
                                <a href="https://github.com/katherinegonzalez">SOURCE CODE</a>
                            </div>
                        </div>

                    ))}

                </div>
            </div>
            <button className="carousel-btn next" onClick={nextSlide}>
              <img src="arrow-right.svg" alt="flecha derecha"/>
            </button>

            <Modal show={showModal} onClose={closeModal} title={modalTitle} video={projectVideo} image={modalImage}/>
           


          </div>
    );
} 

export default Carousel;