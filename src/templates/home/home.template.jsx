import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import CarouselSlide from '../../components/carousel/Carousel'
import GreenBar from '../../components/molecules/greenbar/GreenBar'
import Typography from '../../components/atoms/typography/Typography'
import Box from '../../components/atoms/box/Box'
import Card from '../../components/card/Card'


export default function HomeTemplate() {
  return (
    <>
      <Header />
      <CarouselSlide />
      <GreenBar />
      <Box justify="center" padding="25px">
        <Typography fontSize="48px" fontWeight="800" lineHeight="75.55px" color='black' text="Depoimentos" />
      </Box>
      <Card />




      {/* cards */}
      {/* texto */}
      {/* swiper */}
      <Footer />
    </>
  )
}
