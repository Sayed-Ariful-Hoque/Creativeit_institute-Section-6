import React from 'react'
import ProductItem from '../../Layer/ProductItem'

function ProductRightProducts() {
  return (
    <>
    <div className='pt-[60px] flex flex-wrap gap-10'>
        <ProductItem offer="New"/>
        <ProductItem offer="-10%"/>
        <ProductItem />
        <ProductItem />
        <ProductItem offer="New"/>
        <ProductItem />
        <ProductItem offer="-10%"/>
        <ProductItem offer="-10%"/>
        <ProductItem offer="-10%"/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
    </div>
    </>
  )
}

export default ProductRightProducts