import React from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import Service from '../../components/Service/Service';
import useAuth from '../../hooks/useAuth';
import Services from '../Services/Services';
import './Doctor.css'

const Doctor = () => {
    const {services} = useAuth()
    const service = services.slice(12, 18);
    return (
        <div className="my-3 d-flex flex-wrap justify-content-between">
         <Row className="doctor container">
            {service?.map((service) => (
              <Service service={service} key={service.key}></Service>
            ))}
          </Row>
         </div>
    );
};

export default Doctor;