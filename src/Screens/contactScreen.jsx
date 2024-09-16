import React from 'react'
import Footer from '../components/Footer/footer'
import ContactBannerCom from '../components/Header/BannerComponents/contactBanner'
import MapCom from '../components/Contact/mapCom'
import Details from '../components/Contact/details'

export default function ContactScreen() {
  return (
    <div>
      <ContactBannerCom />
      <Details />
      <MapCom />
      <Footer />
    </div>
  )
}