import React from "react";
import { Button } from "react-bootstrap";
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/profile/Forms/RegisterForm";
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
