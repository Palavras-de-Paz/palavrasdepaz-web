import React from 'react'
import Image from 'next/image'
import Evento1 from "./bntYou"
import Evento2 from "./bntInsta"
import Evento3 from "./btnLink"
import Evento4 from "./btnFace"
import Evento5 from './bntWhats'
import Link from 'next/link'



function Footer() {
  return (
    <>
      <footer className='footer'>
        <div className='line-footer'></div>
        <div className='medias-footer'>
          <div>
            <a href='https://www.youtube.com/channel/UCkmhiQTeUfdvKIY9NG9Navg' target="_blank"><Image id="you" onMouseOver={Evento1} src="/static/images/youtube.png" width="40px" height="40px" alt='youtube' /></a>
          </div>
          <div>
            <a href='https://www.instagram.com/palavrasdepaz.br/' target="_blank"><Image id="insta" onMouseOver={Evento2} src="/static/images/instagram.png" width="40px" height="40px" alt='instagram' /></a>
          </div>
          <div>
            <a href='https://www.linkedin.com/company/palavrasdepaz/mycompany/' target="_blank"> <Image id='link' onMouseOver={Evento3} src="/static/images/linkedin.png" width="40px" height="40px" alt='linkedin' /></a>
          </div>
          <div>
            <a href='https://www.facebook.com/palavrasdepaz.br' target="_blank"><Image id='face' onMouseOver={Evento4} src="/static/images/facebook.png" width="40px" height="40px" alt='facebook' /></a>
          </div>
          <div>
            <a href='https://wa.me/5511999756554' target="_blank"  ><Image id='whats' onMouseOver={Evento5} src="/static/images/whatsapp.png" width="40px" height="40px" alt='whatsapp' /></a>
          </div>
        </div>
        <div className='line-footer'></div>
        <div className='acesso-footer'>
          <p>ACESSO RÁPIDO</p>
        </div>
        <container className="opcoes-footer">

          <div className='colunas-footer'>
          <h6>Quem Somos</h6>
            <Link href='/equipe'>Nossa equipe</Link>
            <Link href='/quemsomos'>Nossa História</Link>

          </div>

          <div className='colunas-footer'>
            <h6>O Programa</h6>
            <Link href="#">Reunião</Link>
            <Link href='https://www.premrawat.com/pt/' target="_blank">Prew Rawart</Link>
            <Link href='https://tprf.org/pt-br/' target="_blank">TPRF</Link>
          </div>

          <div className='colunas-footer'>
            <h6>Voluntários</h6>
            <Link href="#">Cadastro</Link>
            <Link href='https://www.atados.com.br/' target="_blank">Atados</Link>
          </div>

          <div className='colunas-footer'>
            <h6>Parcerias</h6>
            <Link href='/parcerias'>Objetivo</Link>
            <Link href="#">Contato</Link>
             </div>

          <div className='colunas-footer'>
            <h6>Doações</h6>
            <Link href="#">Prestação de contas</Link>
            <Link href='/doacoes'>PIX</Link>
            <Link href='doacoes'>Pay Pal</Link>
             </div>

          <div className='colunas-footer'>
            <h6>Home</h6>
            <Link href='/galeria'>Galeria de fotos</Link>
            <Link href='/depoimentos'>Depoimentos</Link>
            </div>

        </container>
        <container className="rodape-footer">
          <div>
            <p>Direitos rezervados à Palavra de Paz</p>
          </div>
          <div className='copyright-footer'>
            <p><a href='/desenvolvedores'>©2022 Desenvolvedores</a></p>
          </div>
          <div>
            <p>CNPJ: 05.920.548/0001-73</p>
          </div>

        </container>
      </footer>

    </>
  )
}

export default Footer
