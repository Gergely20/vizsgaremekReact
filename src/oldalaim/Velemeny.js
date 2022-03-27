import "./App.css";
import "./css/bootstrap.css";
import velemenyleiras from "./images/velemeny/velemenyleiras.png";
import logo from "./images/logo/kerekparfejlec.png";
import { Form } from "react-bootstrap";
import Klara from "./images/blog/cmn1.jpg";
import Szabina from "./images/blog/bl2.jpg";
import Milan from "./images/blog/cmn3.jpg";
import Agnes from "./images/blog/cmn2.jpg";

function Velemeny() {
    return (
        <>
            <section class="about-part">
                <div class="container">
                    <div class="about-part-details text-center">
                        <h2>VÉLEMÉNY HOZZÁADÁSOK</h2>
                    </div>
                </div>
            </section>
            <section id="ertekelesszin" class="new-project">
                <div class="container">
                    <div class="new-project-details">
                        <div class="row">
                            <div class="col-md-10 col-sm-8">
                                <div class="single-new-project">
                                    <h3>
                                        KERÉKPÁR KÖLCSÖNZŐ OLDALUNK ÉRTÉKELÉSE
                                    </h3>
                                </div>
                            </div>
                            <div class="col-md-2 col-sm-4">
                                <div class="single-new-project">
                                    <a href="#ertekel" class="slide-btn">
                                        Értékelés
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="ertekeles" class="news">
                <div class="container">
                    <div class="news-details">
                        <div class="section-header text-center">
                            <h2>KORÁBBI ÉRTÉKELÉSEK!</h2>
                            <p>
                                Ez oldal annak érdekében készült, hogy aki szeretné értékelni a szolgáltatásainkat a
                                véleményével. Az itt bármikor megteheti. Ha már egyszer személyesen bejött hozzánk és felvettük
                                az adatait és már kölcsönzött is tőlünk.
                            </p>
                        </div>
                        <div class="news-card">
                            <div class="row">

                                <div class="col-md-8">
                                    <div class="blog-left">

                                        <div class="bl-article-single-txt">
                                            <div class="comments-area">
                                                <h3>4 hozzászólás</h3>
                                                <ol class="comment-list">
                                                    <li class="comment">

                                                        <div class="comment-body xtra-comment-body">
                                                            <div class="comment-meta">
                                                                <div class="comment-author">
                                                                    <img src={Klara} />
                                                                </div>
                                                            </div>
                                                            <div class="comment-content">
                                                                <b class="fn">
                                                                    <p id="Klara">
                                                                        Kiss Klára
                                                                    </p>
                                                                    <span>2021. 10. 04.</span>
                                                                </b>
                                                                <p>
                                                                    Én úgy gondolom, hogy ez a kerékpárkölcsönző tisztességes
                                                                    emberekből áll, és segítőkész dolgozókból. Itt az árak is
                                                                    elfogadhatóak. Szerintem itt vagy a közelben lakók
                                                                    számára csak ajánlani lehet.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="comment-body xtra-comment-body">
                                                            <div class="comment-meta">
                                                                <div class="comment-author">
                                                                    <img src={Szabina} />
                                                                </div>
                                                            </div>
                                                            <div class="comment-content">
                                                                <b class="fn">
                                                                    <p id="Klara">
                                                                        Jakucska Szabina
                                                                    </p>
                                                                    <span>2022. 01.21.</span>
                                                                </b>
                                                                <p>
                                                                    Annyit szeretnék hozzáfűzni, hogy aki idevalósi, az
                                                                    jőjjön be 1-szer személyesen és utána egy álom lesz a
                                                                    kölcsönzés a számára.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="comment-body xtra-comment-body">
                                                            <div class="comment-meta">
                                                                <div class="comment-author">
                                                                    <img src={Milan} />
                                                                </div>
                                                            </div>
                                                            <div class="comment-content">
                                                                <b class="fn">
                                                                    <p id="Klara">
                                                                        Szovlesz Milán
                                                                    </p>
                                                                    <span>2022. 02. 10.</span>
                                                                </b>
                                                                <p>
                                                                    Jónapot mindenki. Kerékpárok, kerékpár-alkatrészek minden a
                                                                    legjobb minőségbe és a legjobb áron. Én már ismert bérlő
                                                                    vagyok ott, már sokmindent kedvezményes áron bérlek. A
                                                                    javaslatom legyetek ti is ilyen többszörös bérlők és olyan
                                                                    kedvezményben lesz részetek, hogy nem kell más ilyen
                                                                    kerékpárbérlő céghez fordulnatok.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="comment-body xtra-comment-body">
                                                            <div class="comment-meta">
                                                                <div class="comment-author">
                                                                    <img src={Agnes} />
                                                                </div>
                                                            </div>
                                                            <div class="comment-content">
                                                                <b class="fn">
                                                                    <p id="Klara">
                                                                        Álhegyi Ágnes
                                                                    </p>
                                                                    <span>2022. 02. 16.</span>
                                                                </b>
                                                                <p>
                                                                    Jónapot kedves oldalt böngésző tisztelt hölgyek/urak. Ha
                                                                    olvassa a véleményemet, akkor már eleve megjön a kedve a
                                                                    kölcsönzéshez. Mert sajnos úgy jártam, hogy kölcsönzés után
                                                                    pár nappal elveszítettem a bérelt kerékpárt meg vele együtt
                                                                    több
                                                                    fontos irataimat is. Lakcím kártya,
                                                                    személyigazolvány. Ezután mit csináltam, hát természetesen
                                                                    egyből a kölcsönző céghez fordultam. Erre ők mit csináltak,
                                                                    hát amit kellett, meg amit minden kölcsönző ilyenkor tenne.
                                                                    Megtették a feljelentést. És rá 2 napra telefonál a
                                                                    kölcsönző cég nekem, hogy megtaláltuk itt és itt az Álhegyi
                                                                    Ágnes nevű személy személyi iratait benne a
                                                                    személyigazolvánnyal,
                                                                    lakcímkártyával, ekkor és ezen a napon született, stb stb.
                                                                    Ez nem az öné véletlenül? Mondom erre nemtudom elmegyek
                                                                    érte. Rendben elmentem érte, és azt mondtam, de igen. Meg
                                                                    nagyon hálás vagyok ezért önöknek. Mivel tudnám ezt
                                                                    meghálálni önöknek, hogy megtalálták így véletlenszerűen?
                                                                    Erre mondták, hogy a szolgáltatásunktól bérelt
                                                                    elhagyott kerékpár visszaszerzésével. Mondom erre rendben,
                                                                    de ez egy másik téma. Majd ez is megoldódik. Csak azért
                                                                    írtam ezt így most le önönknek tisztelt olvasók, mert ilyen
                                                                    is van, hogy hiába elveszítettem, ennek ellenére ő talál egy
                                                                    ugyanolyan nevű személyigazolványt és lakcímkártyát, és
                                                                    akkor mivel ezek szerint emlékszik rá, mert ezt is
                                                                    megemlítettem neki és akkor ő felhív hogy talál egy ilyet.
                                                                    Minden jövőbeli köcsönzőnek ajánlani tudom mert emberiségből
                                                                    nagyon tiszta. Megtehette volna, hogy nemérdekli és túllép
                                                                    az
                                                                    egészen úgy ahogy van. Én meg csináltathattam volna új
                                                                    személyigazolványt és lakcímkártyát is vele együtt. Még azon
                                                                    felül hogy lógok a cégnek egy kerékpárral, mivel
                                                                    elveszítettem.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="ertekel" class="news">
                <div class="container">
                    <div class="news-details">
                        <div class="contact-form blog-single-form">
                            <h2 id="velemenykifejtes">FEJTSE KI VÉLEMÉNYÉT AMÍG NEM KÉSŐ!</h2>
                        </div>
                        <div class="contact-form blog-single-form">
                            <h3>ITT ÉRTÉKELHETI A SZOLGÁLTATÁSAINKAT</h3>
                            <Form>
                                <div class="row">
                                    <div class="col-sm-6 col-xs-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="firstname" placeholder="Vezetéknév:"
                                                name="firstname" />
                                        </div>
                                    </div>

                                    <div class="col-sm-6 col-xs-12">
                                        <div class="form-group">
                                            <input type="email" class="form-control" id="email" placeholder="Keresztnév:"
                                                name="email" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <textarea class="form-control" rows="7" id="comment"
                                                placeholder="Üzenet Írása:"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="single-contact-btn">
                                            <button class="contact-btn" href="#" role="button">Küld</button>
                                        </div>
                                    </div>
                                </div>
                            </Form>
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
export default Velemeny;