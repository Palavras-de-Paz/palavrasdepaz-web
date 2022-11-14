import * as S from "./styled";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Typography } from "../atoms/typography/Typography";
import Box from "../atoms/box/Box";


export default function FixedButton() {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);


  return (

    <>

      <S.FixedBtn onClick={() => setSmShow(true)} className="animate__animated animate__fadeIn animate__delay-2s">CONTATO</S.FixedBtn>

      <Modal style={{bottom: "-75px !important", right: "-700px"}}
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
        <Box display="flex" direction="column">

          <Modal.Title id="example-modal-sizes-title-sm" className="m-auto">
            CONTATO
          </Modal.Title>
         <div>
         <p>Fique à vontade. Retornaremos em breve.</p>
         </div>
        </Box>
        </Modal.Header>
        <Modal.Body>
        {/* formulario de contato */}
        <form>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Nome</label>
            <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="" requiredd/>
            <label for="exampleFormControlInput1" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" required/>
            <label for="exampleFormControlInput1" className="form-label">Assunto</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" />
            <label for="exampleFormControlInput1" className="form-label">Mensagem</label>
            <textarea type="text" className="form-control" id="exampleFormControlInput1" placeholder="" required/>
          </div>
         <Box display="flex" justify="center">
         <button style={{background:"rgba(33,170,133,1)", border:"none", borderRadius:"10px", textAlign:"center", padding:"8px 24px", color:"white", fontWeight:"bold", letterSpacing:"0.1em"}}>ENVIAR</button>
         </Box>
        </form>
        </Modal.Body>
      </Modal>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            CONTATO
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </>

  )
}
