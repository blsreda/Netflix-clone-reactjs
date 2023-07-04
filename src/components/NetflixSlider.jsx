// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, A11y } from 'swiper';
import { memo, useRef } from "react";
import Backdrop from "./Backdrop";
import Poster from "./Poster";
import Slider from "react-slick";
// import "swiper/swiper.min.css";
// import 'swiper/css/a11y';
// import 'swiper/css/controller';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const NetflixSlider = ({dataList,type,datatype}) => {
    const sliderRef = useRef();
    const settings = {
        className: "slider relative variable-width",
        infinite: true,
        speed: 500,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows:false,
    };
    return (
        <div className='relative'>
            <Slider {...settings} ref={sliderRef}>
                {dataList?.map(item => (
                    <div className='mr-[10px]'>
                        {
                        type ==='backdrop'? 
                        <Backdrop data={item} datatype={datatype} />
                        :
                        <Poster data={item} datatype={datatype}/>
                        }
                    </div>
                ))}
            </Slider>  
            <button
            className='absolute left-[-30px] top-[50%] translate-y-[-50%]' 
            onClick={() => sliderRef?.current?.slickPrev()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="max-[500px]:w-10 max-[500px]:h-10 w-14 h-14">
                <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
                </svg>
            </button>
            <button
            className='absolute right-[-30px] top-[50%] translate-y-[-50%]' 
            onClick={() => sliderRef?.current?.slickNext()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="max-[500px]:w-10 max-[500px]:h-10 w-14 h-14">
                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    );
}

export default memo(NetflixSlider);