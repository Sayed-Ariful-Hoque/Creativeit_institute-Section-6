import React from 'react'
import Silider from '../Components/Home/Silider'
import SiliderBottom from '../Components/Home/SiliderBottom'
import OfferSale from '../Components/Home/OfferSale'
import NewArrivals from '../Components/Home/NewArrivals'
import BestSelier from '../Components/Home/BestSelier'
import Ads from '../Components/Home/Ads'
import SpecialOffers from '../Components/Home/SpecialOffers'

const Home = () => {
  return (
    <div>
        <Silider/>
        <SiliderBottom/>
        <OfferSale/>
        <NewArrivals/>
        <BestSelier/>
        <Ads/>
        <SpecialOffers/>
    </div>
  )
}

export default Home