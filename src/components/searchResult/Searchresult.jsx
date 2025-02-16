import './Searchresult.css'

import React from 'react'

const Searchresult = () => {
  return (
    <div>
        <div className="container">
            <img src="../../public/img/prince2.jpg" alt="" />
            <div className="text">
                <h1>Tower Street Appartment</h1>
                <h4 className="distance">500m from center</h4>
                <h2 className="facility1">Free airport taxi</h2>
                <h2 className="facility2">Studio Apartment with aircondition</h2>
                <h2 className="facility3">Entire studio . 1 bathroom . 21m . 1 full bed</h2>
                <h2 className="facility4">Free cancellation </h2>
                <h2 className="facility5"> You can cencel later , so grab the low price</h2>
            </div>
            <div className="details">
                <div className="rate">
                    <h2>Excellent</h2>
                    <span>8.9</span>
                </div>
                <div className="priceitem">
                    <h2 className="price">123$</h2>
                    <p>Include tax and fees</p>
                    <button>See availablity</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Searchresult