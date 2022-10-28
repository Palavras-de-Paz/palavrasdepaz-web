import React from 'react'
import BannerDepoimentos from '../../components/bannerdepoimentos/BannerDepoimentos'
import DepoimentosMain from '../../components/depoimentosmain/DepoimentosMain'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

function DepoimentosTemplate() {
  return (
   <>
   <Header/>
  <BannerDepoimentos/>
   <DepoimentosMain/>
    <Footer/>
   </>
  )
}

export default DepoimentosTemplate
