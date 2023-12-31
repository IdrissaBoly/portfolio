import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Container } from "react-bootstrap";

import { FaWhatsapp } from "react-icons/fa";
const position = [33.991980191627185, -6.874611381541911];
function Footer({ dark, updateDark }) {
  return (
    <>
      <footer
        className={`footer fw-bold p-5  ${
          dark ? "bg-dark bg-opacity-75 text-light " : "bg-light bg-opacity-75 text-dark"
        }`}
      >
  
       
        <div className="container-fluid">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-6 col-lg-6 col-xl-6">
            <Container>
                <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </Container>
            </div>
        
            <div className="col-md-4 col-lg-6  rounded ">
              <h6 className="text-uppercase font-weight-bold  rounded">
               Infos Contact
              </h6>
              <hr />
              <div className="text-start">
                <p>
                  <i className="fas fa-envelope mr-3"></i> yelmouss@yelmouss.com
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i>{" "}
                  yelmouss.devt@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 212 612 865 681
                </p>
                <p>
                  <i className="fas fa-home mr-3"></i> Rabat, Agdal 10095, MA
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className=" text-center fw-bold">
          <p>   © {new Date().getFullYear()} Copyright :{" "}</p>
       
          <a
            className="text-warning"
            target={"_blank"}
            href="http://yelmouss.com/"
            rel="noreferrer"
          >
            yelmouss.com
          </a>
          <p>Made by Yassine Elmouss. All rights reserved.</p>
          <p>
            MADE WITH{" "}
            <img src="./img/react-original.svg" width={30} alt="react" /> &{" "}
            <img src="./img/bootstrap_4-icon.png" width={30} alt="react" />{" "}
          </p>
        </div>     
      </footer>
      <a
          href="https://wa.me/212612865681"
          className="float"
          target="_blank"
          rel="noreferrer"
        >

          <FaWhatsapp  className="my-float"/>
         
        </a>
    </>
  );
}

export default Footer;