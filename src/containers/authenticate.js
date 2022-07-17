import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import RegisterForm from "../components/profile/Forms/RegisterForm";
import {IoArrowBack} from 'react-icons/io5'
import { useNavigate } from "react-router-dom";
const Authenticate =()=> {
  const navigate = useNavigate()
    return (
      <React.Fragment>
        <div style={{padding :20}}><Button variant="outline-primary" className="rounded-circle" onClick={()=>navigate('/')}><IoArrowBack /></Button></div>
        <RegisterForm />
      </React.Fragment>
    );
}

export default Authenticate;
