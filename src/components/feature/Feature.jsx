import './feature.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom'
import React from 'react'

const Feature = () => {
  return (
    <div>
    <Link to='/hotel/:id' className='link2'>
    <div className="feature">

      <div className="feature1">
        <h1 className='f1heading'>Browse By Property</h1>
        <Swiper
       
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={5}
      slidesPerView={4}
      navigation
    //   pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log('slide change')}
    >
        <SwiperSlide>
        <img
          src="https://i.pinimg.com/736x/5b/25/0e/5b250e0036d80985849d8cbf2a5989e5.jpg"
          alt="Slide"
          style={{ width: '100%', height:'200px', objectFit: 'cover', borderRadius: '10px' }}
        />
        <h1>Hotels</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.pinimg.com/236x/19/15/fd/1915fd9020108aa8cd9c3f23efa3396e.jpg"
          alt="Slide"
          style={{ width: '100%', height:'200px', objectFit: 'cover', borderRadius: '10px' }}
        />
        <h1>Appeartment</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.pinimg.com/236x/ef/8d/68/ef8d689ef7a9e78ac4bf9b70399ea8c0.jpg"
          alt="Slide"
          style={{ width: '100%', height:'200px', objectFit: 'cover', borderRadius: '10px' }}
        />
        <h1>Resort</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.pinimg.com/236x/4c/f5/a7/4cf5a768dc94fe7b54c7bad265716f85.jpg"
          alt="Slide"
          style={{ width: '100%', height:'200px', objectFit: 'cover', borderRadius: '10px' }}
        />
        <h1>Villas</h1>
      </SwiperSlide> <SwiperSlide>
        <img
          src="https://i.pinimg.com/736x/55/d1/7e/55d17eb797ce9ae3fabda18bb0ae4950.jpg"
          alt="Slide"
          style={{ width: '100%', height:'200px', objectFit: 'cover', borderRadius: '10px' }}
        />
        <h1>Cabin</h1>

      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://i.pinimg.com/474x/32/eb/c1/32ebc135d6e21ef9812bdaab4139af48.jpg"
          alt="Slide"
          style={{ width: '100%', height:'200px', objectFit: 'cover', borderRadius: '10px' }}
        />
        <h1>Cottages</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.pinimg.com/236x/8e/47/2b/8e472b27fa3608e8c04cd812fc343224.jpg"
          alt="Slide"
          style={{ width: '100%', height:'200px', objectFit: 'cover', borderRadius: '10px' }}
        />
        <h1>Service Appartments</h1>
      </SwiperSlide>
      
    </Swiper>
      </div>

      <div className="feature2">
      <div className="feature1">
        <h1 className='f2heading'>Explore Bangladesh</h1>
        <Swiper
       
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={5}
      slidesPerView={6}
      navigation
    
    > <SwiperSlide>
        <img
          src="https://i.pinimg.com/236x/8e/47/2b/8e472b27fa3608e8c04cd812fc343224.jpg"
          alt="Slide"
          style={{ width: '100%', height:'150px', objectFit: 'cover', borderRadius: '10px' }}
        />
        <h1>Service Appartments</h1>
      </SwiperSlide>
       
     
      <SwiperSlide>
        <img
          src="https://i.pinimg.com/236x/ef/8d/68/ef8d689ef7a9e78ac4bf9b70399ea8c0.jpg"
          alt="Slide"
          style={{ width: '100%', height:'150px', objectFit: 'cover', borderRadius: '10px' }}
        />
        <h1>Resort</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.pinimg.com/236x/4c/f5/a7/4cf5a768dc94fe7b54c7bad265716f85.jpg"
          alt="Slide"
          style={{ width: '100%', height:'150px', objectFit: 'cover', borderRadius: '10px' }}
        />
        <h1>Villas</h1>
      </SwiperSlide> <SwiperSlide>
        <img
          src="https://i.pinimg.com/736x/55/d1/7e/55d17eb797ce9ae3fabda18bb0ae4950.jpg"
          alt="Slide"
          style={{ width: '100%', height:'150px', objectFit: 'cover', borderRadius: '10px' }}
        />
        <h1>Cabin</h1>

      </SwiperSlide> <SwiperSlide>
        <img
          src="https://i.pinimg.com/236x/19/15/fd/1915fd9020108aa8cd9c3f23efa3396e.jpg"
          alt="Slide"
          style={{ width: '100%', height:'150px', objectFit: 'cover', borderRadius: '10px' }}
        />
        <h1>Appeartment</h1>
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://i.pinimg.com/474x/32/eb/c1/32ebc135d6e21ef9812bdaab4139af48.jpg"
          alt="Slide"
          style={{ width: '100%', height:'150px', objectFit: 'cover', borderRadius: '10px' }}
        />
        <h1>Cottages</h1>
      </SwiperSlide> 
      <SwiperSlide>
        <img
          src="https://i.pinimg.com/736x/5b/25/0e/5b250e0036d80985849d8cbf2a5989e5.jpg"
          alt="Slide"
          style={{ width: '100%', height:'150px', objectFit: 'cover', borderRadius: '10px' }}
        />
        <h1>Hotels</h1>
      </SwiperSlide>
     
      
    </Swiper>
      </div>
      </div>

      <div className="feature3">
      
        <h1 className='f3heading'>Deals For Weekend</h1>
        <Swiper
       
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={5}
      slidesPerView={4}
      navigation
    //   pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log('slide change')}
    >
        
      <SwiperSlide>

        <div className="card">
        <img
          src="https://i.pinimg.com/236x/8e/47/2b/8e472b27fa3608e8c04cd812fc343224.jpg"
          alt="Slide"
          style={{ width: '100%', height:'200px', objectFit: 'cover',  }}
        />
        <div className="cardboootom">
        <h1>Jupiter Plazza</h1>
        <h3>New Delhi,India</h3>
        <h2><div className="rate">7.8</div><span>Good . 31 reviews</span></h2>
        <div className="cardfooter">
            <span>2 nights</span><div className="mainprice">BDT 565 </div>
            <div className="discountprice">BDT 508</div>
            </div>
        </div>
        </div>
      </SwiperSlide>
      
      <SwiperSlide>

<div className="card">
<img
  src="https://i.pinimg.com/236x/8e/47/2b/8e472b27fa3608e8c04cd812fc343224.jpg"
  alt="Slide"
  style={{ width: '100%', height:'200px', objectFit: 'cover',  }}
/>
<div className="cardboootom">
<h1>Jupiter Plazza</h1>
<h3>New Delhi,India</h3>
<h2><div className="rate">7.8</div><span>Good . 31 reviews</span></h2>
<div className="cardfooter">
    <span>2 nights</span><div className="mainprice">BDT 565 </div>
    <div className="discountprice">BDT 508</div>
    </div>
</div>
</div>
</SwiperSlide>

<SwiperSlide>

<div className="card">
<img
  src="https://i.pinimg.com/236x/8e/47/2b/8e472b27fa3608e8c04cd812fc343224.jpg"
  alt="Slide"
  style={{ width: '100%', height:'200px', objectFit: 'cover',  }}
/>
<div className="cardboootom">
<h1>Jupiter Plazza</h1>
<h3>New Delhi,India</h3>
<h2><div className="rate">7.8</div><span>Good . 31 reviews</span></h2>
<div className="cardfooter">
    <span>2 nights</span><div className="mainprice">BDT 565 </div>
    <div className="discountprice">BDT 508</div>
    </div>
</div>
</div>
</SwiperSlide>

<SwiperSlide>

<div className="card">
<img
  src="https://i.pinimg.com/236x/8e/47/2b/8e472b27fa3608e8c04cd812fc343224.jpg"
  alt="Slide"
  style={{ width: '100%', height:'200px', objectFit: 'cover',  }}
/>
<div className="cardboootom">
<h1>Jupiter Plazza</h1>
<h3>New Delhi,India</h3>
<h2><div className="rate">7.8</div><span>Good . 31 reviews</span></h2>
<div className="cardfooter">
    <span>2 nights</span><div className="mainprice">BDT 565 </div>
    <div className="discountprice">BDT 508</div>
    </div>
</div>
</div>
</SwiperSlide>

<SwiperSlide>

<div className="card">
<img
  src="https://i.pinimg.com/236x/8e/47/2b/8e472b27fa3608e8c04cd812fc343224.jpg"
  alt="Slide"
  style={{ width: '100%', height:'200px', objectFit: 'cover',  }}
/>
<div className="cardboootom">
<h1>Jupiter Plazza</h1>
<h3>New Delhi,India</h3>
<h2><div className="rate">7.8</div><span>Good . 31 reviews</span></h2>
<div className="cardfooter">
    <span>2 nights</span><div className="mainprice">BDT 565 </div>
    <div className="discountprice">BDT 508</div>
    </div>
</div>
</div>
</SwiperSlide>

<SwiperSlide>

<div className="card">
<img
  src="https://i.pinimg.com/236x/8e/47/2b/8e472b27fa3608e8c04cd812fc343224.jpg"
  alt="Slide"
  style={{ width: '100%', height:'200px', objectFit: 'cover',  }}
/>
<div className="cardboootom">
<h1>Jupiter Plazza</h1>
<h3>New Delhi,India</h3>
<h2><div className="rate">7.8</div><span>Good . 31 reviews</span></h2>
<div className="cardfooter">
    <span>2 nights</span><div className="mainprice">BDT 565 </div>
    <div className="discountprice">BDT 508</div>
    </div>
</div>
</div>
</SwiperSlide>

<SwiperSlide>

<div className="card">
<img
  src="https://i.pinimg.com/236x/8e/47/2b/8e472b27fa3608e8c04cd812fc343224.jpg"
  alt="Slide"
  style={{ width: '100%', height:'200px', objectFit: 'cover',  }}
/>
<div className="cardboootom">
<h1>Jupiter Plazza</h1>
<h3>New Delhi,India</h3>
<h2><div className="rate">7.8</div><span>Good . 31 reviews</span></h2>
<div className="cardfooter">
    <span>2 nights</span><div className="mainprice">BDT 565 </div>
    <div className="discountprice">BDT 508</div>
    </div>
</div>
</div>
</SwiperSlide>

<SwiperSlide>

<div className="card">
<img
  src="https://i.pinimg.com/236x/8e/47/2b/8e472b27fa3608e8c04cd812fc343224.jpg"
  alt="Slide"
  style={{ width: '100%', height:'200px', objectFit: 'cover',  }}
/>
<div className="cardboootom">
<h1>Jupiter Plazza</h1>
<h3>New Delhi,India</h3>
<h2><div className="rate">7.8</div><span>Good . 31 reviews</span></h2>
<div className="cardfooter">
    <span>2 nights</span><div className="mainprice">BDT 565 </div>
    <div className="discountprice">BDT 508</div>
    </div>
</div>
</div>
</SwiperSlide>


    </Swiper>
      </div>
      </div>
      </Link>
    </div>
   
  )
}

export default Feature