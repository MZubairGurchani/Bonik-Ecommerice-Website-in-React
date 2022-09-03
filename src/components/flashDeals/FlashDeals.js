import React from "react"
import FlashCard from "./FlashCard"
import "./style.css"

const FlashDeals = ({ productItems, addToCart }) => {
  return (
    <div>
    <div className="aaa">
<h1>Your Items</h1>
<p>No items selected.Select all item</p>
</div>
     <section className='flash'>
      
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
           
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </div>
  )
}

export default FlashDeals
