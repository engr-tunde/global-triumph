import { useState } from "react";
import * as Icon from 'react-bootstrap-icons';
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const PastVisasGallery = () => {

    const {data, loading, error} = useFetch(`${process.env.REACT_APP_API_URL}/visas/get-visas`);

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
        slideNumber === 0 ? setSlideNumber(data.length - 1) : setSlideNumber(slideNumber - 1);
    }

    const nextSlide = () => {
        slideNumber + 1 === data.length 
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
                    <img 
                        src={`${process.env.REACT_APP_IMG_BASEURL}/visas/${data[slideNumber].coverImage}`} 
                        alt={`Global Triumph Market Plus Multiconcept - ${data[slideNumber].coverImage}`}
                    />
                </div>
             </div>
            }

            {data ? <div className="galleryWrap">
                {
                    data && data.map((slide, index) => {
                        return(
                            <div className="single" key={index} onClick={() => handleOpenImageModal(index)}>
                                <img src={`${process.env.REACT_APP_IMG_BASEURL}/visas/${slide.coverImage}`} alt={`Global Triumph Market Plus Multiconcept - ${slide.coverImage}`} />
                            </div>
                        )
                    })
                }
            </div> : null }
            {loading ? <div style={{color:"red !important", fontSize:"30px"}}>Loading...</div> : null }
            {error ? <div style={{color:"red !important", fontSize:"30px"}}>{error}</div> : null } 

            <p>Explore th eavailable visa opportunioes across the globe. <Link to="/visa-opportunities"><b>Click here</b></Link> to find one that works for you.</p>

        </div>
    );
}
 
export default PastVisasGallery;