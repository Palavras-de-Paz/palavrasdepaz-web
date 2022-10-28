import Image from "next/image";
import { Card, Button } from "react-bootstrap"


function DepoimentosMain() {
  return (

    <>
      <container className="depoimentos-principal">
      <div className="depoimentos-container-main">

        <div className="depoimentos-photos">
          <Image src="/static/images/depo_3.png" width="100%" height="100%"/>
        </div>

        <div className="depoimentos-text">
          <p>Gostaria de compartilhar o quanto tenho estado feliz com a oportunidade deste voluntariado. Iniciei as atividades de voluntário com o coração desejoso por ajudar e tenho vivido dias em que a experiência mais me motiva e me ensina do que talvez eu possa estar ajudando. Me envolvi com os trabalhos da ONG não apenas por identificação de ideias mas por ver, e hoje mais do nunca, sentir, o que esse trabalho faz pelas pessoas. A proposta de falar sobre a paz ser possível e acessível à todos e todas fortifica os sentimentos de esperança e ajuda em meu coração.
            <br></br>
            <b>Eduardo/Voluntário</b>
          </p>
        </div>

      </div>

      <container className="depoimentos-container-main">

        <div className="depoimentos-photos">
          <Image src="/static/images/depo_4.png" width="100%" height="100%"/>
        </div>

        <div className="depoimentos-text">
          <p>O Programa de Educação para a Paz não é um milagre, é uma forma muito simples e eficaz que mostra que as ferramentas que precisamos para ter paz já estão dentro de nós. Apenas precisamos escolher utilizá-las. Tal qual a paz, o voluntariado é uma jornada. E o benefício se espalha como uma onda: você ajuda pessoas e a o mesmo tempo você acaba se ajudando. Nas palavras do poeta Kabir, citado por Prem Rawat “Todos sabemos eu existe uma gota no oceano, mas pouquíssimos sabem que existe um oceano na gota”. Seja gota, seja oceano, lembre-se de que cada um de nós  pode transformar e juntos podemos mais.
          <br></br>
          <b>Susanne/Facilitadora</b>



          </p>
        </div>

      </container>
      </container>


    </>

  )
}

export default DepoimentosMain
