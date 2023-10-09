
import { ClipLoader } from 'react-spinners';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Font from 'react-font';
import Typed from 'react-typed';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const GithubRepos = ({dark, updateDark}) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    document.title = "Yelmouss - Github";
    // console.log(process.env.REACT_APP_GIT)
    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await axios.get('https://api.github.com/user/repos', {
                    headers: {
                        Authorization: `Bearer ${process.env.REACT_APP_GIT}`,
                    },
                });
                setRepos(response.data);
                setLoading(false); // Marquer le chargement comme terminé
            } catch (error) {
                console.log(error);
            }
        };

        fetchRepos();
    }, []);

    return (
        <div className={`container-fluid p-5 text-center  ${dark ? "bg-dark bg-opacity-50 text-light" : "text-dark"
    }`} >
            <Font family='Ubuntu'>
                <h1 className='container  rounded mb-5 p-2 text-center'>
                    <Typed strings={['My Public Repositories']} typeSpeed={40} />
                </h1>
            </Font>
            <hr />
            {loading ? (
                <div className='text-center'>
                    <ClipLoader color='#000' loading={loading} size={50} />
                </div>
            ) : (
                <>
                <div className="container-fluid">
                <Swiper
                    grabCursor
                    centeredSlides
                    slidesPerView='auto'
                    effect='coverflow'
                    loop
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    modules={[EffectCoverflow]}
                >
                    <div className='swiper-wrapper'>
                        {repos.map((repo) => (
                            <SwiperSlide
                                key={repo.id}
                                className='swiper-slide bg-dark bg-opacity-75'
                            >
                                <Col
                                    key={repo.id}
                                    className='d-inline text-center githubCard bg-dark bg-opacity-50 mt-1 text-light p-2'
                                    lg={3}
                                    md={6}
                                    sm={12}
                                >
                                    <img
                                        src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
                                        alt='GitHub Icon'
                                        width='50'
                                        height='50'
                                        className='rounded rounded-circle' />
                                    <h2 className='p-3 text-truncate'>
                                        <hr />
                                       {repo.name} 
                                       <br />
                                       <hr />

                                      
                                    </h2>
                                    <Link
                                            to={repo.html_url}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='nav-link'
                                        >

                                            Go to the rep 👌
                                        </Link>
                                    <p>{repo.description}</p>
                                </Col>
                            </SwiperSlide>
                        ))}
                    </div>
                    <div className='swiper-pagination'></div>
        

                </Swiper>
                </div>
                </>
            )}
        </div>
    );
};

export default GithubRepos;