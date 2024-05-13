import React from 'react'
import Container from '../../Layer/Container'
import Imges from '../../Layer/Imges'
import Sale1 from '/src/assets/Home/OfferSell/sale-1.png'
import Sale2 from '/src/assets/Home/OfferSell/sale-2.png'
import Sale3 from '/src/assets/Home/OfferSell/sale-3.png'

const OfferSale = () => {
    return (
        <div className='lg:pt-[174px] pt-5'>
            <Container className="flex justify-between lg:flex-nowrap flex-wrap gap-y-5">
                <div className="LeftPart lg:w-[780px] w-auto h-auto lg:h-[780px]  bg-slate-400">
                    <Imges to="/" src={Sale1} className="w-full h-full" />
                </div>
                <div className="RightPart lg:w-[780px] w-auto h-auto lg:h-[780px] flex flex-col gap-y-5  justify-between">
                    <div className="TopPart w-full lg:h-[370px]  h-auto">
                        <Imges to="/" src={Sale2} className="w-full h-full" />
                    </div>
                    <div className="BottomPart w-full lg:h-[370px]  h-auto">
                        <Imges to="/" src={Sale3} className="w-full h-full" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default OfferSale