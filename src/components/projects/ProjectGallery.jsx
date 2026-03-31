import { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';

const ProjectGallery = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  if (!galleryImages || galleryImages.length === 0) {
    return null;
  }

  const handleOpenImageModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1);
  };

  return (
    <div className="pd-gallery">
      {openModal && (
        <div className="pd-gallery__lightbox sliderWrap" role="dialog" aria-modal="true">
          <Icon.XCircleFill
            size={30}
            color="#c4a035"
            className="btnClose pd-gallery__close"
            onClick={handleCloseModal}
          />
          <Icon.ArrowLeftCircleFill
            size={30}
            color="#c4a035"
            className="btnPrev pd-gallery__nav pd-gallery__nav--prev"
            onClick={prevSlide}
          />
          <Icon.ArrowRightCircleFill
            size={30}
            color="#c4a035"
            className="btnNext pd-gallery__nav pd-gallery__nav--next"
            onClick={nextSlide}
          />
          <div className="fullScreenImage pd-gallery__stage">
            <img
              src={`${process.env.REACT_APP_IMG_BASEURL}/projects/${galleryImages[slideNumber]}`}
              alt=""
            />
          </div>
        </div>
      )}

      <div className="pd-gallery__grid galleryWrap">
        {galleryImages.map((slide, index) => (
          <button
            type="button"
            key={`${slide}-${index}`}
            className="pd-gallery__cell single"
            onClick={() => handleOpenImageModal(index)}
          >
            <img
              src={`${process.env.REACT_APP_IMG_BASEURL}/projects/${slide}`}
              alt=""
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
