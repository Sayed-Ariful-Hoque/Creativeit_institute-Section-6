import React from 'react'
import Container from '../../Layer/Container'
import Title from '../../Layer/Title'
import ProductItem from '../../Layer/ProductItem'

const BestSelier = () => {
  return (
    <div className='lg:pt-28 pt-5 px-3 lg:px-0'>
        <Container>
            <Title TiteleText="BestSelier"/>
            <div className='flex items-center justify-between flex-wrap gap-y-5'>
                <ProductItem offer="20%"/>
                <ProductItem offer="New"/>
                <ProductItem offer="10%"/>
                <ProductItem offer="New"/>
            </div>
        </Container>
    </div>
  )
}

export default BestSelier