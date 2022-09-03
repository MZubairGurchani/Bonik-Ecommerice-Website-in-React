import React, { useState } from "react"
import { Link } from "react-router-dom"

const Head = () => {

  const [MobleMenu, setMobleMenu] = useState(false)
  return (
    <div>
            <nav className='head'>
        <div className='container d_flex'>
          <div className='left row'>
          
          <i class="fab fa-facebook-f"></i>

            <i className='fab fa-twitter'></i>
            <i className='fab fa-youtube'></i>
            <i className='fab fa-instagram'></i>
            
          </div>

          

          <div className='navlink'>
            <ul className={MobleMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobleMenu(false)}>
              
              <li className="zubi-item bottom: 4066px;">
                <Link to='/track'>Order track</Link>
              </li>
              
              <li>
                <Link to='/help'>Help</Link>
              </li>
              
            </ul>

            <button className='toggle' onClick={() => setMobleMenu(!MobleMenu)}>
              {MobleMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
        <hr/>
      </nav>
    </div>
  )
}

export default Head
