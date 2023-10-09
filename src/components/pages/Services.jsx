import Typed from "react-typed";
import { React, useEffect, useState } from "react";
import { ServiceData } from "../../data/Services";
import Font from "react-font";

// import { createStore, combineReducers } from "redux";

function Service({ dark, updateDark }) {
  const [title, setTitle] = useState();
  useEffect(() => {
    setTitle("Yelmouss - Services")
    document.title = title;
  }, [title]);



  return (
    <>
      <main className={`flex-shrink-0 home    ${dark ? "bg-dark" : ""}`}>
        <section className="container text-center p-2">
          <div
            className={`row p-5 text-center ${dark ? "text-light" : "text-dark"
              }`}
          >
            <Font family="Ubuntu">
              <h1
                className={`fst-italic mb-5 ${dark ? "text-light" : "text-dark"
                  }`}
              >
                <Typed
                  strings={["Services"]}
                  typeSpeed={80}
                  showCursor={false}
                />
              </h1>
            </Font>
            <hr />
            <div className="container">
              <div className="row d-flex justify-content-between">
                {ServiceData.map((item, i) => (


                  <div className="card bg-light bg-opacity-75 m-1  col-lg-3" key={i}>
                    <img
                      src={item.img}
                      className="card-img-top  objectfit"
                      alt="CardImage"
                      style={{height : '250px', width : '100%'}}
                    />
                    <div
                      className="card-body d-flex flex-column"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title={item.decsription}
                    >
                      <h5 className="card-title">{item.name}</h5>
                      <Font
                        family="Ubuntu"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title={item.decsription}
                      >
                        <p
                          className="card-text mb-4 fs-5 "
                          style={{ maxWidth: "" }}
                        >
                          {item.decsription}
                        </p>
                      </Font>
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

export default Service;