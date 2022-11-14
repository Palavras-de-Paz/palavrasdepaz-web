import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import CarouselSlide from '../../components/carousel/Carousel'
import GreenBar from '../../components/molecules/greenbar/GreenBar'
import Typography from '../../components/atoms/typography/Typography'
import Box from '../../components/atoms/box/Box'
import Card from '../../components/card/Card'
import Button from '../../components/button/button'
import SwiperJs from '../../components/swiper/Swiper'
import FixedButton from '../../components/fixedbutton/FixedButton'


export default function HomeTemplate() {
  return (
    <div className="animate__animated animate__fadeIn animate__delay-1s">
      <Header />

      <CarouselSlide />
      <GreenBar />

      <Box justify="center" padding="32px">
        <Typography fontSize="48px" fontWeight="800" lineHeight="75.55px" color='black' text="Depoimentos" />
      </Box>

      <Card />

      <Box justify="center" padding="0 0 32px 0 " gap="48px">
        <Button href="/depoimentos" justify="center" width="200px" height="56px" color="black" text="Mais Depoimentos" />
        <Button href="/galeria" justify="center" width="200px" height="56px" color="black" text="Galeria de Fotos" />
      </Box>

      <Box justify="center" padding="32px">
        <iframe width="900" height="618" src="https://www.youtube.com/embed/X3cphCj9YVc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Box>

      <Box style={{ zIndex: -2 }} bg="rgba(33, 170, 133, 1)" padding="32px" margin="32px 0" justify="center" align="center" direction="column" textAlign="center">
        <Typography width="88%" fontWeight="700" fontSize="36px" color="white" text="``Não é o mundo que precisa de paz, são as pessoas,
quando as pessoas tiverem paz interior, o mundo estará em paz.´´"/>
        <Typography fontWeight="700" fontSize="36px" color="white" text="Prem Rawat" />
      </Box>

      <SwiperJs />

      <Box align="center" justify="center" padding="32px">
        <Button bg="rgba(33, 170, 133, 1)" color="white" href="" justify="center" width="200px" height="56px" text="Seja um parceiro" />
      </Box>

      <FixedButton />
      <Footer />
    </div>
  )
}
