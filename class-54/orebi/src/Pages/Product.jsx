import React from 'react'
import Container from '../Layer/Container'
import { FaAngleRight } from "react-icons/fa";
import ShopByCategory from '../Components/Product/ShopByCategory';
import ShopByColor from '../Components/Product/ShopByColor';
import ShopbyBrand from '../Components/Product/ShopbyBrand';
import ShopByPrice from '../Components/Product/ShopByPrice';
import ProductRightTop from '../Components/Product/ProductRightTop';
import ProductRightProducts from '../Components/Product/ProductRightProducts';


function Product() {
  return (
    <div>
        <Container>
            <h2>Products</h2>
            <p className='flex items-center gap-x-2'><span>Home</span> <FaAngleRight /> <span className=' capitalize'>{window.location.pathname.split("/")[1]}</span></p>
        </Container>
        <Container className="flex justify-between pt-[130px]">
          <div className="LeftPart w-[372px]">
            <ShopByCategory/>
            <ShopByColor/>
            <ShopbyBrand/>
            <ShopByPrice/>
          </div>
          <div className="RightPart w-[1190px]">
            <ProductRightTop/>
            <ProductRightProducts/>
          </div>
        </Container>
    </div>
  )
}

export default Product