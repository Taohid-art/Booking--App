import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapMarkerAlt,
  faStar,
  faWifi,
  faSwimmingPool,
  faUtensils,
  faSpa,
  faCoffee,
  faCheck,
} from "@fortawesome/free-solid-svg-icons"
import Nav from "../../components/nav/Nav"
import Header from "../../components/header/Header"
import Gallery from "../../components/gallary/Gallery"
import "./Hotel.css"

function Hotel() {
  return (
    <div className="container-hotel">
      <Nav /> 
      <Header type="list2" />  
      <div className="hotel-grid">
        <div className="hotel-info">
          <div className="hotel-header">
            <div>
              <h1>Vivanta New Delhi, Surajkund</h1>
              <div className="location">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>Surajkund, Faridabad, New Delhi NCR, India</span>
              </div>
            </div>
            <div className="rating">
              <span className="badge">5 Star Hotel</span>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FontAwesomeIcon key={star} icon={faStar} />
                ))}
              </div>
            </div>
          </div>

          {/* New Image Gallery component */}
          <Gallery />

        
        </div>

        <div className="booking-card">
          <h2>Book your stay</h2>
          <div className="price-info">
            <div className="price-details">
              <span className="label">Price per night</span>
              <span className="price">₹12,000</span>
              <span className="tax-info">Including taxes and fees</span>
            </div>
            <hr />
            <div className="booking-features">
              <div className="feature-hotel">
                <FontAwesomeIcon icon={faCheck} />
                <span>Free cancellation</span>
              </div>
              <div className="feature-hotel">
                <FontAwesomeIcon icon={faCheck} />
                <span>No prepayment needed</span>
              </div>
            </div>
          </div>


          <div className="property-highlights">
            <h2>Property highlights</h2>
            <div className="highlights-grid">
              {[
                { icon: faWifi, text: "Free WiFi" },
                { icon: faSwimmingPool, text: "Swimming pool" },
                { icon: faUtensils, text: "Restaurant" },
                { icon: faSpa, text: "Spa and wellness centre" },
                { icon: faCoffee, text: "Tea/coffee maker in all rooms" },
              ].map((item, index) => (
                <div key={index} className="highlight-item">
                  <FontAwesomeIcon icon={item.icon} />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>



          <button className="book-button">Book now</button>
        </div>
      </div>
    </div>
  )
}

export default Hotel

