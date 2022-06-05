import React from "react";
import {
  FiShoppingCart,
  FiMessageSquare,
  FiUser,
  FiPackage,
} from "react-icons/fi";
import {
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const Search = ({  }) => {
  return (
    <Container id="cont" style={{flexBasis:'content'}}>
      <Form className="d-inline-flex" dir={'rtl'}>
        <FormControl
          type="search"
          placeholder="به چه خدمتی نیاز دارید؟"
          aria-label="Search"
        />
        <Button variant="outline-success">جست‌وجو</Button>
      </Form>
    </Container>
  );
};
export default Search;
