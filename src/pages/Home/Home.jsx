import React from 'react'
import Layout from '../../components/Layouts/Layout'
import HeroBanner from './HeroBanner'
import About from './About'
import Menus from './Menus'
import Promosion from './Promosion'

function Home() {
  return (
    <Layout>
      <HeroBanner />
      <About />
      <Menus />
      <Promosion />
    </Layout>
  )
}

export default Home
