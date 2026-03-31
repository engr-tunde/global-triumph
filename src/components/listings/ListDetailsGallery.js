import { useState } from "react";
import * as Icon from 'react-bootstrap-icons';

const ListDetailsGallery = ({galleryImages}) => {

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

            
             <div className="defaultSliderWrap">
                <Icon.ArrowLeftCircleFill size={30} color='#BBD51A' className="btnPrevDefault" onClick={prevSlide}/>
                <Icon.ArrowRightCircleFill size={30} color='#BBD51A' className="btnNextDefault" onClick={nextSlide}/>
                <div className="fullScreenImage" onClick={() => handleOpenImageModal(slideNumber)} >
                    <img 
                        src={`${process.env.REACT_APP_IMG_BASEURL}/shop/${galleryImages[slideNumber]}`} 
                        alt={`Global Triumph Market Plus Multiconcept - ${galleryImages[slideNumber]}`} 
                        onClick={() => handleOpenImageModal(slideNumber)} 
                    />
                </div>
             </div>

            {openModal &&
             <div className="sliderWrap">
                <Icon.XCircleFill size={30} color='#BBD51A' className="btnClose" onClick={handleCloseModal}/>
                <Icon.ArrowLeftCircleFill size={30} color='#BBD51A' className="btnPrev" onClick={prevSlide}/>
                <Icon.ArrowRightCircleFill size={30} color='#BBD51A' className="btnNext" onClick={nextSlide}/>
                <div className="fullScreenImage">
                    <img src={`${process.env.REACT_APP_IMG_BASEURL}/shop/${galleryImages[slideNumber]}`} alt={`Global Triumph Market Plus Multiconcept - ${galleryImages[slideNumber]}`} />
                </div>
             </div>
            }

        </div>
    );
}
 
export default ListDetailsGallery;