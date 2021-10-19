import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import sectionBg from './../../assets/images/sectionBg.png';
import map from './../../assets/images/Screenshot_1.png';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';

const Contact = () => {
    return (
        <div
        style={{ background: `url(${sectionBg})`, backgroundAttachment: "fixed" }}
      >
        <ContactForm />
      </div>
    );
  };
  const formStyle = { background: "transparent", color: "white" };
  function ContactForm() {
    return (
      <div style={{ padding: "58px 0 40px" }}>
           <div className="container mb-4 w-100 h-100">
           <img src={map}  alt="" />
          
           </div>
        <Bounce right>
          <h2 className="text-center text-white">Contact Us</h2>
        </Bounce>
  
        <Bounce left>
          <p className="text-center text-muted mb-4">
            You can easily reach us through filling up the form
          </p>
        </Bounce>
        <div>
          <Container>
            <Slide bottom>
              <Form>
                <Row>
                  <Col sm>
                    <Form.Group
                      className="mb-3 text-white"
                      controlId="formBasicText"
                    >
                      <Form.Label>Your Name </Form.Label>
                      <Form.Control
                        style={formStyle}
                        type="text"
                        placeholder="Enter Your Name"
                      />
                    </Form.Group>
                  </Col>
                  <Col sm>
                    <Form.Group
                      className="mb-3 text-white"
                      controlId="formBasicEmail"
                    >
                      <Form.Label>Your Email </Form.Label>
                      <Form.Control
                        style={formStyle}
                        type="email"
                        placeholder="Enter Your Email"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Control
                  style={formStyle}
                  className="my-3"
                  type="text"
                  placeholder="Write Your Problem..."
                />
                <Form.Group
                  className="mb-3 text-white"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Your Messages</Form.Label>
                  <Form.Control
                    style={formStyle}
                    placeholder="Write you message..."
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
                <Button className="mb-5 px-4" variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Slide>
          </Container>
        </div>
      </div>
    );
};

export default Contact;