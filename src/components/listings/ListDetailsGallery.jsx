import { useState, useEffect, useCallback } from 'react';
import * as Icon from 'react-bootstrap-icons';

const imgBase = `${process.env.REACT_APP_IMG_BASEURL}/shop/`;

const ListDetailsGallery = ({ galleryImages, listingTitle = 'Property' }) => {
  const images = (galleryImages || []).map((s) => String(s).trim()).filter(Boolean);
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (slideNumber >= images.length) setSlideNumber(0);
  }, [images.length, slideNumber]);

  const prevSlide = useCallback(() => {
    if (!images.length) return;
    setSlideNumber((n) => (n === 0 ? images.length - 1 : n - 1));
  }, [images.length]);

  const nextSlide = useCallback(() => {
    if (!images.length) return;
    setSlideNumber((n) => (n + 1 >= images.length ? 0 : n + 1));
  }, [images.length]);

  useEffect(() => {
    if (!openModal) return undefined;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') setOpenModal(false);
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [openModal, prevSlide, nextSlide]);

  if (!images.length) {
    return (
      <div
        className="listing-pdp-gallery listing-pdp-gallery--empty"
        role="img"
        aria-label="No photos available"
      >
        <Icon.Image size={40} aria-hidden />
        <span>No photos available for this listing.</span>
      </div>
    );
  }

  const mainSrc = `${imgBase}${images[slideNumber]}`;
  const alt = `${listingTitle} — photo ${slideNumber + 1} of ${images.length}`;

  return (
    <div className="listing-pdp-gallery">
      <div className="listing-pdp-gallery__main">
        <button
          type="button"
          className="listing-pdp-gallery__nav listing-pdp-gallery__nav--prev"
          onClick={prevSlide}
          aria-label="Previous image"
        >
          <Icon.ChevronLeft size={26} aria-hidden />
        </button>
        <button
          type="button"
          className="listing-pdp-gallery__stage"
          onClick={() => setOpenModal(true)}
          aria-label={`Open image ${slideNumber + 1} full screen`}
        >
          <img src={mainSrc} alt={alt} loading="eager" decoding="async" />
        </button>
        <button
          type="button"
          className="listing-pdp-gallery__nav listing-pdp-gallery__nav--next"
          onClick={nextSlide}
          aria-label="Next image"
        >
          <Icon.ChevronRight size={26} aria-hidden />
        </button>
        <span className="listing-pdp-gallery__counter" aria-live="polite">
          {slideNumber + 1} / {images.length}
        </span>
      </div>

      {images.length > 1 && (
        <div className="listing-pdp-gallery__thumbs" role="tablist" aria-label="Gallery thumbnails">
          {images.map((src, index) => (
            <button
              key={`${src}-${index}`}
              type="button"
              role="tab"
              aria-selected={index === slideNumber}
              className={`listing-pdp-gallery__thumb ${index === slideNumber ? 'is-active' : ''}`}
              onClick={() => setSlideNumber(index)}
              aria-label={`Show image ${index + 1}`}
            >
              <img src={`${imgBase}${src}`} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}

      {openModal && (
        <div
          className="listing-pdp-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Full screen gallery"
        >
          <button
            type="button"
            className="listing-pdp-lightbox__close"
            onClick={() => setOpenModal(false)}
            aria-label="Close gallery"
          >
            <Icon.XLg size={26} aria-hidden />
          </button>
          <button
            type="button"
            className="listing-pdp-lightbox__nav listing-pdp-lightbox__nav--prev"
            onClick={prevSlide}
            aria-label="Previous image"
          >
            <Icon.ChevronLeft size={34} aria-hidden />
          </button>
          <button
            type="button"
            className="listing-pdp-lightbox__nav listing-pdp-lightbox__nav--next"
            onClick={nextSlide}
            aria-label="Next image"
          >
            <Icon.ChevronRight size={34} aria-hidden />
          </button>
          <div className="listing-pdp-lightbox__img-wrap">
            <img src={mainSrc} alt={alt} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ListDetailsGallery;
