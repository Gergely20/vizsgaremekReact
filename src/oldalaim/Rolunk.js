import './App.css';
import './css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import en from "./images/about/NagyGergely.JPG";
import onmagam from "./images/about/Nagy Gergely.JPG";
import velemenyleiras from "./images/velemeny/velemenyleiras.png";
import logo from "./images/logo/kerekparfejlec.png";

function Rolunk() {
    return (
        <>
            <section className="about-part">
                <div className="container">
                    <div className="about-part-details text-center">
                        <h2>RÓLUNK</h2>
                    </div>
                </div>
            </section>
            <div className="about-history">
                <h2 id="en">Nagy Gergely</h2>
                <br />
                <div className="container">
                    <div className="about-history-content">
                        <div className="row">
                            <div className="col-md-5 col-sm-12">
                                <div className="single-about-history">
                                    <div className="about-history-img">
                                        <img src={en} />
                                        <div>
                                            <p>
                                                <strong>
                                                    <u>
                                                        Név:
                                                    </u>
                                                </strong>
                                                Nagy Gergely
                                            </p>
                                            <p>
                                                <strong>
                                                    <u>
                                                        Lakcím:
                                                    </u>
                                                </strong>
                                                4551 Nyíregyháza-oros, Emlék u. 2.
                                            </p>
                                            <p>
                                                <strong>
                                                    <u>
                                                        Legmagasabb iskolai végzettség
                                                    </u>
                                                </strong>
                                                Érettségi
                                            </p>
                                            <div> És amellett a
                                                kerékpárkölcsönzők motiváltak igazán, mivel sok olyan ismerősöm is van egyrészt,
                                                akik imádják magát a folyamatát és mint sportágat is. Meg az egészséges életmód
                                                és a
                                                környezet megóvása tudatot szerettem és mindig is abban éltem amikor csak
                                                tehettem.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <div className="single-about-history">
                                    <div className="about-history-img">
                                        <img src={onmagam} />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-offset-1 col-md-6 col-sm-12">
                            <div className="single-about-history">
                                <div className="about-history-txt">
                                    <h2>A TÖRTÉNETEM, HOGY VEZETHESSEK EGY ILYEN CÉGET:</h2>
                                    <p>
                                        Ott kezdődött az egész, hogy mindig is érdekelt a valamilyen fajta üzletelés. És én
                                        itt most leginkább csak kimondottan a kölcsönző üzletekre és magára a kölcsönzés
                                        folyamatára gondolok. Mindig szerettem
                                        adni, ha tudom cserébe kapok is érte valami értékeset. Meg ha tudom miért is
                                        adtam. Persze ezzel egyidejüleg mindig is motivált az az érzés, hogy egy terméket
                                        odaadok egy valakinek használatra készen és bizonyos időn belűl tudom, hogy
                                        visszakapom, beleértve azt is hogy mindannyian jól jártunk vagyis hogy az előnyünkre
                                        tudjuk fordítani, amit egymásnak kölcsönadtunk. És tudom azt is, hogy még azon a
                                        személyen kívűl egy egészen másik
                                        személy is használatba fogja venni. Mivel egy feltételért cserébe és
                                        egy bizonyos időkereten belűl rábizom azt, ami az enyém. Ezzel ellentétben sosem
                                        vonzottak az árusító szolgáltatások, amik kimondottan eladnak. Azért nem, mert ott
                                        végleg eladják a termékeket, és nem az van hogy vissza kerül a gazdájához, azaz a
                                        céghez, hogy majd lehetőséget adva egy másik személynek is a használatra. Meg
                                        remélhetőleg azon kívül is majd egy másik személynek a használatra.
                                    </p>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <div className="experience-time">
                                        <h2>A FOLYAMATA AZ EGÉSZNEK:</h2>
                                        <div className="main-timeline">
                                            <div className="row">
                                                <div className="col-md-2 col-sm-2">
                                                    <div className="experience-time">
                                                        <h3>2016</h3>
                                                    </div>
                                                </div>
                                                <div className="col-md-10 col-sm-10">
                                                    <div className="timeline">

                                                        <div className="timeline-content">
                                                            <h4 className="title"> <span><i className="fa fa-circle-o"
                                                                aria-hidden="true"></i></span></h4>

                                                            <ul className="description">
                                                                <li>Ebben az évben érettségiztem le, azaz végeztem el a
                                                                    középiskolát.
                                                                    Akkor volt ötlet, hogy nekem ezután egy ilyen kölcsönzői
                                                                    cégnél kéne majd dolgoznom, mint beosztott. Mert
                                                                    akkoriban amit tanultam nem érdekelt. Igazából csak az
                                                                    érettségi miatt jártam oda.</li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-2 col-sm-2">
                                                    <div className="experience-time">
                                                        <h3>2017</h3>
                                                    </div>
                                                </div>
                                                <div className="col-md-10 col-sm-10">
                                                    <div className="timeline">

                                                        <div className="timeline-content">
                                                            <h4 className="title"> <span><i className="fa fa-circle-o"
                                                                aria-hidden="true"></i></span></h4>

                                                            <ul className="description">
                                                                <li>Elkezdtem dolgozni egy ilyen cégnél, ami igazából
                                                                    vállalkozás volt. A neve
                                                                    HomeCycleNyháza
                                                                    kerékpárkölcsönző cég volt. És ott lényegébe ügyfelekkel
                                                                    kellett foglalkozni. És mint eladó kölcsönzéseket
                                                                    kellett
                                                                    intézni minden munkanap. Mert minden munkanap jöttek
                                                                    kölcsönözni.
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-2 col-sm-2">
                                                    <div className="experience-time">
                                                        <h3>2018</h3>
                                                    </div>
                                                </div>
                                                <div className="col-md-10 col-sm-10">
                                                    <div className="timeline">

                                                        <div className="timeline-content">
                                                            <h4 className="title"> <span><i className="fa fa-circle-o"
                                                                aria-hidden="true"></i></span></h4>

                                                            <ul className="description">
                                                                <li>Egyre több tapasztalatot szereztem, mint ottani dolgozó,
                                                                    hogy hogyan működik meg kezdtem 1 év után egy kicsit
                                                                    jobban
                                                                    át látni az egészet. Pont ebben az éveben határoztam el
                                                                    magamba igazán, hogy valaha egyszer én elkezdhetnék egy
                                                                    ilyen kerékpárkölcsönző egyéni vállalkozást, vagyis egy
                                                                    ehhez hasonló
                                                                    kerékpárkölcsönzőnek lennék a cégvezetője.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-2 col-sm-2">
                                                    <div className="experience-time">
                                                        <h3>2019</h3>
                                                    </div>
                                                </div>
                                                <div className="col-md-10 col-sm-10">
                                                    <div className="timeline">

                                                        <div className="timeline-content">
                                                            <h4 className="title"> <span><i className="fa fa-circle-o"
                                                                aria-hidden="true"></i></span></h4>

                                                            <ul className="description">
                                                                <li>Ebben az évben ajánlotta fel az ottani cég vezetője,
                                                                    hogy
                                                                    nem
                                                                    e lennék az ottani
                                                                    cég vezetője. Ez a gondolat ami igazán megerősítette az
                                                                    életutamat, a cégvezető felé.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-2 col-sm-2">
                                                    <div className="experience-time">
                                                        <h3>2020</h3>
                                                    </div>
                                                </div>
                                                <div className="col-md-10 col-sm-10">
                                                    <div className="timeline">

                                                        <div className="timeline-content">
                                                            <h4 className="title"> <span><i className="fa fa-circle-o"
                                                                aria-hidden="true"></i></span></h4>

                                                            <ul className="description">
                                                                <li>Ebben az évben pedig megjött az ötlet, hogy én egy
                                                                    kerékpárkölcsönző szolgáltatást szeretnék alapítani, ami
                                                                    a saját egyéni vállalkozásom lenne. Egy
                                                                    olyat aminek már lesz weboldala is, ahol lehet előre
                                                                    időpontot
                                                                    foglalani egy olyan feltétellel, hogy előszőr be kell
                                                                    jönni hozzánk személyesen azaz személyesen kell
                                                                    kölcsönözni. Aztán majd csak ezután lehet online egy
                                                                    általunk megadott felhasználónévvel és jelszóval.
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-2 col-sm-2">
                                                    <div className="experience-time">
                                                        <h3>2021</h3>
                                                    </div>
                                                </div>
                                                <div className="col-md-10 col-sm-10">
                                                    <div className="timeline">

                                                        <div className="timeline-content">
                                                            <h4 className="title"> <span><i className="fa fa-circle-o"
                                                                aria-hidden="true"></i></span></h4>

                                                            <ul className="description">
                                                                <li>Sikeres megalapítása a kerékpárkölcsönző
                                                                    szolgáltatásomnak
                                                                    előre meghatározott beosztottakkal, hozzá elkészített
                                                                    weboldallal.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="statistics">
                <div className="container">
                    <div className="statistics-counter ">
                        <div className="col-md-3 col-sm-6">
                            <div className="single-ststistics-box">
                                <div className="statistics-img">
                                    <img src="assets/images/counter/counter1.png" alt="counter-icon" />
                                </div>
                                <div classNameName="statistics-content">
                                    <div classNameName="counter">429</div>
                                    <h3>NAPJA ÜZEMEL A KÖLCSÖNZŐ.</h3>
                                </div>
                            </div>
                        </div>
                        <div classNameName="col-md-3 col-sm-6">
                            <div classNameName="single-ststistics-box">
                                <div classNameName="statistics-img">
                                    <img src="assets/images/counter/counter2.png" alt="counter-icon" />
                                </div>
                                <div classNameName="statistics-content">
                                    <div classNameName="counter">1954</div>
                                    <h3>FOGLALÁS TÖRTÉNT EDDIG.</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="single-ststistics-box">
                                <div className="statistics-img">
                                    <img src="assets/images/counter/kerekparraidopontfoglalas.jpg" alt="counter-icon" />
                                </div>
                                <div className="statistics-content">
                                    <div className="counter">2526</div>
                                    <h3>KERÉKPÁRUNK VOLT MÁR HASZNÁLATBA VÉVE</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="single-ststistics-box">
                                <div className="statistics-img">
                                    <img src="assets/images/counter/counter4.png" alt="counter-icon" />
                                </div>
                                <div className="statistics-content">
                                    <div className="counter">2520</div>
                                    <h3>EDDIGI ELÉGEDETT ÜGYFELÜNK</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section class="hm-footer">
                <div class="container">
                    <div class="hm-footer-details">
                        <div class="row">
                            <div class="col-md-4 col-sm-6 col-xs-12">
                                <div class="hm-footer-widget">
                                    <div class="hm-foot-title ">
                                        <div class="logo">
                                            <a href="http://localhost:3000/tipusaink">
                                                <img src={logo} alt="logo" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="hm-foot-para">
                                        <p>
                                            Aki szeretne kölcsönözni nálunk, az itt megteheti. Hiszen erre az ikonra
                                            kattintva a
                                            készlet oldalra irányítódik át. És ott több termék közül válogathat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class=" col-md-4 col-sm-6 col-xs-12">
                                <div class="hm-footer-widget">
                                    <div class="hm-foot-title">
                                        <h4>OLDALAINK</h4>
                                    </div>
                                    <div class="footer-menu ">
                                        <ul class="">
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
                            <div class=" col-md-4 col-sm-6 col-xs-12">
                                <div class="hm-footer-widget">
                                    <div class="hm-foot-title">
                                        <h4>VÉLEMÉNYLEÍRÁS</h4>
                                    </div>
                                    <div class="hm-para-news">
                                        <a href="http://localhost:3000/velemeny">
                                            Irja le véleményét a szolgáltatásunkról
                                        </a>
                                    </div>
                                </div>
                                <div class="hm-footer-widget">
                                    <div class="hm-foot-title">
                                        <img src={velemenyleiras} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <footer class="footer-copyright">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-7">
                            <div class="foot-copyright pull-left">
                                <p>
                                    &copy; Gergely bikerental service
                                    <a href="http://localhost:3000/rolunk">Rólunk</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="scroll-Top">
                        <i class="fa fa-angle-double-up return-to-top" id="scroll-top" data-toggle="tooltip"
                            data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
                    </div>
                </div>

            </footer>
        </>

    )
}
export default Rolunk;