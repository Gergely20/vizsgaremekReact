import kerekparkeszlet from "./images/project/kerekparkeszlet.jpg";
import kerekparkeszleten from "./images/keszlet/kerekparkeszlet.jpg";
import kerekparkeszlet01 from "./images/keszlet/kerekparkeszlet01.jpg";
import kerekparkeszlet02 from "./images/keszlet/kerekparkeszlet02.jpg";
import kerekparkeszlet03 from "./images/keszlet/kerekparkeszlet03.jpg";
import velemenyleiras from "./images/velemeny/velemenyleiras.png";
import logo from "./images/logo/kerekparfejlec.png";
import Nav from "react-bootstrap/Nav";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

function Keszlet() {
    return (
        <>
            <div className="container">
                <h1 id="keszletunk">Készletünk</h1>
                <div className="col-md-3 col-sm-6">
                    <img src={kerekparkeszlet}></img>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className="container">
                <div className="section-header">
                    <h3 className="price-head" id="berelheto-kerekparjaink">BÉRELHETŐ KERÉKPÁRJAINK ÉS KERÉKPÁR TARTOZÉKAINK</h3>
                    <p id="izles">
                        Amelyik az ízlésének megfelelő azt válassza ki.
                    </p>
                </div>
                <div className="pricing-content">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="pricing-box">
                                <div className="pricing-header">
                                    <img src={kerekparkeszleten} />
                                    <h2>MOUNTAIN-BIKE</h2>
                                    <h3 className="packeg_p">1000 Ft</h3>
                                    <p>1 órára</p>

                                </div>
                                <div className="project-btn pricing-btn text-center">
                                    <select className="project-view" id="cars">
                                        Foglalok
                                        <option value="volvo">Foglalok</option>
                                        <option value="audi">09:00</option>
                                        <option value="saab">12:00</option>
                                        <option value="opel">15:00</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div className="pricing-box">
                                <div className="pricing-header">
                                    <img src={kerekparkeszlet01} />
                                    <h2>TREKKING-BIKE</h2>
                                    <h3 className="packeg_p">1000 Ft</h3>
                                    <p>1 órára</p>

                                </div>
                                <div className="project-btn pricing-btn text-center">
                                    <select className="project-view" id="cars">
                                        Foglalok
                                        <option value="volvo">Foglalok</option>
                                        <option value="audi">09:00</option>
                                        <option value="saab">12:00</option>
                                        <option value="opel">15:00</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="pricing-box">
                                <div className="pricing-header">
                                    <img src={kerekparkeszlet02} />
                                    <h2>BMX</h2>
                                    <h3 className="packeg_p">1000 Ft</h3>
                                    <p>1 órára</p>

                                </div>
                                <div className="project-btn pricing-btn text-center">
                                    <select className="project-view" id="cars">
                                        Foglalok
                                        <option value="volvo">Foglalok</option>
                                        <option value="audi">09:00</option>
                                        <option value="saab">12:00</option>
                                        <option value="opel">15:00</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="pricing-box">
                                <div className="pricing-header">
                                    <img src={kerekparkeszlet03} />
                                    <h2>GYEREK KERÉKPÁR</h2>
                                    <h3 className="packeg_p">1000 Ft</h3>
                                    <p>1 órára</p>

                                </div>
                                <div className="project-btn pricing-btn text-center">
                                    <select className="project-view" id="cars">
                                        Foglalok
                                        <option value="volvo">Foglalok</option>
                                        <option value="audi">09:00</option>
                                        <option value="saab">12:00</option>
                                        <option value="opel">15:00</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section id="kolcsonzesfeltetelei" className="new-project">
                <div className="container">
                    <div className="new-project-details">
                        <div className="row">
                            <div className="col-md-10 col-sm-8">
                                <div className="single-new-project">
                                    <h3>
                                        KERÉKPÁR KÖLCSÖNZÉS FELTÉTELEI
                                    </h3>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-4">
                                <div className="single-new-project">
                                    <a href="https://gergely20.github.io/KOLCSONZESFELTETELEI/" className="slide-btn">
                                        Megnézem
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
export default Keszlet;