import React from "react"
import Shop from "../components/shops/Shop"
import FlashDeals from "../components/flashDeals/FlashDeals"


const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <div>
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      
      </div>
  )
}

export default Pages
