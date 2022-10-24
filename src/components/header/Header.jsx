import { Container, Nav, Navbar, Offcanvas, Stack } from 'react-bootstrap';
import Image from "next/image";
import Logo from '../../../public/static/images/logo.png'

function Header() {
  return (
    <>
      <container className="styles-header">
        {['xl'].map((expand) => (
          <Navbar key={expand} bg="light" expand={expand} className="mb-3">
            <Container fluid>
              <div className='logo-header'>
              <Image  src={Logo} alt="logo-header" width="337px" height="156px"  />
              </div>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    MENU
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav id='buttons-header' className="justify-content-center  flex-grow-1 pe-3" >
                    <Nav.Link href="#action1">Quem Somos</Nav.Link>
                    <Nav.Link href="#action2">O Programa</Nav.Link>
                    <Nav.Link href="#action2">Voluntários</Nav.Link>
                    <Nav.Link href="#action2">Doações</Nav.Link>
                    <Nav.Link href="#action2">Parcerias</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </container>
    </>
  );
}

export default Header;
