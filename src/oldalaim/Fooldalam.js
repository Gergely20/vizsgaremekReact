import './App.css';
import './css/bootstrap.css';
import './public/logo512.png';
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import Alert from 'react-bootstrap/Alert';
import Carousel from 'react-bootstrap/Carousel';
import Card from "react-bootstrap/Card";
import { Pagination } from 'react-bootstrap';
import retrobike from './images/home/retrobike.jpg';
import gyerekules from './images/home/gyerekules.jpg';
import kerekparutanfuto from './images/home/kerekparutanfuto.jpg';
import kerekparszolgaltatasok from "./images/about/kerekparszolgaltatasok.jpg";
import nyitvatartas from './images/home/nyitvatartás.png';
import jokerekpar from './images/service/jominosegukerekparok.png';
import kedvezmeny from './images/home/kedvezmeny.png';
import hegyikerekpar from './images/project/hegyi-kerekpar.jpg';
import trekkingkerekpar from "./images/project/trekking-kerekpar.jpg";
import varosikerekpar from './images/project/varosi-kerekpar.jpg';
import bmxkerekpar from "./images/project/bmx-kerekpar.jpg";
import logo from "./images/logo/kerekparfejlec.png";
import velemenyleiras from "./images/velemeny/velemenyleiras.png";
import mountainbike from "./images/banner/mountain-bike.png";
import terepcycle from "./images/banner/terepcycle.png";
import { Accordion } from "react-bootstrap";
import { useState } from 'react';

