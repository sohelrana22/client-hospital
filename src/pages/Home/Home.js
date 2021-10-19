import React from "react";
import bgImage from "./../../assets/images/sectionBg.png";
import banner from "./../../assets/images/banner.jpg"
import { Container, Button, Row } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import { NavLink } from "react-router-dom";
import './Home.css'
import useAuth from "../../hooks/useAuth";


const Home = () => {
  const {services} = useAuth()
  
  return (
    <div>
      <div
        style={{
          background: `url(${banner})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <div
            style={{ height: "90vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="text-center my-5 py-5">
              <Bounce left cascade>
                <h1 className="text">Well come to al-karim hospital</h1>
              </Bounce>

              <Bounce right cascade>
                <p className="my-4 text fs-5">
                In accordance with Article 15 of the Constitution of the Bangladesh Mujahid Committee, to provide health services to the people of all over the country by launching hospitals and ambulance services.
                </p>
              </Bounce>

              <Bounce>
                <NavLink
                  to='/services'
                  className="rounded-pill fs-5 btn btn-primary py-2 px-4">
                  View Services
                </NavLink>
              </Bounce>
            </div>
          </div>
        </Container>
      </div>
      <div
        style={{ background: `url(${bgImage})`, backgroundAttachment: "fixed" }}
      >
        <Container className="py-5">
          <Slide left>
            <h2 className="text-center text-white mb-2">Featured Services</h2>
          </Slide>
          <Slide right>
            <p className="text-muted text-center">
              Here you can find our all latest services. Choose some of them and
              try to grow up your daily life.
            </p>
          </Slide>
         
        </Container>
      </div>
      <h2>{services.length}</h2>
    </div>
    
  );
};

export default Home;