import React, { useState } from "react";
import { ToastContainer, Toast } from "react-bootstrap";
import { FiPackage } from "react-icons/fi";
function Toast({ message }) {
  const [show, setShow] = useState(false);

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="bg-dark position-relative"
      style={{ minHeight: "240px" }}
    >
      <ToastContainer position="bottom-end" className="p-3">
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <FiPackage />
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default AutohideExample;
