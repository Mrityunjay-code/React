import React from 'react'
import {Link} from 'react-router-dom'

function Service() {
  return (
  <>
  
  <div id="services" className="services section">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
            <h4>Amazing <em>Services &amp; Features</em> for you</h4>
            <img src="assets/images/heading-line-dec.png" alt=""/>
            <p>If you need the greatest collection of HTML templates for your business, please visit <Link rel="nofollow" to="https://www.toocss.com/" target="_blank">TooCSS</Link> Blog. If you need to have a contact form PHP script, go to <Link to="https://templatemo.com/contact" target="_parent">our contact page</Link> for more information.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="service-item first-service">
            <div className="icon"></div>
            <h4>App Maintenance</h4>
            <p>You are not allowed to redistribute this template ZIP file on any other website.</p>
            <div className="text-button">
              <Link to="/">Read More <i className="fa fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="service-item second-service">
            <div className="icon"></div>
            <h4>Rocket Speed of App</h4>
            <p>You are allowed to use the Chain App Dev HTML template. Feel free to modify or edit this layout.</p>
            <div className="text-button">
              <Link to="/">Read More <i className="fa fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="service-item third-service">
            <div className="icon"></div>
            <h4>Multi Workflow Idea</h4>
            <p>If this template is beneficial for your work, please support us <a rel="nofollow" href="https://paypal.me/templatemo" >a little via PayPal</a>. Thank you.</p>
            <div className="text-button">
              <Link to="/">Read More <i className="fa fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="service-item fourth-service">
            <div className="icon"></div>
            <h4>24/7 Help &amp; Support</h4>
            <p>Lorem ipsum dolor consectetur adipiscing elit sedder williamsburg photo booth quinoa and fashion axe.</p>
            <div className="text-button">
              <Link to="/">Read More <i className="fa fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Service