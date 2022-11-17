/* eslint-disable react/jsx-key */
import Box from "../../components/atoms/box/Box";
import Typography from "../../components/atoms/typography/Typography";
import Header from "../../components/header/Header";
import card_1 from '../../../public/static/images/equipe/Ellipse2-1.svg';
import card_2 from '../../../public/static/images/equipe/Ellipse2-2.svg'
import card_3 from '../../../public/static/images/equipe/Ellipse2-3.svg'
import card_4 from '../../../public/static/images/equipe/Ellipse2-4.svg'
import card_5 from '../../../public/static/images/equipe/Ellipse2-6.svg'
import card_6 from '../../../public/static/images/equipe/Ellipse2-7.svg'
import card_7 from '../../../public/static/images/equipe/Ellipse2-8.svg'
import card_8 from '../../../public/static/images/equipe/Ellipse2-9.svg'
import card_9 from '../../../public/static/images/equipe/Ellipse2-10.svg'
import card_10 from '../../../public/static/images/equipe/Ellipse2-11.svg'
import card_11 from '../../../public/static/images/equipe/Ellipse2-12.svg'
import card_12 from '../../../public/static/images/equipe/Ellipse2.svg'
import card_13 from '../../../public/static/images/equipe/Ellipse2-5.svg'

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
            <Box width="75%" margin="24px auto" flexWrap="wrap" gap="15%" align="center" justify="center">

                <Box width="150px" direction="column" align="center" margin="20px 0"><Image src={card_12} alt="" width="150%" height="150%" />
                    <Typography text={["ANA PAULA BORO", <br />,
                        "SOCIAL MEDIA"]} fontWeight="bold" fontSize="12px" textAlign="center" />
                </Box>
                <Box width="150px" direction="column" align="center" margin="20px 0"><Image src={card_1} alt="" width="150%" height="150%" />
                    <Typography text={["ANAÍDE SURANO", <br />,
                        "ESTATÍSTICAS"]} fontWeight="bold" fontSize="12px" textAlign="center" />
                </Box>
                <Box width="150px" direction="column" align="center" margin="20px 0"><Image src={card_2} alt="" width="150%" height="150%" />
                    <Typography text={["ANNA SQUADRONI", <br />,
                        "HELP DESK CADERNO DOS DETENTOS"]} fontWeight="bold" fontSize="12px" textAlign="center" />
                </Box>
                <Box width="150px" direction="column" align="center" margin="20px 0"><Image src={card_3} alt="" width="150%" height="150%" />
                    <Typography text={["CLEIDE DINARDI", <br />, "AVALIAÇÃO DOS CADERNOS"]} fontWeight="bold" fontSize="12px" textAlign="center" />
                </Box>
                <Box width="150px" direction="column" align="center" margin="20px 0"><Image src={card_4} alt="" width="150%" height="150%" />
                    <Typography text={["DIVA DA SILVA", <br />, "FACILITADORA"]} fontWeight="bold" fontSize="12px" textAlign="center" />
                </Box>
                <Box width="150px" direction="column" align="center" margin="20px 0"><Image src={card_6} alt="" width="150%" height="150%" />
                    <Typography text={["FERNANDA SERRA", <br />, "TRADUÇÃO"]} fontWeight="bold" fontSize="12px" textAlign="center" />
                </Box>
                <Box width="150px" direction="column" align="center" margin="20px 0"><Image src={card_5} alt="" width="150%" height="150%" />
                    <Typography text={["GIANFRANCO BOCCEDI", <br/>, "T.I"]}  fontWeight="bold" fontSize="12px" textAlign="center" />
                </Box>
                <Box width="150px" direction="column" align="center" margin="20px 0"><Image src={card_13} alt="" width="150%" height="150%" />
                    <Typography text={["MÔNICA LOPES", <br/>, "HELP DESK PARTICIPANTE"]} fontWeight="bold" fontSize="12px" textAlign="center" />
                </Box>
                <Box width="150px" direction="column" align="center" margin="20px 0"><Image src={card_7} alt="" width="150%" height="150%" />
                    <Typography  text={["PAOLA SQUADRONI", <br/>, "CLUBE DE LEITURA"]} fontWeight="bold" fontSize="12px" textAlign="center" />
                </Box>
                <Box width="150px" direction="column" align="center" margin="20px 0"><Image src={card_8} alt="" width="150%" height="150%" />
                    <Typography  text={["PAULLA KOCHUTT", <br/>, "CURSOS PARA VOLUNTÁRIADOS"]} fontWeight="bold" fontSize="12px" textAlign="center" />
                </Box>
                <Box width="150px" direction="column" align="center" margin="20px 0"><Image src={card_9} alt="" width="150%" height="150%" />
                    <Typography text={["SUSANNE BUSSEM", <br/>, "CURSO PARA VOLUNTÁRIOS"]} fontWeight="bold" fontSize="12px" textAlign="center" />
                </Box>
                <Box width="150px" direction="column" align="center" margin="20px 0"><Image src={card_10} alt="" width="150%" height="150%" />
                    <Typography text={["TALITA GIANE", <br/>, "MORADORES EM SITUAÇÃO DE RUA"]} fontWeight="bold" fontSize="12px" textAlign="center" />
                </Box>
                <Box width="150px" direction="column" align="center" margin="20px 0"><Image src={card_11} alt="" width="150%" height="150%" />
                    <Typography text={["IVETE BELFORT", <br/>, "PRESIDENTE DA ONG"]} fontWeight="bold" fontSize="12px" textAlign="center" />
                </Box>

            </Box>

            <Box justify="center" padding="0 0 32px 0 " gap="48px" margin="24px 0">
                <Button href="/desenvolvedores" justify="center" width="200px" height="48px" color="black" text="Desenvolvedores" />
            </Box>


            <FixedButton />
            <Footer />
        </div>
    )
}
