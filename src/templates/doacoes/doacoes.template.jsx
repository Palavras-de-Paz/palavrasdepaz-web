import React from 'react'
import BannerDoacoes from '../../components/bannerdoacoes/BannerDoacoes'
import Doacoes from '../../components/doacoes/Doacoes'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

function DoacoesTemplate() {
  return (
    <>
    <Header/>
    <BannerDoacoes/>
    <Doacoes/>

    <Footer/>
    </>
  )
}

export default DoacoesTemplate
