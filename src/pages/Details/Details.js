import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Details = () => {
    const {key} = useParams();
    const {services} = useAuth()
const detailService = services.find(service => service._id === Number(key));
const {img, name, detail} = detailService;


    return (
        <div className="my-4">
            {name ? (
                <Container>
                    <Row>
                        <Col>
                        <img className="img-fluid" src={img} alt="" />
                        </Col>
                        <Col>
                        <h1>{name}</h1>
                        <h3>{detail}</h3>
                        </Col>
                    </Row>
                </Container>
            ) : (
                <h1>No Service Found</h1>
            )

            }
            
        </div>
    );
};

export default Details;