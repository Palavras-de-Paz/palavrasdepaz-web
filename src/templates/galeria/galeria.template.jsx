import Head from 'next/head'
import BannerPhotos from '../../components/bannerphotos/BannerPhotos'
import Footer from '../../components/footer/Footer'
import GridPhotos from '../../components/gridphotos/GridPhotos'
import Header from '../../components/header/Header'


export default function GaleriaTemplate() {
    return (
        <>
            <Header />
            <BannerPhotos/>
            <GridPhotos/>
            <Footer />
        </>
    )
}
