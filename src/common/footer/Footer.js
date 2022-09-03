import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
          
            <h1><i className="fa-solid fa-people-pulling"></i>URLogo</h1>
            <h3>Sign Up For Newsletters</h3>
            <p>Get E-mail updates about out latest shop and 
              special offers.
            </p>
                      </div>

          <div className='box'>
            <h2>Product Categories</h2>
            <ul>
              <li>Apply</li>
              <li>Camera & Photo</li>
              <li>Call Phones</li>
              <li>Computers & Accessories</li>
              <li>Headphones</li>
              <li>Smartwatches</li>
              <li>Sports & Outdoors</li>
              <li>Television & Video</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Fourth Menu</h2>
            <ul>
              <li>About Us</li>
              <li>Leadership </li>
              <li>News</li>
              <li>Media Kit</li>
              <li>Career</li>
              <li>Documentation</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Business Services</h2>
            <ul>
              <li>For Professionals</li>
              <li>Remodeling Software</li>
              <li>Floor Planner</li>
              <li>Contractor</li>
              <li>For Brands</li>
              <li>Rrade Program</li>
              <li>Buttons & Badges</li>

            </ul>

            

          </div>
          <div className='box'>
            <h2>Let Us Help You</h2>
            <ul>
              <li>Your Account</li>
              <li>Your Orders</li>
              <li>Returns & Replacerments</li>
              <li>Shipping Rates & Policles</li>
              <li>Refund and Returns Policy</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Help Center</li>


            </ul>

            

          </div>

        </div>
        
      </footer>
      <hr/>
 
      <div className='had'>
     
        <div className='container d_flex'>
        
          <div className='right row'>
          
          <i class="fab fa-facebook-f"></i>

            <i className='fab fa-twitter'></i>
            <i className='fab fa-youtube'></i>
            <i className='fab fa-instagram'></i>
            <p className="col-sm">
             CP &copy;{new Date().getFullYear()} All right resved

            </p>    
                
          </div>
          </div>
          </div>
    </>
  )
}

export default Footer
