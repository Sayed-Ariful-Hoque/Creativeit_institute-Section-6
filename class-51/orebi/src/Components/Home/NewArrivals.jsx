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
            className="bg-[#979797] text-white  items-center justify-center"
            style={{
                ...style,
                display: "flex",
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                position: "absolute",
                right: '30px',
                top: '40%',
                transform: "  translateY(-50%) ",
                zIndex: "1",

            }}
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
            className="bg-[#979797] text-white  items-center justify-center"
            style={{
                ...style,
                display: "flex",
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                position: "absolute", 
                left: '0',
                top: '40%',
                transform: " translateY(-50%) ",
                zIndex: "1",
            }}
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
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className='pt-32'>
            <Container>
                <Title TiteleText="New Arrivals"/>
                <Slider className='' {...settings}>
                    <ProductItem className=""  offer='New' />
                    <ProductItem className=""  offer='20%' />
                    <ProductItem className=""  offer='New' />
                    <ProductItem className=""  offer='25%' />
                    <ProductItem className=""  offer='25%' />
                    <ProductItem className=""  offer='25%' />
                </Slider>
            </Container>
        </div>
    )
}

export default NewArrivals