function Fooldalam() {
	return (
		<>
			<div className="header">
				<div className="container">
					<div className="header-left">
						<ul className="pull-left">
							<li>
								<Nav.Link href="#home">+36-20-579-6697</Nav.Link>
							</li>
							<li>
								<Nav.Link href="#home">ngergely065@gmail.com</Nav.Link>
							</li>
						</ul>
					</div>
				</div>
				<div>
					<Carousel>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={mountainbike}
								alt="First slide"
							/>
							<Carousel.Caption>
								<div class="carousel-inner" role="listbox">
									<div class="item active">
										<div class="single-slide-item slide-1">
											<div class="container">
												<div class="row">
													<div class="col-sm-12">
														<div class="single-slide-item-content">
															<h2>KERÉKPÁRKÖLCSÖNZŐ <br /> WEBOLDALUNK</h2>
															<p>
																Ha ön is szeretne jó áron, jó minőségű kerékpárt kölcsönözni, akkor
																megtalálta az erre megfelelő honlapot. Alapfeltétele a kölcsönzésnek
																nálunk
																az előre meghatározott kölcsönzési előleg vagyis a kaució.
															</p>
															<button type="button" class="slide-btn">
																<a href="#elerhetosegeink">Elérhetőségeink</a>
															</button>
															<button type="button" class="slide-btn">
																<a href="#kerekpartipusaink">Kerékpár Típusaink</a>
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={terepcycle}
								alt="Second slide"
							/>

							<Carousel.Caption>
								<div class="carousel-inner" role="listbox">
									<div class="item active">
										<div class="single-slide-item slide-1">
											<div class="container">
												<div class="row">
													<div class="col-sm-12">
														<div class="single-slide-item-content">
															<h2>
																FUNKCIÓI
															</h2>
															<ul id="lista">
																<li>Minimum 1 nap maximum 1 hónap kölcsönzési idő</li>
																<li>Alapfeltétele a sikeres regsisztrációnak a személyes megjelenés</li>
																<li>A weboldal funkciói menürendszerből érhetők el</li>
																<li>Kedvenc kerékpár felvétele funkció</li>
																<li>Bérelt kerékpár megjelenítése a bérelt kerékpár listában</li>
																<li>Vélemény leírási lehetőség</li>
																<li>Többféle fizetési lehetőség közül lehet választani</li>
																<li>Üzletünkben a kikölcsönzött termékért való megjelenéskor kötelező a
																	kézzel írt aláírás</li>
															</ul>
															<button type="button" class="slide-btn">
																<a href="#elerhetosegeink">Elérhetőségeink</a>
															</button>
															<button type="button" class="slide-btn">
																<a href="#kerekpartipusaink">Kerékpár Típusaink</a>
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>
			</div>
			<div className="container">
				<div className="we-do-details">
					<div className="section-header">
						<div className="section-header text-center">
							<h2>OLDALUNK BEVEZETŐ RÉSZE</h2>
						</div>
						<Alert variant="light">
							<p>
								Felejtse el a rossz minőségű kényelmetlen kerékpárokat! A kölcsönzés az üzlet és a vevők
								együttesen meghatározó része,
								ehhez biztosítjuk a mai utak felépítésének megfelelő, a mindenkori kresz előírásához
								illően, jól
								felszerelt kerékpárokat a környék felfedezéséhez, vagy akár egy Nyíregyháza Rakamaz
								Nagyhalász
								Tokaj Tarcal
								kerékpáros kör megtételéhez minden
								korosztály számára. Ha éppen egy ilyen hosszabb túra a cél. Vagy ha csak egy kényelmesebb
								opciót
								szeretne válaszatni a munkába
								járáshoz a séta helyett, akkor már megérte önnek. A kínálatban a felnőtt és gyerek
								kerékpárok
								mellett lehetőség van,
								kölcsönözhető kiegészítőként utánfutó vagy gyerekülés kölcsönzéséhez, amely
								szolgálja a kényelmet és biztonságot teljes mértékben. Ha többen is szeretnének kerékpárral
								utazni, vagy akár túrázni.
							</p>
						</Alert>
					</div>
				</div>
			</div>
			<div className="section-header text-center">
				<h2>AZ OLDALUNKON KAPHATÓ TERMÉKEK</h2>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-sm-4 col-xs-12">
						<div class="single-we-do-box text-center">
							<div class="we-do-description">
								<div class="we-do-info">
									<div class="we-do-img">
										<img src={retrobike} alt="image of consultency" />
									</div>
									<div class="we-do-topics">
										<h2>
											KERÉKPÁROK
										</h2>
									</div>
								</div>
								<div class="we-do-comment">
									<p>
										Önmagában kerékpárt is lehet kölcsönözni, ha túrázni vagy csak szimplán
										munkába
										szeretne járni vele. Vagy ha mellőzni szeretné a tömegközlekedést.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-4 col-xs-12">
						<div className="single-we-do-box text-center">
							<div className="we-do-description">
								<div className="we-do-info">
									<div className="we-do-topics">
										<img src={gyerekules} alt="image of business" />
									</div>
									<div className="we-do-topics">
										<h2>
											KERÉKPÁROK GYERMEKÜLÉSSEL
										</h2>
									</div>
								</div>
								<br />
								<div className="we-do-comment">
									<p>
										Akár gyermekülést is kölcsönözhet a kerékpárhoz ha van kisgyermeke és
										kerékpárral
										szeretné hordani óvodába vagy elvinni magával valahozá. Például
										városnézésre. De ha valaki csak gyermekülést szeretne kölcsönözni, arra
										is
										van lehetőség.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-4 col-xs-12">
						<div className="single-we-do-box text-center">
							<div className="we-do-description">
								<div className="we-do-info">
									<div className="we-do-img">
										<img src={kerekparutanfuto} alt="image of support" />
									</div>
									<div className="we-do-topics">
										<h2>
											KERÉKPÁROK UTÁNFUTÓVAL
										</h2>
									</div>
								</div>
								<div className="we-do-comment">
									<p>
										Sőt még kerékpárhoz utánfutót is kölcsömözhet van, esetleg ha szeretne
										valami
										dolgot cipelni hosszabb távon. Például táskát és kimélni szeretné magát.
										Vagy akár egy kirándulásra szeretne menni, ahová több mindent szeretne
										vinni. Vagy akár több hasonló korú kisgyermek is van. Akkor
										megkönnyítheti
										az útját egy ilyen dolog. De itt is van lehetőség arra, hogy csak
										önmgába
										kölcsönözzön utánfutót.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className="about-us">
				<div className="container">
					<div className="about-us-content">
						<div className="row">
							<div className="col-sm-6">
								<div className="single-about-us">
									<div className="about-us-txt">
										<h2>SZOLGÁLTATÁSAINK</h2>
										<p>
											Minőségi hegyi, trekking, cross és városi kerékpárok, felnőtteknek és gyerekeknek egyaránt, valamint
											kerékpár utánfutók és kerékpár gyerekülések bérbeadása.
										</p>
										<nav className="project-btn">
											<Nav.Link href="#info" className="project-view">Kölcsönzési Árak:
											</Nav.Link>
										</nav>
									</div>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="single-about-us">
									<div className="about-us-img">
										<img src={kerekparszolgaltatasok} alt="about images" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</section>
			<section id="kerekparszin">
				<section id="info" className="service">
					<div className="section-header text-center">
						<h2>KÖLCSÖNZÉSI ÁRAK:</h2>
					</div>
					<div className="container">
						<div className="service-details">
							<h3>KERÉKPÁROK ÁRAI:</h3>
						</div>
						<table className="table">
							<thead>
								<tr>
									<td rowspan="3"></td>
									<td colspan="5">KATEGÓRIA</td>
								</tr>
								<tr>
									<th scope="col">1</th>
									<th scope="col">2</th>
									<th scope="col">3</th>
									<th scope="col">4</th>
								</tr>
								<tr>
									<th scope="col">Mountain-bike</th>
									<th scope="col">Trekking-bike</th>
									<th scope="col">BMX</th>
									<th scope="col">Gyerek kerékpár</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>
											Kölcsönzési díj/óra
										</strong>
									</td>

									<td>1000 Ft</td>
									<td>1000 Ft</td>
									<td>1000 Ft</td>
									<td>700 Ft</td>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<td>
										<strong>
											Kölcsönzési díj/nap
										</strong>
									</td>

									<td>4.500 Ft</td>
									<td>4.500 Ft</td>
									<td>4.500 Ft</td>
									<td>4.500 Ft</td>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<td>
										<strong>
											Kölcsönzési díj/hét
										</strong>
									</td>

									<td>20.000 Ft</td>
									<td>20.000 Ft</td>
									<td>20.000 Ft</td>
									<td>20.000 Ft</td>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<td>
										<strong>
											Kölcsönzési díj/2 hét
										</strong>
									</td>

									<td>90.000 Ft</td>
									<td>90.000 Ft</td>
									<td>90.000 Ft</td>
									<td>90.000 Ft</td>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<td>
										<strong>
											Kölcsönzési díj/3 hét
										</strong>
									</td>

									<td>135.000 Ft</td>
									<td>135.000 Ft</td>
									<td>135.000 Ft</td>
									<td>135.000 Ft</td>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<td>
										<strong>
											Kölcsönzési díj/ hónap
										</strong>
									</td>

									<td>180.000 Ft</td>
									<td>180.000 Ft</td>
									<td>180.000 Ft</td>
									<td>180.000 Ft</td>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<td>
										<strong>
											Kaució
										</strong>
									</td>

									<td>20.000 Ft</td>
									<td>20.000 Ft</td>
									<td>20.000 Ft</td>
									<td>20.000 Ft</td>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<td>
										<strong>
											Kárérték
										</strong>
									</td>

									<td>150.000 Ft</td>
									<td>125.000 Ft</td>
									<td>100.000 Ft</td>
									<td>60.000 Ft</td>
								</tr>
							</tbody>
						</table>
						<br />

					</div>
					<div className="section-header text-center">
						<div className="service-details">
							<h2>KIEGÉSZÍTŐINK:</h2>
						</div>
					</div>
					<div className="container">
						<div className="service-details">
							<h3>GYEREKÜLÉSEK ÁRAI:</h3>
						</div>
						<div className="service-details">
							<table className="table">
								<thead>
									<tr>
										<th scope="col">1 óra</th>
										<th scope="col">1 nap</th>
										<th scope="col">1 hét</th>
										<th scope="col">2 hét</th>
										<th scope="col">3 hét</th>
										<th scope="col">1 hónap</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th scope="row">200 Ft</th>
										<td>800 Ft</td>
										<td>2.400 Ft</td>
										<td>3.400Ft</td>
										<td>4.400 Ft</td>
										<td>5.500 Ft</td>
									</tr>
								</tbody>

							</table>
						</div>
						<br />
						<div className="service-details">
							<h3>2 SZEMÉLYES UTÁNFUTÓK ÁRAI:</h3>
						</div>
						<div className="service-details">
							<table className="table">
								<thead>
									<tr>
										<th scope="col">1 nap</th>
										<th scope="col">1 hét</th>
										<th scope="col">2 hét</th>
										<th scope="col">3 hét</th>
										<th scope="col">1 hónap</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>4.000 Ft</td>
										<td>20.000 Ft</td>
										<td>30.000 Ft</td>
										<td>45.000 Ft</td>
										<td>60.000 Ft</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<br />
					<br />
					<br />
					<div className="container">
						<h2 id="szemelott-tarthat" className="text-center">AMIT AZ OLDALUNK MEGTEKINTÉSE SORÁN SZEM ELŐTT TARTHAT</h2>
						<br />
						<br />
						<div className="row">
							<div className="col-sm-4 col-xs-12">
								<div className="service-single text-center">
									<div class="service-img">
										<img src={nyitvatartas}
											alt="image of service" />
									</div>
									<br />
									<br />
									<div className="service-txt">
										<h2>KORA REGGELTŐL ESTIG NYITVA</h2>
										<br />
										<br />
										<p>
											Hogy egy egész napos túra is beleférjen! Reggel héttől
											este
											hétig
											várjuk.
										</p>
										<nav className="project-btn">
											<a href="#elso" class="btn btn-warning collapsed"
												data-toggle="collapse" data-parent="#accordion"
												aria-expanded="false">További információ:</a>
										</nav>
									</div>
								</div>
							</div>
							<div className="col-sm-4 col-xs-12">
								<div class="service-single text-center">
									<div class="service-img">
										<img src={jokerekpar}
											alt="image of service" />
									</div>
									<br />
									<br />
									<div className="service-txt">
										<h2>JÓ MINŐSÉGÜ KERÉKPÁROK</h2>
										<br />
										<p>
											Olyan kerékpárok bérlésére van lehetőség, amelyek
											készleten
											vannak.
											És
											nálunk megtalálja az ön kényelmének megfelelő kérékpárt.
										</p>
										<nav className="project-btn">
											<a href="#masodik" class="btn btn-warning collapsed"
												data-toggle="collapse" data-parent="#accordion"
												aria-expanded="false">További információ:</a>
										</nav>
									</div>
								</div>
							</div>
							<div className="col-sm-4 col-xs-12">
								<div className="service-single text-center">
									<div className="service-img">
										<img src={kedvezmeny}
											alt="image of service" />
									</div>
									<br />
									<div className="service-txt">
										<h2>ISMERT KÖLCSÖNZŐKNEK KEDVEZMÉNY</h2>
										<br />
										<p>
											Akik már többször kölcsönöztek üzleteinkben, azok
											számára a
											bérleti
											díj
											hétközben napi 200 Ft-al olcsóbb a Kerékpároknál,
											Gyermeküléseknél
											100
											Ft-al, 2 Személyes Utánfutóknál pedig 2.000 Ft-al!
										</p>
										<nav className="project-btn">
											<a href="#harmadik" class="btn btn-warning collapsed"
												data-toggle="collapse" data-parent="#accordion"
												aria-expanded="false">További információ:</a>
										</nav>
									</div>
								</div>
							</div>
						</div>
					</div>
					<br />
					<br />
					<div id="kerekpartipusaink" className="container">
						<div className="project-details">
							<div class="project-header text-left">
								<h2>EZEKHEZ HASONLÓ KERÉKPÁROKRA FOGLALHAT MAJD IDŐPONTOT.</h2>
								<p>
									Tekerjen egyet. Tegyen a környezetünk és a saját egészségéért is egyaránt.
								</p>
							</div>
							<div className="project-content">
								<div className="gallery-content">
									<div className="isotope">
										<div className="row">
											<div className=" col-md-4 col-sm-12">
												<div className="item big-height">
													<img src={hegyikerekpar}
													/>
													<div class="isotope-overlay">
														<a href="hegyi-kerekpar.html">
															<span class="lnr lnr-link"></span>

														</a>
														<h3>
															<a href="https://gergely20.github.io/KEREKPAROK/hegyi-kerekpar.html">
																HEGYI KERÉKPÁROK
															</a>
														</h3>
													</div>
												</div>
											</div>
											<div class="col-md-8 col-sm-12">
												<div className="row">
													<div className="col-sm-6 col-xs-12">
														<div className="item">
															<img src={trekkingkerekpar}
																alt="portfolio image" />
															<div className="isotope-overlay">
																<a href="trekking-kerekpar.html">
																	<span className="lnr lnr-link"></span>

																</a>
																<h3>
																	<a href="https://gergely20.github.io/KEREKPAROK/trekking-kerekpar.html">
																		TREKKING KERÉKPÁROK
																	</a>
																</h3>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-8 col-sm-12">
												<div className="row">
													<div className="col-sm-6 col-xs-12">
														<div className="item">
															<img src={varosikerekpar}
																alt="portfolio image" />
															<div className="isotope-overlay">
																<a href="varosi-kerekpar.html">
																	<span className="lnr lnr-link"></span>

																</a>
																<h3>
																	<a href="https://gergely20.github.io/KEREKPAROK/varosi-kerekpar.html">
																		VÁROSI KERÉKPÁROK
																	</a>
																</h3>
															</div>
														</div>
													</div>
												</div>
												<div className="col-md-8 col-sm-12">
													<div className="col">
														<div className="col-sm-6 col-xs-12">
															<div className="item">
																<img src={bmxkerekpar} />
																<div className="isotope-overlay">
																	<a href="bmx-kerekpar.html">
																		<span className="lnr lnr-link"></span>

																	</a>
																	<h3>
																		<a href="https://gergely20.github.io/KEREKPAROK/bmx-kerekpar.html">
																			BMX KERÉKPÁROK
																		</a>
																	</h3>
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
					<div className="project-btn text-center">
						<a href="http://localhost:3000/keszlet" className="project-view">Kölcsönzés
						</a>
					</div>
					<section class="team">
						<div class="container">
							<div class="team-details">
								<div class="project-header team-header text-left">
									<h2>AKIK MÁR SŰRŰN KÖLCSÖNÖZTEK AZ OLDALUNKON</h2>
									<p>
										Nagyon meg vannak elégedve szolgáltatásainkkal.
									</p>
								</div>
								<div class="team-card">
									<div class="container">
										<div class="row">
											<div class="owl-carousel  team-carousel">
												<div class="col-sm-3 col-xs-12">
													<div class="single-team-box team-box-bg-1">
														<div class="team-box-inner">
															<h3>Papp Zoltán Béla</h3>
															<p class="team-meta">Igazgató, KIBUC Tüzép Kft.</p>
															<a href="#tovabbiinfo" class="learn-btn">
																További információ
															</a>
														</div>

													</div>
												</div>
												<div class="col-sm-3 col-xs-12">
													<div class="single-team-box team-box-bg-2">
														<div class="team-box-inner">
															<h3>Kiss Tamás</h3>
															<p class="team-meta">
																Fogorvos, Tarcal Fogorvosi Rendelő
															</p>
															<a href="#tovabbiinfo" class="learn-btn">
																További információ
															</a>
														</div>
													</div>
												</div>
												<div class="col-sm-3 col-xs-12">
													<div class="single-team-box team-box-bg-3">
														<div class="team-box-inner">
															<h3>Tóth Sándor</h3>
															<p class="team-meta">
																Tesztelő, HelloPay Zrt.
															</p>
															<a href="#tovabbiinfo" class="learn-btn">
																További információ
															</a>
														</div>
													</div>
												</div>
												<div class="col-sm-3 col-xs-12">
													<div class="single-team-box team-box-bg-4">
														<div class="team-box-inner">
															<h3>Szabó Eszter</h3>
															<p class="team-meta">
																Titkárnő, Raiffeisen Bank Zrt.
															</p>
															<a href="#tovabbiinfo" class="learn-btn">
																További információ
															</a>
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

					<section id="tovabbiinfo" class="testemonial">
						<div class="container">
							<div class="section-header text-center">
								<h2>
									<span>
										GYAKORI KÖLCSÖNZŐINK VÉLEMÉNYE A SZOLGÁLTATÁSAUNKRÓL
									</span>
								</h2>
							</div>
							<div class="owl-carousel owl-theme" id="testemonial-carousel">
								<div class="home1-testm item">
									<div class="home1-testm-single text-center">
										<div class="home1-testm-img">
											<img src="assets/images/team/team.jpg" alt="img" />
										</div>
										<div class="home1-testm-txt">
											<span class="icon section-icon">
												<i class="fa fa-quote-left" aria-hidden="true"></i>
											</span>
											<p>
												Szerintem ez egy megbízható üzlet, hozzá értő dolgozókkal, jó minőségü kerékpárokkal
												és
												kiegészítőkkel. Csak ajánlani tudom
												mindenkinek.
											</p>
											<h3>
												<a href="#">
													Papp Zoltán Béla
												</a>
											</h3>
											<h4>HUN, Rakamaz</h4>
										</div>
									</div>
								</div>
								<div class="home1-testm item">
									<div class="home1-testm-single text-center">
										<div class="home1-testm-img">
											<img src="assets/images/team/team2.jpg" alt="img" />
										</div>
										<div class="home1-testm-txt">
											<span class="icon section-icon">
												<i class="fa fa-quote-left" aria-hidden="true"></i>
											</span>
											<p>
												Nyíregyháza egyik legjobban felszerelt kerékpárkölcsönzője. Aki erre jár, és van
												erre
												tervezett túrája vagy csak kipróbálni szeretné. Az nyugodtan megteheti, hiszen ha
												egyszer kipróbálta többé le sem fog róla mondani.
											</p>
											<h3>
												<a href="#">
													Tóth Sándor
												</a>
											</h3>
											<h4>Hun, Budapest</h4>
										</div>
									</div>
								</div>
								<div class="home1-testm item">
									<div class="home1-testm-single text-center">
										<div class="home1-testm-img">
											<img src="assets/images/team/team3.jpg" alt="img" />
										</div>
										<div class="home1-testm-txt">
											<span class="icon section-icon">
												<i class="fa fa-quote-left" aria-hidden="true"></i>
											</span>
											<p>
												Mióta túra heteket tervezek. És egy kicsit közelebb kerültem Nyíregyházához. De
												mivel
												már azóta kölcsönöztem itt, és tudom hogy a legjobb minőségű kerékpárok bérlésére
												itt is
												van lehetőség. Úgyhogy béreljenek amíg nem késő.
											</p>
											<h3>
												<a href="#">
													Kiss Tamás
												</a>
											</h3>
											<h4>HUN, Tarcal</h4>
										</div>
									</div>
								</div>
								<div class="home1-testm item">
									<div class="home1-testm-single text-center">
										<div class="home1-testm-img">
											<img src="assets/images/team/team4.jpg" alt="img" />
										</div>
										<div class="home1-testm-txt">
											<span class="icon section-icon">
												<i class="fa fa-quote-left" aria-hidden="true"></i>
											</span>
											<p>
												Én mint Nyíregyháza környéki lakos, az a meglátásom, hogy a város egyik
												legideálisabb
												kerékpárbérlője. Csak javasolni tudom a környék lakosainak, akik szeretnek
												kerékpárral
												munkába járni vagy akár túrázni is.
											</p>
											<h3>
												<a href="#">
													Szabó Eszter
												</a>
											</h3>
											<h4>HUN, Nyírpazony</h4>
										</div>
									</div>
								</div>
							</div>
						</div>

					</section>
					<section id="elerhetosegeink" className="contact">
						<div className="container">
							<div className="contact-details">
								<div className="section-header contact-head  text-center">
									<h2>KAPCSOLAT</h2>
									<p>
										Ha van valami problémája az oldalunkkal, ez alapján felveheti velünk a kapcsolatot, és mi
										segíünk a problémája vagy a problémái kiküszöbölésében.
									</p>
								</div>
								<div className="contact-content">
									<div className="row">
										<div className="col-sm-offset-1 col-sm-5">
											<div className="single-contact-box">
												<div className="contact-right">
													<div className="contact-adress">
														<div className="contact-office-address">
															<h3 id="elerhetoseg">ELÉRHETŐSÉGEINK:</h3>
															<p id="elerhetoseg">
																4400 Nyíregyháza, Hatzel tér 5.
															</p>
															<div className="contact-online-address">
																<div className="single-online-address">
																	<i className="fa fa-phone"></i>
																	+36 20 579 6697
																</div>
																<div className="single-online-address">
																	<i className="fa fa-envelope-o"></i>
																	<span>ngergely065@gmail.com</span>
																</div>
															</div>
														</div>

													</div>
												</div>
											</div>
										</div>
										<div className="col-sm-5">
											<div className="single-contact-box">
												<div className="contact-form">
													<div className="hm-foot-title">
														<h3>EZEN KERSZTÜL HAGYHAT NEKÜNK ÜZENETET</h3>
													</div>
													<form>
														<div className="row">
															<div className="col-sm-6 col-xs-12">
																<div className="form-group">
																	<input type="text" className="form-control" id="firstname"
																		placeholder="Vezetéknév" name="firstname" />
																</div>
															</div>
															<div className="col-sm-6 col-xs-12">
																<div className="form-group">
																	<input type="text" className="form-control" id="lastname"
																		placeholder="Keresztnév" name="laststname" />
																</div>
															</div>
														</div>
														<div className="row">
															<div className="col-sm-6 col-xs-12">
																<div className="form-group">
																	<input type="email" className="form-control" id="email"
																		placeholder="E-mail" name="email" />
																</div>
															</div>
															<div className="col-sm-6 col-xs-12">
																<div className="form-group">
																	<input type="text" className="form-control" id="phone"
																		placeholder="Telefonszám" name="phone" />
																</div>
															</div>
														</div>
														<div className="row">
															<div className="col-sm-12">
																<div className="form-group">
																	<textarea className="form-control" rows="7" id="comment"
																		placeholder="Üzenet Írása"></textarea>
																</div>
															</div>
														</div>
														<div className="row">
															<div className="col-sm-12">
																<div className="single-contact-btn pull-right">
																	<button className="contact-btn" type="button">Üzenet
																		Küldése</button>
																</div>
															</div>
														</div>
													</form>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

					</section>
				</section>
			</section>
			<section className="hm-footer">
				<div className="container">
					<div className="hm-footer-details">
						<div className="row">
							<div className="col-md-4 col-sm-6 col-xs-12">
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
			<div id="scroll-Top">
				<i classNameName="fa fa-angle-double-up return-to-top" id="scroll-top" data-toggle="tooltip"
					data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
			</div>
			<Outlet />
		</>
	)
}
export default Fooldalam;