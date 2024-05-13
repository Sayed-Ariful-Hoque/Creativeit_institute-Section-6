import React from 'react'
import Imges from '../../Layer/Imges'
import Ads1 from '/src/assets/Home/Ads/Ads.png'
import Container from '../../Layer/Container'

const Ads = () => {
  return (
    <Container className=" pt-[130px]">
        <Imges className="w-full object-cover object-center" src={Ads1}/>
    </Container>
  )
}

export default Ads