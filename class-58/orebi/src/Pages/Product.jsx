import Container from '../Layer/Container'
import { FaAngleRight } from "react-icons/fa";
import ShopByCategory from '../Components/Product/ShopByCategory';
import ShopByColor from '../Components/Product/ShopByColor';
import ShopbyBrand from '../Components/Product/ShopbyBrand';
import ShopByPrice from '../Components/Product/ShopByPrice';
import ProductRightTop from '../Components/Product/ProductRightTop';
import BredCumb from '../Components/BredCumb';




function Product() {

  return (
    <div>
        <BredCumb/>
        <Container className="flex justify-between pt-[130px]">
          <div className="LeftPart w-[372px]">
            <ShopByCategory/>
            <ShopByColor/>
            <ShopbyBrand/>
            <ShopByPrice/>
          </div>
          <div className="RightPart w-[1190px]">
            <ProductRightTop/>
          </div>
        </Container>
    </div>
  )
}

export default Product