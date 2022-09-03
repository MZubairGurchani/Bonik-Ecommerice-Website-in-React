import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <div>
  <div class="card">
  <div class="card-body">
    <h1>Shopping Cart</h1>
    <p>This is your cart</p>
 
  <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
            
              <li>
              <i className=" icon-circle fa-solid">1</i>
                <Link to='/'>Cart</Link>
                <i className="fa-solid fa-arrow-right"></i>
               
              </li>
            
              <li>
              <i className=" icon-circle fa-solid">2</i>
                <Link to='/pages'>pages</Link>
                <i className="fa-solid fa-arrow-right"></i>
              </li>
              <li>
              <i className=" icon-circle fa-solid">3</i>
                <Link to='/user'>user account</Link>
                <i className="fa-solid fa-arrow-right"></i>
              </li>
              <li>
              <i className=" icon-circle fa-solid">4</i>
                <Link to='/vendor'>vendor account</Link>
                <i className="fa-solid fa-arrow-right"></i>
              </li>
              
            </ul>
            
            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>

  </div>
</div>
       
    </div>
  )
}

export default Navbar
