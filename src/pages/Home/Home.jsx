import React from 'react'
import Layout from '../../components/Layouts/Layout'
import HeroBanner from './HeroBanner'
import About from './About'
import Menus from './Menus'
import Promosion from './Promosion'
import Shop from './Shop'
import Testimonials from './Testimonials'
import Contact from './Contact'

function Home() {
  return (
    <Layout>
      <HeroBanner />
      <About />
      <Menus />
      <Promosion />
      <Shop />
      <Testimonials />
      <Contact />
    </Layout>
  )
}

export default Home
