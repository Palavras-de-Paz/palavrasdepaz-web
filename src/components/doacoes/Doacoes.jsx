import React from 'react'
import Image from 'next/image'

function Doacoes() {
  return (
    <>
      <container className="doacao-main">
        <div className='doacao-main-texto'>
          <div className='doacao-texto'>
            <p>Doar é um ato genuíno de bondade que faz a diferença na vida não só de quem recebe, mas também de quem doa, pois traz sentimentos de alegria, satisfação e plenitude.</p>

            <p>  Também nos tornamos mais justos e igualitários, pois ao contribuir para suprir as necessidades do próximo, contribuimos para a melhora das instituições, das pessoas e da sociedade como um todo.</p>
            <p>Desde já gostaríamos de agradecer pela sua doação e dizer que ela é fundamental, pois este ato de compaixão e amor ao próximo nos permitirá continuar a:
            </p>
          </div>
          <div className='doacoes-icones'>
            <Image src="/static/images/transformar.png" width="100%" height="100%" />
            <Image src="/static/images/sorriso.png" width="100%" height="100%" />
            <Image src="/static/images/paz.png" width="100%" height="100%" />
          </div>
          <div className='doacoes-texto-icones'>
            <div>
              <p>Transformar vidas</p>
            </div>
            <div>
              <p>Gerar sorrisos</p>
            </div>
            <div>
              <p>Promover a paz</p>
            </div>
          </div>
        </div>
        <div className='doacoes-image'>
          <Image src="/static/images/doacoes.png" width="500%" height="100%" />
        </div>
      </container>

      <container>
        <div className='doacoes-atraves'>
          <p>DOE ATRAVÉS</p>

        </div>
        <div className='doacoes-empresas'>
          <div className='doacoes-pix'>
            <div>
              <Image src="/static/images/pix.png" width="300%" height="100%" />
            </div>
            <div>
              <Image src="/static/images/cnpj.png" width="300%" height="100%" />
            </div>
          </div>

          <div className='doacoes-images-empresas'>
            <div>
              <Image src="/static/images/paypal.png" width="300%" height="100%" />
            </div>

            <div>
              <div className='doacoes-icones-empresas'>
                <Image src="/static/images/american.png" width="50%" height="50%" />
                <Image src="/static/images/elo.png" width="50%" height="50%" />
                <Image src="/static/images/master.png" width="50%" height="50%" />
              </div>
              <div className='teste'>
                <Image src="/static/images/visa.png" width="100%" height="50%" />
                <Image src="/static/images/hiper.png" width="100%" height="50%" />
              </div>
            </div>
          </div>

        </div>

      </container>

        <container className="banner-paz">
          <p>"Eu quero ver a paz dançando no coração de todo ser humano."Prem Rawat</p>
        </container>


    </>
  )
}

export default Doacoes
