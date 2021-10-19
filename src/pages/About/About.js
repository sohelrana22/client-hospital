import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import sectionBg from './../../assets/images/sectionBg.png';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';

const About = () => {
    return (
        <div style={{ background: `url(${sectionBg})`, backgroundAttachment: "fixed" }} className="py-5">
           <Container>
        <Zoom>
          <h2 className="text-center text-white mb-4">
            WELCOME TO AL-KARIM HOSPITAL
          </h2>
        </Zoom>
        <Row>
          <Col md className="pe-3">
            <Bounce bottom>
              <h5 className="text-white">About Us</h5>
              <p className="text-muted">
              Al-karim Genral Hospital is One of the best Hospital in Bangladesh. We are a 75 bedded multi-diciplinary tertiary- care Hospital, situated at Sayedabad Dhaka. It is establish to provide health service for lower middle class people of all over the country based on Islami Shariah under the guidance of Pir Shaheb Chormonai.
              </p>
              <p className="text-muted">
              It is observed that no medical procedure is absolutely hazard free. but can be alleviated to a great extant. Thus considering  the reality we meticulously follow patient safety protocols. Our skilled and devoted workforce along with state of the art equipment has constructed a infrastructure to cater the health needs of Our patients.
              </p>
            </Bounce>
          </Col>
          <Col md className="pe-3">
            <Bounce bottom>
              <h5 className="text-white">What are the difference?</h5>
              <p className="text-muted">
              Al-karim Genral Hospital is One of the best Hospital in Bangladesh. We are a 75 bedded multi-diciplinary tertiary- care Hospital, situated at Sayedabad Dhaka. It is establish to provide health service for lower middle class people of all over the country based on Islami Shariah under the guidance of Pir Shaheb Chormonai.
              </p>
              <h5 className="text-white">Why choose Al-Karim General Hospital?</h5>
              <p className="text-muted">
              In Al-karim general Hospital, we do believe in best care which comes as an extra facility not only from our Consultants but also from all staffs around. Together we try to create confidence inside our patients minds and make them feel special, respected and cared.
              </p>
            </Bounce>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md>
            <Bounce bottom>
              <h5 className="text-white">Sign in and don’t miss anything!</h5>
              <p className="text-muted">
              We will give Service & May Allah Cure.
              </p>
            </Bounce>
          </Col>
          <Col md className="d-flex align-items-center">
            <Bounce bottom>
              <Form className="w-100">
                <Form.Label className="text-white">
                  Leave your mail below
                </Form.Label>
                <Form.Group
                  className="d-flex text-white"
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    style={{ background: "transparent", color: "white" }}
                    className="py-2 rounded-0"
                    type="email"
                    placeholder="Enter email"
                  />
                  <button
                    style={{ width: "120px" }}
                    className="btn rounded-0 btn-primary"
                  >
                    SIGN UP
                  </button>
                </Form.Group>
              </Form>
            </Bounce>
          </Col>
        </Row>
      </Container>
        </div>
    );
};

export default About;