import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import velemenyleiras from "./images/velemeny/velemenyleiras.png";
import logo from "./images/logo/kerekparfejlec.png";

function Regisztralas() {
    return (
        <>  <section id="tipuscimszin02" className="new-project">
            <div className="section-header text-center">
                <h1>REGISZTRÁLNI ITT LEHET A TERMÉKEINKRE</h1>
            </div>
        </section>
            <header className="App-header">
                <Container>
                    <Form>
                        <Row>
                            <Col md>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Felhasználónév</Form.Label>
                                    <Form.Control type="email"></Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md>
                                <Form.Group>
                                    <Form.Label>E-mail cím</Form.Label>
                                    <Form.Control type="email"></Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md>
                                <Form.Group>
                                    <Form.Label>Jelszó</Form.Label>
                                    <Form.Control type="password"></Form.Control>
                                </Form.Group>
                                <Button variant="secondary" type="submit">Regisztráció</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </header>
            <section id="tipuscimszin02" className="new-project">
                <div className="section-header text-center">
                    <h1>AKI MÁR REGISZTRÁLT AZ ITT BEJELENTKEZHET</h1>
                </div>
            </section>
            <header className="App-header">
                <Container>
                    <Form>
                        <Row>
                            <Col md>
                                <Form.Group>
                                    <Form.Label>E-mail cím</Form.Label>
                                    <Form.Control type="email"></Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md>
                                <Form.Group>
                                    <Form.Label>Jelszó</Form.Label>
                                    <Form.Control type="password"></Form.Control>
                                </Form.Group>
                                <Button variant="secondary" type="submit">Bejelentkezés</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </header>
            <section className="hm-footer">
                <div className="container">
                    <div className="hm-footer-details">
                        <div className="row">
                            <div class="col-md-4 col-sm-6 col-xs-12">
                                <div className="hm-footer-widget">
                                    <div className="hm-foot-title ">
                                        <div className="logo">
                                            <a href="http://localhost:3000/tipusaink">
                                                <img src={logo} alt="logo" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="hm-foot-para">
                                        <p>
                                            Aki szeretne kölcsönözni nálunk, az itt megteheti. Hiszen erre az ikonra
                                            kattintva a
                                            készlet oldalra irányítódik át. És ott több termék közül válogathat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-md-4 col-sm-6 col-xs-12">
                                <div className="hm-footer-widget">
                                    <div className="hm-foot-title">
                                        <h4>OLDALAINK</h4>
                                    </div>
                                    <div className="footer-menu ">
                                        <ul className="">
                                            <li><a href="http://localhost:3000/">Főoldal</a></li>
                                            <li><a href="https://gergely20.github.io/ADATKEZELESI-NYILATKOZAT/">Adatkezelési Nyilatkozat</a></li>
                                            <li><a href="http://localhost:3000/rolunk">Rólunk</a></li>
                                            <li><a href="http://localhost:3000/csapatunk">Csapatunk</a></li>
                                            <li><a href="http://localhost:3000/tipusaink">Típusaink</a></li>
                                            <li><a href="http://localhost:3000/keszlet">Készlet</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-md-4 col-sm-6 col-xs-12">
                                <div className="hm-footer-widget">
                                    <div className="hm-foot-title">
                                        <h4>VÉLEMÉNYLEÍRÁS</h4>
                                    </div>
                                    <div className="hm-para-news">
                                        <a href="http://localhost:3000/velemeny">
                                            Irja le véleményét a szolgáltatásunkról
                                        </a>
                                    </div>
                                </div>
                                <div className="hm-footer-widget">
                                    <div className="hm-foot-title">
                                        <img src={velemenyleiras} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <footer className="footer-copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-7">
                            <div className="foot-copyright pull-left">
                                <p>
                                    &copy; Gergely bikerental service
                                    <a href="http://localhost:3000/rolunk">Rólunk</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="scroll-Top">
                        <i className="fa fa-angle-double-up return-to-top" id="scroll-top" data-toggle="tooltip"
                            data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
                    </div>
                </div>

            </footer>
        </>
    )
}
export default Regisztralas;