import React from 'react'
import Image from 'next/image'



function Footer() {
  return (
    <>
    <footer className='footer'>
      <div className='line-footer'></div>
      <div className='medias-footer'>
        <div>
        <Image  src="/static/images/youtube.png" width="40px" height="40px"/>
        </div>
        <div>
        <Image  src="/static/images/instagram.png" width="40px" height="40px"/>
        </div>
        <div>
        <Image  src="/static/images/linkedin.png" width="40px" height="40px"/>
        </div>
        <div>
        <Image  src="/static/images/facebook.png" width="40px" height="40px"/>
        </div>
        <div>
        <Image src="/static/images/whatsapp.png" width="40px" height="40px"/>
        </div>
      </div>
      <div className='line-footer'></div>
        <div className='acesso-footer'>
          <p>ACESSO RÁPIDO</p>
        </div>
      <container className="opcoes-footer">
        <div className='colunas-footer'>
          <h6>Quem Somos</h6>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
        </div>

        <div className='colunas-footer'>
          <h6>O Programa</h6>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
        </div>

        <div className='colunas-footer'>
          <h6>Voluntários</h6>
          <p>Lorem</p>
          </div>

        <div className='colunas-footer'>
          <h6>Doações</h6>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
        </div>

        <div className='colunas-footer'>
          <h6>Parcerias</h6>
          <p>Lorem</p>
          <p>Lorem</p>
        </div>
      </container>
      <container className="rodape-footer">
          <div>
            <p>Direitos rezervados à Palavra de Paz</p>
          </div>
          <div className='copyright-footer'>
            <p>©2022<a href='#'>Desenvolvedores</a></p>
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
