import React from "react"

import { Link } from "react-router-dom"

const Search = ({ CartItem }) => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <div>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
           <h2>URLogo</h2>
          
          </div>

          <div className='search-box f_flex'>
           
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
            <i className='fa fa-search'></i>
          </div>

          <div className='icon f_flex width'>
          
   
            <div className='cart'>
              <Link to='/cart'>
              <i className="fa-solid fa-cart-shopping icon-circle"></i>
                <i className='fa-solid fa-heart icon-circle'></i>
                <span>{CartItem.length === 0  ? "3" : CartItem.length}</span>
                <i className='fa fa-user icon-circle'></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Search
