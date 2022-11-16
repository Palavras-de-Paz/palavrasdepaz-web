import Box from "../../components/atoms/box/Box";
import Typography from "../../components/atoms/typography/Typography";
import Header from "../../components/header/Header";
import card_1 from '../../../public/static/images/parceiro/Building.svg';
import card_2 from '../../../public/static/images/parceiro/Enterprise.svg'
import card_3 from '../../../public/static/images/parceiro/GraduationScroll.svg'
import card_4 from '../../../public/static/images/parceiro/NonProfit.svg'
import card_5 from '../../../public/static/images/parceiro/School.svg'
import banner from '../../../public/static/images/parceiro/image1.svg'
import Image from "next/image";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/button";
import FixedButton from "../../components/fixedbutton/FixedButton";

export default function ParceirosTemplate() {
    return (
        <div>
            <Header />
            <Box style={{ zIndex: -2 }} bg="rgba(33, 170, 133, 1)" height="150px" padding="10px" align="end" justify="end" direction="column" textAlign="end">
                <Typography fontWeight="700" fontSize="36px" color="white" text="SEJA NOSSO PARCEIRO" />
            </Box>
            
            <Box width="80%" margin="auto" direction="column">

                <div>
                    <Typography margin="24px 0" fontSize="32px" align="start" text="Temos como objetivo, através de nosso programa, ajudar as pessoas a acessarem suas ferramentas internas para  encontrar a própria paz. A principal maneira que estamos disseminando o programa é a partir de parcerias com instituições de todos os setores, como, por exemplo:" />
                </div>

                <Box justify="space-around" flexWrap="wrap">
                    <Box direction="column" justify="center" width="160px" textAlign="center">
                        <Image src={card_1} alt="" width="100%" height="100%" />
                        <p>Entidades <br /> públicas
                        </p>
                    </Box>

                    <Box direction="column" justify="center" width="160px" textAlign="center">
                        <Image src={card_2} alt="" width="100%" height="100%" />
                        <p>Empresas <br />
                            privadas

                        </p>
                    </Box>

                    <Box direction="column" justify="center" width="160px" textAlign="center">
                        <Image src={card_4} alt="" width="100%" height="100%" />
                        <p>Órgãos <br /> governamentais
                        </p>
                    </Box>

                    <Box direction="column" justify="center" width="160px" textAlign="center">
                        <Image src={card_3} alt="" width="100%" height="100%" />
                        <p>Universidades
                        </p>
                    </Box>

                    <Box direction="column" justify="center" width="160px" textAlign="center">
                        <Image src={card_5} alt="" width="100%" height="100%" />
                        <p>Escolas
                        </p>
                    </Box>

                </Box>

                <Box direction="column" justify="center" align="center" gap="8px" margin="24px auto">
                    <Image  src={banner} alt="" />
                    <Typography text="Nosso parceiro: Opentext" fontSize="16px" color="#707070" />
                </Box>

            </Box>

            <Box width="70%" margin="auto" direction="column" align="center" justify="center" textAlign="center">
                <div>
                    <Typography fontWeight="700" margin="24px 0" fontSize="32px" text="Ficaremos muito felizes com a possibilidade de trabalharmos juntos e sermos parceiros nessa jornada de resgate da humanidade!" />
                </div>
                <Button fontWeight="600" text="Fale diretamente com o presidente da ONG" justify="center" width="550px" height="56px" color="black" bg="#B4EFE0" />

            </Box>

            <Box justify="center" padding="0 0 32px 0 " gap="48px" margin="24px 0">
                <Button href="/programa" justify="center" width="200px" height="48px" color="black" text="Mais Depoimentos" />
                <Button href="/doacao" justify="center" width="200px" height="48px" color="black" text="Galeria de Fotos" />
            </Box>


            <FixedButton />
            <Footer />
        </div>
    )
}
