import React from 'react'
import Header from '../../components/header/Header'
import Footer from "../../components/footer/Footer"
import FixedButton from '../../components/fixedbutton/FixedButton'
import OPrograma from '../../components/programa/OPrograma'
import BannerPrograma from '../../components/bannerprograma/BannerPrograma'

function ProgramaTemplate() {
  return (
    <>
    <Header/>
    <BannerPrograma/>
    <OPrograma/>
    <FixedButton />
    <Footer/>
    </>
  )
}

export default ProgramaTemplate
