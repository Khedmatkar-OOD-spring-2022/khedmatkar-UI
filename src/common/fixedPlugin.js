import React, { Component } from "react";

import { Dropdown, Badge, Button, Form } from "react-bootstrap";

import sideBarImage1 from "./../assets/img/welcome1.png";
import sideBarImage2 from "./../assets/zz.jpg";
import sideBarImage3 from "./../assets/img/welcome3.jpg";
import sideBarImage4 from "./../assets/shape.jpg";

function FixedPlugin({
  hasImage,
  setHasImage,
  color,
  setColor,
  image,
  setImage,
}) {
  return (
    <div className="fixed-plugin">
      <Dropdown>
        <Dropdown.Toggle
          id="dropdown-fixed-plugin"
          variant=""
          className="text-white border-0 opacity-100"
        >
          <i className="fas fa-cogs fa-2x mt-1"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <li className="adjustments-line d-flex align-items-center justify-content-between">
            <p>عکس پشت زمینه</p>
            <Form.Check
              type="switch"
              id="custom-switch-1-image"
              checked={hasImage}
              onClick={() => setHasImage(!hasImage)}
            />
          </li>
          <li className="adjustments-line mt-3">
            <p>رنگ‌بندی</p>
            <div className="pull-right">
              <Badge
                variant="secondary"
                className={color === "black" ? "active" : ""}
                onClick={() => setColor("black")}
              ></Badge>
              <Badge
                variant="azure"
                className={color === "azure" ? "active" : ""}
                onClick={() => setColor("azure")}
              ></Badge>
              <Badge
                variant="green"
                className={color === "green" ? "active" : ""}
                onClick={() => setColor("green")}
              ></Badge>
              <Badge
                variant="orange"
                className={color === "orange" ? "active" : ""}
                onClick={() => setColor("orange")}
              ></Badge>
              <Badge
                variant="red"
                className={color === "red" ? "active" : ""}
                onClick={() => setColor("red")}
              ></Badge>
              <Badge
                variant="purple"
                className={color === "purple" ? "active" : ""}
                onClick={() => setColor("purple")}
              ></Badge>
            </div>
            <div className="clearfix"></div>
          </li>
          <li className="header-title">عکس های پنل</li>
          <li className={image === sideBarImage1 ? "active" : ""}>
            <a
              className="img-holder switch-trigger d-block"
              href="#pablo"
              onClick={(e) => {
                e.preventDefault();
                setImage(sideBarImage1);
              }}
            >
              <img alt="..." src={sideBarImage1}></img>
            </a>
          </li>
          <li className={image === sideBarImage2 ? "active" : ""}>
            <a
              className="img-holder switch-trigger d-block"
              href="#pablo"
              onClick={(e) => {
                e.preventDefault();
                setImage(sideBarImage2);
              }}
            >
              <img alt="..." src={sideBarImage2}></img>
            </a>
          </li>
          <li className={image === sideBarImage3 ? "active" : ""}>
            <a
              className="img-holder switch-trigger d-block"
              href="#pablo"
              onClick={(e) => {
                e.preventDefault();
                setImage(sideBarImage3);
              }}
            >
              <img alt="..." src={sideBarImage3}></img>
            </a>
          </li>
          <li className={image === sideBarImage4 ? "active" : ""}>
            <a
              className="img-holder switch-trigger d-block"
              href="#pablo"
              onClick={(e) => {
                e.preventDefault();
                setImage(sideBarImage4);
              }}
            >
              <img alt="..." src={sideBarImage4}></img>
            </a>
          </li>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default FixedPlugin;
