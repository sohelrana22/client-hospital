import Button from 'react-bootstrap/Button'
import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Service = ({service}) => {
    const {img, name, detail, key} = service;
    return (
          <Zoom>
              <Card className="m-2 body-detail" style={{ width: '21rem' }}>
  <Card.Img variant="top" className="img-fluid" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>{detail}</Card.Text>
    <NavLink to={`/services/${key}`} className="btn btn-primary">View Details</NavLink>
  </Card.Body>
</Card>
          </Zoom>
       
    );
};

export default Service;