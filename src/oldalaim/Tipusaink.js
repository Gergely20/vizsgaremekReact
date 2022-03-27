import velemenyleiras from "./images/velemeny/velemenyleiras.png";
import logo from "./images/logo/kerekparfejlec.png";

function Tipusaink() {
    return (
        <>
            <section id="tipuscimszin" className="new-project">
                <div className="section-header text-center">
                    <h2>A KERÉKPÁR TÍPUSAINKRÓL LEIRÁS</h2>
                </div>
            </section>
            <section id="tipusszinek" className="new-project">
                <div className="container">
                    <div className="new-project-details">
                        <div className="row">
                            <div className="col-md-10 col-sm-8">
                                <div className="single-new-project">
                                    <h3>
                                        HEGYI KERÉKPÁR LEÍRÁS
                                    </h3>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-4">
                                <div className="single-new-project">
                                    <a href="https://gergely20.github.io/KEREKPAROK/hegyi-kerekpar.html" className="slide-btn">
                                        Mountain-Bike
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="container">
                    <div className="new-project-details">
                        <div className="row">
                            <div className="col-md-10 col-sm-8">
                                <div className="single-new-project">
                                    <h3>
                                        TREKKING KERÉKPÁR LEÍRÁS
                                    </h3>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-4">
                                <div className="single-new-project">
                                    <a href="https://gergely20.github.io/KEREKPAROK/trekking-kerekpar.html" className="slide-btn">
                                        Trekking-Bike
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="container">
                    <div className="new-project-details">
                        <div className="row">
                            <div className="col-md-10 col-sm-8">
                                <div className="single-new-project">
                                    <h3>
                                        BMX KERÉKPÁR LEÍRÁS
                                    </h3>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-4">
                                <div className="single-new-project">
                                    <a href="https://gergely20.github.io/KEREKPAROK/bmx-kerekpar.html" className="slide-btn">
                                        BMX-Bike
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="container">
                    <div className="new-project-details">
                        <div className="row">
                            <div className="col-md-10 col-sm-8">
                                <div className="single-new-project">
                                    <h3>
                                        VÁROSI KERÉKPÁR LEÍRÁS
                                    </h3>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-4">
                                <div className="single-new-project">
                                    <a href="https://gergely20.github.io/KEREKPAROK/varosi-kerekpar.html" className="slide-btn">
                                        City-Bike
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
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="hm-footer-widget">
                                    <div className="hm-foot-title ">
                                        <div className="logo">
                                            <a href="http://localhost:3000/">
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
export default Tipusaink;