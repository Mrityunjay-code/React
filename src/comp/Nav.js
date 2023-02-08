import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    // <!-- ***** Header Area Start ***** -->
    <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* <!-- ***** Logo Start ***** --> */}
              {/* <Link to="index.html" className="logo">
                <img src="assets/images/logo.png" alt="Chain App Dev"/>
              </Link> */}
              {/* <!-- ***** Logo End ***** -->
              <!-- ***** Menu Start ***** --> */}
              <ul className="nav">
                <li className="scroll-to-section"><Link to="/" className="active">Home</Link></li>
                <li className="scroll-to-section"><Link to="/Service">Services</Link></li>
                <li className="scroll-to-section"><Link to="/About">About</Link></li>
                <li className="scroll-to-section"><Link to="/Pricing">Cost</Link></li>
                <li className="scroll-to-section"><Link to="/Newsletter">Newsletter</Link></li>
                <li><div className="gradient-button"><a id="modal_trigger" to="#modal"><i className="fa fa-sign-in-alt"></i> Sign In Now</a></div></li> 
              </ul>        
              <a className='menu-trigger'>
                  <span>Menu</span>
              </a>
              {/* <!-- ***** Menu End ***** --> */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Nav