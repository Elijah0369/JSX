import './App.css';
import React from 'react';
import { Button, Card, Nav, NavDropdown } from 'react-bootstrap';
import logo from "./images/logo512.png"
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

let myName = "Aziz Yatimi";

function App() {
  return (
    <React.Fragment>
      <div className="app">
        <Nav variant="pills" >
          <Nav.Item>
            <Nav.Link eventKey="1" href="#/home">
              NavLink 1 content
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2" title="Item">
              NavLink 2 content
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="3" disabled>
              NavLink 3 content
            </Nav.Link>
          </Nav.Item>
          <NavDropdown title="Dropdown" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <h1>Checkpoint React JS</h1>
        {/* <div className='cards-container'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div> */}
        <Card style={{ width: '18rem' }}>
          {/* <Card.Img variant="top" src="https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png" /> */}
          <Image />
          <Card.Body>
            {/* <Card.Title>Card Title</Card.Title> */}
            <Name />
            {/* <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text> */}
            <Price />
            <Description />
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
       {myName ? <h1>Hello {myName}!</h1> : <h1>Hello, there!</h1>}
       {myName && <img src={logo} />}

      </div>
    </React.Fragment>
  );
}

export default App;
