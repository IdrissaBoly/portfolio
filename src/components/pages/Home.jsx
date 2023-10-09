import {  Col, Container, Row } from 'react-bootstrap'
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
import { TechData } from '../../data/Tech'
function Home({ dark, updateDark }) {
    return (
        <Container className={`p-5 fw-bolder
        d-flex flex-column align-items-start min-vh-100 
        ${dark ? 'bg-dark bg-opacity-75 text-light  ' : ''} `} fluid>

            <Container className='p-2'>
                <Row lg={2} xs={1} className='align-items-center'>
                    <Col>
                        <h3 className={` fst-italic  ${dark ? 'ColorFLuo' : ''}  `}><Typed
                            strings={[
                                '> Hey my name is'
                            ]}
                            typeSpeed={40}

                        >
                        </Typed></h3>
                        <br />
                        <h2 className='fs-1'>
                            Yassine ELMOUSS
                        </h2>
                        <h2 className='fs-1'>
                            I build things for the WEB
                        </h2>
                        <p>
                            I’m a software developer specializing in building and  designing
                            exceptional digital experiences.
                            <br />
                            Currently, I’m focused on building accessible, human-centered products .
                        </p>
                        <br />


                   </Col>
                </Row>
                <br />

                <div className='row text-center col-lg-2'>
                <a href="mailto:yelmouss.devt@gmail.com" rel="noopener noreferrer" className={`${dark ? 'email-link' : 'email-link bg-dark bg-opacity-75'} rounded `}>
                            Get in Touch
                        </a>
                </div>
            </Container>
            <Container className='p-2 mt-5'>
                <h2 className="text-start ">
                    "I got the experience <br /> Here is my toolbelt for success."
                </h2>
                <Row lg={1} md={1} xs={1}>
                    <Col className='d-flex flex-wrap'>
                        {TechData.map((item, i) => (
                            <div key={i} className=' m-2 '>
                                <img
                                    className="rounded  bg-light p-1 mb-1 rotating "
                                    width={50}
                                    height={50}
                                    alt="ProjectImage"
                                    src={item.image}
                                />
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Home