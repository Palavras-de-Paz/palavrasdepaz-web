import Box from "../../components/atoms/box/Box";
import Typography from "../../components/atoms/typography/Typography";
import Header from "../../components/header/Header";
import card_1 from '../../../public/static/images/quemsomos/CameraIdentification.svg'
import card_2 from '../../../public/static/images/quemsomos/PuzzleMatching.svg'
import card_3 from '../../../public/static/images/quemsomos/ValorSecundario.svg'
import Image from "next/image";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/button";
import FixedButton from "../../components/fixedbutton/FixedButton";

export default function QuemSomosTemplate() {
    return (
        <div>
            <Header />
            <Box style={{ zIndex: -2 }} bg="rgba(33, 170, 133, 1)" height="150px" padding="10px" align="end" justify="end" direction="column" textAlign="end">
                <Typography fontWeight="700" fontSize="36px" color="white" text="QUEM SOMOS" />
            </Box>
            <Box width="80%" margin="auto" direction="column">
                <div>
                    <Typography margin="24px 0" fontSize="32px" align="start" text="A ONG Palavras de Paz é uma organização sem fins lucrativos e gerida por voluntários,  tendo como objetivo ajudar as pessoas a encontrar a própria paz.
Esse objetivo é perseguido através de uma licença obtida para pelo TPRF (Programa de  Educação para a Paz da Fundação Prem Rawat).
Acreditamos que esse programa, internacionalmente reconhecido, pode ajudar diferentes  comunidades em situação de vulnerabilidade a resgatarem sua auto-estima, força interior,  esperança e muitos outros recursos que levam a uma vida de paz."/>
                </div>

                <Box justify="space-around">
                    <Box direction="column" justify="center" width="160px" textAlign="center">
                        <Image src={card_1} alt="" width="100%" height="100%" />
                        <p>MISSÃO <br /><br />

                            Ajudar as pessoas a
                            descobrir a própria
                            força interior
                        </p>
                    </Box>
                    <Box direction="column" justify="center" width="160px" textAlign="center">
                        <Image src={card_2} alt="" width="100%" height="100%" />
                        <p>VISÃO <br /><br />

                            Enxergamos um mundo
                            onde a paz seja
                            possível para todos

                        </p>
                    </Box>
                    <Box direction="column" justify="center" width="160px" textAlign="center">
                        <Image src={card_3} alt="" width="100%" height="100%" />
                        <p>VALORES <br /><br />

                            Autoconhecimento,
                            Paz, Dignidade,
                            Esperança e Liberdade
                        </p>
                    </Box>
                </Box>

            </Box>


            <Box style={{ zIndex: -2 }} bg="rgba(33, 170, 133, 1)" height="150px" padding="10px" align="end" justify="end" direction="column" textAlign="end">
                <Typography fontWeight="700" fontSize="36px" color="white" text="NOSSA HISTÓRIA" />
            </Box>


            <Box width="80%" margin="auto" direction="column" align="center">
                <div>
                    <Typography margin="24px 0" fontSize="32px" align="start" text="Após um primeiro contato com vídeos de Prem Rawat, nos encantamos com sua maneira simples e didática de explicar conceitos fundamentais para se viver uma vida de paz e percebemos a transformação que tais ensinamentos fariam na vida da população brasileira. "/>
                    <Typography margin="24px 0" fontSize="32px" align="start" text="Em 2003, fundamos a ONG, onde até 2013 transmitíamos os vídeos de Prem Rawat para o Canal Comunitário de televisão. "/>
                    <Typography margin="24px 0" fontSize="32px" align="start" text="Em 2011, paralelamente, firmamos parcerias com muitas entidades e associações e conseguimos levar o programa para os presídios de SP, trabalho que se estende até hoje.
Nos últimos anos conseguimos alcançar outras comunidades, levando o programa também para  idosos, dependentes químicos, moradores em situação de rua e refugiados. "/>
                    
                </div>
                <Button text="Nossa equipe" justify="center" width="200px" height="56px" color="black" />
            </Box>
            <FixedButton />
            <Footer />
        </div>
    )
}
