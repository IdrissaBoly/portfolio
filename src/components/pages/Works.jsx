import Typed from "react-typed";
import { React, useEffect, useState } from "react";
import { ProjectsData } from "../../data/Projects";
import Font from "react-font";


function Projet({ dark, updateDark }) {

    const [title, setTitle] = useState();
    useEffect(() => {
        setTitle("Yelmouss - Projects")
        document.title = title;
    }, [title]);


    return (
        <>
            <main className={`flex-shrink-0   p-2   home ${dark ? "bg-dark bg-opacity-75 text-light" : ""}`}>
                <section className="container text-center p-2">
                    <div
                        className={`row p-5 text-center`}
                    >
                        <Font family="Ubuntu"> <h1 className={`fst-italic mb-5 `}>
                            <Typed strings={["Some Projects"]} typeSpeed={80} showCursor={false} />
                        </h1></Font>

                        <hr />
                        <div className="container-fluid">
                            <div className="row d-flex justify-content-center">
                                {ProjectsData.map((item, i) => (
                                    <div className=" mb-3 col-lg-8 bordered border-light shaked" key={i}>
                                           <h2 className="card-title">{item.title}</h2>
                                           <br />
                                        <img
                                            src={item.image}
                                            className="card-img-top h-50 objectfit bg-light rounded w-75"
                                            alt={item.title}
                                        />
                                      <br />
                                      <br />
                                      <div className="text-start">
                                      <p className="card-text">{item.description}</p>
                                       
                                       
                                       <a
                                           href={item.link}
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           className="btn btn-info"
                                       >
                                          Show
                                       </a>
                                      </div>
                                         
                                           
                                      
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Projet;