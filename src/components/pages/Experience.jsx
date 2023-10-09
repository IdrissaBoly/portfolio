import React from 'react'
import { Container } from 'react-bootstrap'
import Webhelp from '../../img/webhelp.png'
import Intelcia from '../../img/intelcia.png'
import GomyCode from '../../img/gmc.png'
function Experience({ dark, updateDark }) {
    document.title = "Yelmouss - Experience";
    return (

        <main className={` p-5 d-flex align-items-center ${dark ? 'bg-dark text-light' : ''}`}>
            <Container>

                <h1>Experience  </h1>

                <br></br>
                <div className="hori-timeline mt-5" dir="ltr">
                    <ul className="list-inline events">

                        <li className="list-inline-item event-list">
                            <div className="px-4">
                                <img src={Webhelp} alt="cc" className='ExpImg' />
                                <div className="event-date bg-info text-dark fs-bold">
                                    2015
                                </div>
                                <h5 className="font-size-16">
                                    Real Time Analyst

                                </h5>

                                <p>Webhelp Maroc</p>
                            </div>
                        </li>
                        <li className="list-inline-item event-list">



                            <div className="px-4">
                                <img src={Intelcia} alt="cc" className='ExpImg' />
                                <div className="event-date bg-warning text-dark fs-bold">
                                    2017
                                </div>
                                <h5 className="font-size-16">
                                    Analyst intraday Performer
                                </h5>
                                <p>Intelcia Maroc</p>
                            </div>
                        </li>
                        <li className="list-inline-item event-list">

                            <div className="px-4">
                                <img src={Intelcia} alt="cc" className='ExpImg' />
                                <div className="event-date bg-danger text-dark fs-bold">
                                    2020
                                </div>
                                <h5 className="font-size-16">
                                    WorkForce Manager
                                </h5>
                                <p>Intelcia Maroc</p>
                            </div>
                        </li>

                        <li className="list-inline-item event-list">
                            <div className="px-4">
                                <img src={GomyCode} alt="cc" className='ExpImg ' />
                                <div className="event-date bg-success text-dark fs-bold">
                                    2023
                                </div>
                                <h5 className="font-size-16">
                                    Instructor computer Science
                                </h5>
                                <p>GoMyCode Maroc</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </Container>
        </main>


    )
}

export default Experience