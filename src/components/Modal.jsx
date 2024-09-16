import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Modal = ({ item, onClose }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-[90vh] max-h-80vh overflow-y-auto relative">
        <div className="relative">
          <Slider {...sliderSettings}>
            {item.photos.map((photo, index) => (
              <img key={index} src={photo} alt={item.name} />
            ))}
          </Slider>
        </div>

        <div>
          <div className="flex justify-between">
            <h3 className="text-2xl font-semibold text-pink-900 mb-2 mt-8 text-left">
              {item.name}
            </h3>
            <p className="text-lg text-accent mb-2 mt-[37px] text-right">
              {item.technology}
            </p>
          </div>
          <p className="text-left">{item.description}</p>
        </div>

        <div className="flex justify-between items-center mt-4">
          {/* Mostrar "Go to Site" solo si el proyecto no es Project5 */}
          {item.id !== '5' && (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg bg-pink-900 hover:bg-accent-hover justify-between"
            >
              Go to Site
            </a>
          )}

          {/* Mostrar el botón "Ver Proyecto en PDF" solo para Project5 */}
          {item.id === '5' && (
            <a
              href={item.pdf} // Asegúrate de que el enlace del PDF esté presente en los datos del proyecto.
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg bg-pink-900 hover:bg-accent-hover"
            >
              Ver Proyecto en PDF
            </a>
          )}

          <button
            className="btn btn-lg bg-pink-900 hover:bg-accent-hover"
            onClick={onClose}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
