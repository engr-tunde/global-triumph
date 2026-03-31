import { useState } from "react";
import * as Icon from 'react-bootstrap-icons';

const Gallery = ({galleryImages}) => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    const handleOpenImageModal = (index) => {
        setSlideNumber(index);
        setOpenModal(true);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    }

    const prevSlide = () => {
        slideNumber === 0 ? setSlideNumber(galleryImages.length - 1) : setSlideNumber(slideNumber - 1);
    }

    const nextSlide = () => {
        slideNumber + 1 === galleryImages.length 
        ? setSlideNumber(0)
        : setSlideNumber(slideNumber + 1 );
    }


    


    return (
        <div>

            {openModal &&
             <div className="sliderWrap">
                <Icon.XCircleFill size={30} color='#BBD51A' className="btnClose" onClick={handleCloseModal}/>
                <Icon.ArrowLeftCircleFill size={30} color='#BBD51A' className="btnPrev" onClick={prevSlide}/>
                <Icon.ArrowRightCircleFill size={30} color='#BBD51A' className="btnNext" onClick={nextSlide}/>
                <div className="fullScreenImage">
                    <img src={`${process.env.REACT_APP_IMG_BASEURL}/gallery/${galleryImages[slideNumber]}`} alt={`Global Triumph Market Plus Multiconcept - ${galleryImages[slideNumber]}`} />
                </div>
             </div>
            }

            <div className="galleryWrap">
                {
                    galleryImages && galleryImages.map((slide) => {
                        return(
                            <div className="single" key={slide} onClick={() => handleOpenImageModal(slide)}>
                                <img src={`${process.env.REACT_APP_IMG_BASEURL}/gallery/${slide}`} alt={`Global Triumph Market Plus Multiconcept - ${slide}`} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
 
export default Gallery;