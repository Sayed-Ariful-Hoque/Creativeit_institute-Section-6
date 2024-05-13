import React from 'react'
import Container from '../../Layer/Container'
import ProductItem from '../../Layer/ProductItem'
import Slider from '@ant-design/react-slick'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import Title from '../../Layer/Title';




function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="bg-[#979797] text-white  items-center justify-center flex  lg:w-16 w-8 lg:h-16 h-8 rounded-full absolute lg:right-5 right-0 lg:top-1/4 top-1/3 translate-y-1/2 z-10"
            onClick={onClick}
        >
            <FaLongArrowAltRight />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="bg-[#979797] text-white  items-center justify-center flex  lg:w-16 w-8 lg:h-16 h-8 rounded-full absolute lg:left-5 left-0 lg:top-1/4 top-1/3 translate-y-1/2 z-10"
            onClick={onClick}
        >
            <FaLongArrowAltLeft />
        </div>
    );
}




const NewArrivals = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    };

    return (
        <div className='lg:pt-32 pt-10 px-3  lg:px-0 '>
            <Container>
                <Title className="px-3 lg:px-0" TiteleText="New Arrivals" />
            </Container>
            <Container className=' lg:max-w-[1640px]'>
                <Slider  {...settings}>
                    <div>
                        <ProductItem className="mx-auto" offer='New' />
                    </div>
                    <div>
                        <ProductItem className="mx-auto"  />
                    </div>
                    <div>
                        <ProductItem className="mx-auto" offer='New' />
                    </div>
                    <div>
                        <ProductItem className="mx-auto" offer='50%' />
                    </div>
                </Slider>
            </Container>
        </div>
    )
}

export default NewArrivals