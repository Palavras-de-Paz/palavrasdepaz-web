import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import CarouselSlide from '../../components/carousel/Carousel'
import GreenBar from '../../components/molecules/greenbar/GreenBar'


export default function HomeTemplate() {
  return (
    <>
      <Header />
      {/* criar componente box e swiper */}
      <CarouselSlide/  >
      <GreenBar />
      {/* cards */}
      {/* texto */}
      {/* swiper */}
      <Footer />
    </>
  )
}
