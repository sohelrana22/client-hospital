import React from 'react';
import { Container } from 'react-bootstrap';
import Slide from "react-reveal/Slide";
import Service from '../../components/Service/Service';
import useAuth from '../../hooks/useAuth';
import sectionBg from "./../../assets/images/sectionBg.png";

const Services = () => {
    const {services} = useAuth()
    return (
        <div className="py-5"  style={{ background: `url(${sectionBg})`, backgroundAttachment: "fixed" }}
        >
            <Slide left>
            <h1 className="text-center text-white mb-2">Our All Services</h1>
          </Slide>
          <Slide right>
            <p className="text-muted mb-0 text-center">
              Here you can find our all latest services. Choose some of them and
              try to grow up your daily life.
            </p>
          </Slide>
          <Container>
              <div className="my-3 d-flex flex-wrap justify-content-between">
                  {
                      services.map((service) => (<Service key={service.key}  service={service} />
                        ))}
              </div>
          </Container>
        </div>
    );
};

export default Services;