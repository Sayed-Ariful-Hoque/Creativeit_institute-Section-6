import React from 'react'
import Title from '../../Layer/Title'
import ProductItem from '../../Layer/ProductItem'
import Container from '../../Layer/Container'

const SpecialOffers = () => {
  return (
    <div className='pt-32'>
        <Container>
            <Title TiteleText="Special Offers"/>
            <div className='flex items-center justify-between'>
                <ProductItem offer="Specal Offer"/>
                <ProductItem offer="30%"/>
                <ProductItem offer="New"/>
                <ProductItem offer="20%"/>
            </div>
        </Container>
    </div>
  )
}

export default SpecialOffers