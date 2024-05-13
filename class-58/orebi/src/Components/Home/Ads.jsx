import React from 'react'
import Imges from '../../Layer/Imges'
import Ads1 from '/src/assets/Home/Ads/Ads.png'
import Container from '../../Layer/Container'

const Ads = () => {
  return (
    <Container className=" lg:pt-[130px] pt-5 px-3 lg:px-0">
        <Imges className="w-full object-cover object-center" src={Ads1}/>
    </Container>
  )
}

export default Ads