import React from 'react'


function Header() {
  return (
    <>
      <header className='header'>

          <container className="images-header">

          <div>
            <img src="/images/logo.png" alt="" />
          </div>

          <div>

          <img src="/images/palavras.png" alt="" />

          </div>

          </container>

          <container className="buttons-header">
            <ul>

              <li><a href='#'>Quem Somos</a></li>
              <li><a href='#'>O Programa</a></li>
              <li><a href='#'>Voluntários</a></li>
              <li><a href='#'>Doações</a></li>
              <li><a href='#'>Parcerias</a></li>

            </ul>


          </container>





      </header>

    </>
  )
}

export default Header
