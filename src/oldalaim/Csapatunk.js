import './App.css';
import './css/bootstrap.css';
import velemenyleiras from "./images/velemeny/velemenyleiras.png";
import logo from "./images/logo/kerekparfejlec.png";
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Csapatunk() {
    return (
        <>
            <section id="team" class="team  team-main">
                <div class="container">
                    <div class="team-details">
                        <div class="project-header team-header team-head text-center">
                            <h2>DOLGOZÓINK</h2>
                            <p>
                                Ezen dolgozóinknak kedvenc szolgáltatása és véleményük szerint a legjobb állásuk életük során.
                            </p>
                        </div>
                        <div class="team-card">
                            <div class="container">
                                <div class="row">
                                    <div class="owl-carousel  team-carousel">
                                        <div class="col-sm-3 col-xs-12">
                                            <div class="single-team-box single-team-card team-box-bg-5">
                                                <div class="team-box-inner">
                                                    <h3>Mendi Regina</h3>
                                                    <p class="team-meta">Eladó</p>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-sm-3 col-xs-12">
                                            <div class="single-team-box single-team-card team-box-bg-6">
                                                <div class="team-box-inner">
                                                    <h3>Csatlós Laura</h3>
                                                    <p class="team-meta">
                                                        Titkárnő
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-3 col-xs-12">
                                            <div class="single-team-box single-team-card team-box-bg-7">
                                                <div class="team-box-inner">
                                                    <h3>Tóth József</h3>
                                                    <p class="team-meta">
                                                        Pénztáros
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-3 col-xs-12">
                                            <div class="single-team-box single-team-card team-box-bg-8">
                                                <div class="team-box-inner">
                                                    <h3>Balázs Imre Miklós</h3>
                                                    <p class="team-meta">
                                                        Eladó
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="team-card team-mrt-70">
                            <div class="container">
                                <div class="row">
                                    <div class="owl-carousel  team-carousel">
                                        <div class="col-sm-3 col-xs-12">
                                            <div class="single-team-box single-team-card team-box-bg-9">
                                                <div class="team-box-inner">
                                                    <h3>Mihályfi Boglárka Dóra</h3>
                                                    <p class="team-meta">Pénztáros</p>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-sm-3 col-xs-12">
                                            <div class="single-team-box single-team-card team-box-bg-10">
                                                <div class="team-box-inner">
                                                    <h3>Tordai Szabolcs Géza</h3>
                                                    <p class="team-meta">
                                                        Programozó
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-3 col-xs-12">
                                            <div class="single-team-box single-team-card team-box-bg-11">
                                                <div class="team-box-inner">
                                                    <h3>Koltai Gergely</h3>
                                                    <p class="team-meta">
                                                        Biztonságiőr
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-3 col-xs-12">
                                            <div class="single-team-box single-team-card team-box-bg-12">
                                                <div class="team-box-inner">
                                                    <h3>Nagy Bence Pál</h3>
                                                    <p class="team-meta">
                                                        Könyvelő
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
export default Csapatunk;