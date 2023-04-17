import Head from 'next/head'
// BootStrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons'

function MetaData(){
  return (
    <Head>
      <title> Resume Helper</title>
      <meta name="description" content="Ai helps with resume and cover letter" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

function Navigation(){
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container fluid>
            {/* FIXME: Icon enlarges and looses styling. Temp fix is to remove import and aff it again */}
            <Navbar.Brand href="/"><FontAwesomeIcon icon={faRobot} bounce size='xs'/> Resume Helper</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>

                  {/* TODO: Make sign in / sign up buttons only visuble here and at the side of hambuger.*/}                  
                  <Stack gap={2} >
                    <Button >Register</Button>
                    <Button variant='secondary'>Sign In</Button> 
                  </Stack>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className="myLogo" href="/" >Resume Templates</Nav.Link>
                  <Nav.Link href="/">CV Templates</Nav.Link>
                  <Nav.Link href="/">Cover Letters</Nav.Link>
                  <Nav.Link href="/">Pricing</Nav.Link>
                  <Nav.Link href="/">Register</Nav.Link>
                  <Nav.Link className="xl" href="/">Sign In</Nav.Link>
                  {/* <Button className='mb-2'>Register</Button>
                  <Button className='mb-2'>Sign In</Button> */}
                </Nav>              
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

function CallToAction(){
  return (
    <h1 className='Logo'>The online resume builder that is AI powered catered to your resume.{' '}
    <Button>Try for free</Button></h1>
  );
}

function Steps(){
  return <h2>This is the step</h2>;
}

function Prices(){
  return <h2>Money money money moeny</h2>;
}

//TODO: Fix footer bar layout 
function FooterBar(){
  return ( 
    <footer className="footerBar">
      <Container>
        <Row className="justify-content-md-left">
          <Col>
            <ul>
              title
              <li>
                row 1
              </li>
              <li>
                row 2
              </li>
            </ul>
          </Col>

        </Row>
        <Row className="justify-content-md-center">
          
          <Col>
           <ul>
            title
            <li>
              row 3
            </li>
            <li>
              row 4
            </li>
           </ul>
          </Col>

        </Row>
        <Row className="justify-content-md-right">
          <Col>
            <ul>
              titlw
              <li>
                row 5
              </li>
              <li>
                row6
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default function Home() {
  return (
    <>
    <MetaData />
    <Navigation />
    <CallToAction />
    <Steps />
    <Prices />
    <FooterBar />
    </>
  )
}
