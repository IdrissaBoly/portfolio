
import React, { useEffect, useState } from "react";
import Typed from "react-typed";
import Font from "react-font";
export default function About({ dark, updateDark }) {
  return (
    <Font family="Ubuntu">
    <main className={`flex-shrink-0 home  pt-5  ${dark ? "bg-dark  bg-opacity-50 text-light" : ""}`}>
    <div className=" container-fluid">
      <section
        id="about"
        className={`about container-fluid  `}
      >
        <div className="container-fluid ">
          <div className="row">
            <div
              className="container-fluid col-lg-10 content  mt-2"
              data-aos="fade-left"
            >
              <div className="row">
                <div className="col ">
                  <div className="text-left  p-2 ">
                   
                      <img
                        src="img/yass.png"
                        className="blob  img-fluid h-25 p-0 col-4 col-lg-5 rounded mb-2 float-end"
                        alt="Yelmouss"
                      />
                   
                   
                      <h1
                        className={`fst-italic   mb-5            `}
                      >
                        <Typed
                          strings={["ABOUT Me"]}
                          typeSpeed={80}
                          showCursor={false}
                          className={`${dark ? 'ColorFLuo' : ''}`}
                        />
                        <br />
                        <Typed
                          strings={["Yassine ELMOUSS"]}
                          typeSpeed={80}
                          showCursor={false}
                          className={`${dark ? 'ColorFLuo' : ''}`}
                        />
                      </h1>
                      <hr />
                      <h1>FULLSTACK Web Developer</h1>
                   
                  </div>

                  <p className="fst-italic card p-3">
                    Passionate about new technologies and Software Dev
                  </p>
                  <div className="row  p-3  ">
                    <div className="col-lg-6 ">
                      <ul>
                        <li>
                          <i
                            className="fas fa-chevron-right"
                            aria-hidden="true"
                          ></i>
                          <strong>Birthday:</strong>
                          <span>24 October 1994</span>
                        </li>
                        <li>
                          <i
                            className="fas fa-chevron-right"
                            aria-hidden="true"
                          ></i>
                          <strong>Website:</strong>
                          <span>
                            <a href="./"> Here </a>
                          </span>
                        </li>
                        <li>
                          <i
                            className="fas fa-chevron-right"
                            aria-hidden="true"
                          ></i>
                          <strong>Phone:</strong>
                          <span>+212 612 865 681</span>
                        </li>
                        <li>
                          <i
                            className="fas fa-chevron-right"
                            aria-hidden="true"
                          ></i>
                          <strong>City:</strong>
                          <span>Rabat, Morrocco</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul>
                        <li>
                          <i
                            className="fas fa-chevron-right"
                            aria-hidden="true"
                          ></i>
                          <strong>Age:</strong> <span>28</span>
                        </li>
                        <li>
                          <i
                            className="fas fa-chevron-right"
                            aria-hidden="true"
                          ></i>
                          <strong>Degree:</strong> <span>Bacheloor</span>
                        </li>
                        <li>
                          <i
                            className="fas fa-chevron-right"
                            aria-hidden="true"
                          ></i>
                          <strong>Email:</strong>
                          <span>yelmouss.devt@gmail.com</span>
                        </li>
                        <li>
                          <i
                            className="fas fa-chevron-right"
                            aria-hidden="true"
                          ></i>
                          <strong>Freelance:</strong> <span>Available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                
                </div>
                <div className="col-11 col-lg-6 p-3  ">
                <hr />
                  <p className="fs-3 fst-italic">
                    Certified in both F/E and B/E technologies. I developed
                    applications and programs that made the work amazing
                  </p>
                  <section className="py-5">
                    
                    <ul className="timeline-with-icons">
                      <li className="timeline-item mb-5">
                        <span className="timeline-icon">
                          <i
                            className="fas fa-rocket text-danger  fs-2 fa-sm fa-fw"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <h5 className={`fw-bold ${dark ? 'ColorFLuo' : ''}`}>Software Developer</h5>
                        <p>2013-present</p>
                        <p>
                          The Work involved in developing a website for the
                          Internet or an intranet. Web development can range
                          from the development of a simple plain text static
                          page to complex web applications, e-businesses and
                          social networking services
                        </p>
                      </li>
                      <li className="timeline-item mb-5">
                        <span className="timeline-icon">
                          <i
                            className="fas fa-hand-holding-usd text-warning fs-2 fa-fw"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <h5 className={`fw-bold ${dark ? 'ColorFLuo' : ''}`}>
                          Bachelor in economics &amp; business management
                        </h5>
                        <p className="mb-2 fw-bold">2011 - 2014</p>
                        <p>
                          Science City Economics concepts and their
                          applications to business and finance.
                        </p>
                      </li>
                    </ul>
                  </section>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
  </Font>
  )
}
