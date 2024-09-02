import React from 'react'
import Footer from '../components/Footer/footer'
import BannerCom from '../components/Header/BannerComponents/bannerCom'
import OurCompany from '../components/About/OurCompany/ourCompany'
import ShortCutButtons from '../components/ShortCutButtons/shortCutButtons'
import MissWork from '../components/MissionAndWork/missWork'

export default function AboutScreen() {
  return (
    <>
        <BannerCom/>
        <OurCompany/>
        <ShortCutButtons/>
        <MissWork/>
        <Footer/>
    </>
  )
}
