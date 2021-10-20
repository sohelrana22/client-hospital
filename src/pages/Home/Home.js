import React from "react";
import bgImage from "./../../assets/images/sectionBg.png";
import banner from "./../../assets/images/banner.jpg"
import { Container, Button, Row, Carousel, Col } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import { NavLink } from "react-router-dom";
import './Home.css'
import useAuth from "../../hooks/useAuth";
import Service from "../../components/Service/Service";
import './Home.css'
import Cardiology from './../../assets/images/cc.webp'
import Urology from './../../assets/images/nn.webp'
import Dental  from './../../assets/images/pp.webp'
import Eye from './../../assets/images/ppp.webp'
import Neurology from './../../assets/images/ss.webp'
import Plastic from './../../assets/images/aa.webp'


const Home = () => {
  const {services} = useAuth()
  const service = services.slice(0, 6);
  
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
        <div className="container">
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/daughter-feeding-elderly-mother-with-soup-picture-id1294521542?s=612x612"
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/who-says-you-cant-be-personal-and-professional-picture-id1262963059?s=612x612"
      alt="Second slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/m-here-for-you-picture-id883034378?s=612x612"
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
        <Container className="py-5">
          <Slide left>
            <h2 className="text-center text-white mb-2">Medicare Popular Departments</h2>
          </Slide>
          <Slide right>
            <p className="text-muted text-center">
            Al-Karim General Hospital Ltd – Bringing Care back to Healthcare The foundation of Al-Karim General Hospital Ltd has been laid on 3 key principles that define the ethos of our hospital.
            </p>
          </Slide>
          <Row className="p-4">
            <Col>
            <img src={Cardiology} alt="" />
            <h5 className="text-white p-3">Cardiology</h5>
            </Col>
            <Col>
            <img src={Urology} alt="" />
            <h5 className="text-white p-3">Urology</h5>
            </Col>
            <Col>
            <img src={Dental} alt="" />
            <h5 className="text-white p-4">Eye</h5>
            </Col>
            <Col>
            <img src={Eye} alt="" />
            <h5 className="text-white p-3">Dental</h5>
            </Col>
            <Col>
            <img src={Neurology} alt="" />
            <h5 className="text-white p-3">Neurology</h5>
            </Col>
            <Col>
            <img src={Plastic} alt="" />
            <h5 className="text-white p-3">Plastic</h5>
            </Col>
          </Row>
          </Container>
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
         <div className="my-3 d-flex flex-wrap justify-content-between">
         <Row className="home-service">
            {service?.map((service) => (
              <Service service={service} key={service.key}></Service>
            ))}
          </Row>
         </div>
        </Container>
      </div>
    </div>
    
  );
};

export default Home;