import { Outlet, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import kerekparfejlec from "./images/logo/kerekparfejlec.png";
import './App.css';
import './css/bootstrap.css';

const Fooldal = () => {
  return (
    <>
      <div className="container">
        <Navbar bg="light" variant="light">
          <Nav.Link className="navbar-brand">
            <img src={kerekparfejlec} />
          </Nav.Link>
          <Button variant="outline-warning">
            <Nav.Link>
              <Link to="/">Főoldal</Link>
            </Nav.Link>
          </Button>{' '}
          <Button variant="outline-warning">
            <Nav.Link>
              <Link to="/rolunk">Rólunk</Link>
            </Nav.Link>
          </Button>
          <Button variant="outline-warning">
            <Nav.Link>
              <Link to="/kepekesforras">Képek és Forrás</Link>
            </Nav.Link>
          </Button>
          <Button variant="outline-warning">
            <Nav.Link>
              <Link to="/csapatunk">Csapatunk</Link>
            </Nav.Link>
          </Button>
          <Button variant="outline-warning">
            <Nav.Link>
              <Link to="/tipusaink">Típusaink</Link>
            </Nav.Link>
          </Button>
          <Button variant="outline-warning">
            <Nav.Link>
              <Link to="/velemeny">Vélemény</Link>
            </Nav.Link>
          </Button>
          <Button variant="outline-warning">
            <Nav.Link>
              <Link to="/keszlet">Készlet</Link>
            </Nav.Link>
          </Button>
          <Button variant="outline-warning">
            <Nav.Link>
              <Link to="/regisztralas">Regisztráció</Link>
            </Nav.Link>
          </Button>
        </Navbar>
      </div>
      <Outlet />
    </>
  )
};

export default Fooldal;