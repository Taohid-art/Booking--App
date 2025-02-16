import React from 'react'
import './Home.css'
import Nav from '../../components/nav/Nav'
import Header from '../../components/header/Header'
import Feature from '../../components/feature/Feature'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Nav />
      <Header />
      <Feature />  
      <Footer />
      </div>
  )
}

export default Home