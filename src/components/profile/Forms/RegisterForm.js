import { useState, useRef } from "react";

// import styles of this component
import styles from "./Forms.module.css";

// import other component to use
import FormInput from "./FormInput";

// import other pkg to use
import { useFormik } from "formik";
import PropTypes from "prop-types";
import { Button, Container, Form } from "react-bootstrap";
import { object, ref, string } from "yup";
import { useNavigate } from "react-router-dom";

// import utils

const RegisterForm = ({ onRegister, onLogin }) => {
  const typeOfUser = useRef("");
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      type: "customer",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: object({
      firstName: string()
        .required("please enter your username")
        .max(15, "your username must be 15 characters or less")
        .min(4, "your username must be 4 characters or more"),
      lastName: string()
        .required("please enter your username")
        .max(15, "your username must be 15 characters or less")
        .min(4, "your username must be 4 characters or more"),
      email: string()
        .email("invalid email")
        .required("Please enter your email"),
      password: string()
        .required("please enter your password")
        .min(4, "your password must be 8 characters or more"),

      confirmPassword: string()
        .required("please enter your confirm password")
        .oneOf([ref("password")], "your confirm password must match"),
    }),
    onSubmit: (values, { setFieldError }) => {
      values.type = typeOfUser.current.checked ? "specialist" : "customer";
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      };
      console.log(requestOptions.body);
      fetch("http://localhost:8080/register", requestOptions).then((response) =>
        response.json()
      );
      navigate("/login");
    },
  });

  return (
    <Container
      fluid
      className={`${styles.container} d-flex justify-content-center align-items-center px-5`}
      dir="rtl"
    >
      <Form noValidate className={styles.form} onSubmit={formik.handleSubmit}>
        <h2>ثبت نام</h2>

        <FormInput
          className="mt-5 mb-4"
          controlId="firstNameInp"
          name="firstName"
          text="نام "
          placeholder="نام خود را وارد کنید..."
          invalid={submit && formik.errors.firstName ? true : false}
          errMsg={formik.errors.firstName || ""}
          valid={submit && !formik.errors.firstName ? true : false}
          successMsg="انجام شد"
          {...formik.getFieldProps("firstName")}
        />

        <FormInput
          className="mt-5 mb-4"
          controlId="lastNameInp"
          name="lastName"
          text="نام خانوادگی"
          placeholder="نام خانوادگی خود را وارد کنید..."
          invalid={submit && formik.errors.lastName ? true : false}
          errMsg={formik.errors.lastName || ""}
          valid={submit && !formik.errors.lastName ? true : false}
          successMsg="انجام شد"
          {...formik.getFieldProps("lastName")}
        />

        <FormInput
          className="mb-4"
          controlId="emailInp"
          name="email"
          text="ایمیل"
          placeholder="ایمیل خود را وارد کنید..."
          invalid={submit && formik.errors.email ? true : false}
          errMsg={formik.errors.email || ""}
          valid={submit && !formik.errors.email ? true : false}
          successMsg="انجام شد"
          {...formik.getFieldProps("email")}
        />

        <Form.Group>
          <Form.Label>نوع کاربری:</Form.Label>
          <Form.Check
            ref={typeOfUser}
            inline
            label="متخصص"
            name="type"
            type="radio"
            id={`specialist`}
          />
          <Form.Check
            inline
            label="مشتری"
            name="type"
            type="radio"
            id={`customer`}
          />
        </Form.Group>
        <FormInput
          className="mb-4"
          type="password"
          controlId="passwordInp"
          name="password"
          text="رمز عبور"
          placeholder="رمز عبور خود را وارد کنید..."
          invalid={submit && formik.errors.password ? true : false}
          errMsg={formik.errors.password || ""}
          valid={submit && !formik.errors.password ? true : false}
          successMsg="انجام شد"
          {...formik.getFieldProps("password")}
        />

        <FormInput
          className="mb-4"
          type="password"
          controlId="confirmPasswordInp"
          name="confirmPassword"
          text="تایید رمز عبور"
          placeholder="رمزعبور خود را تایید کنید..."
          invalid={submit && formik.errors.confirmPassword ? true : false}
          errMsg={formik.errors.confirmPassword || ""}
          valid={submit && !formik.errors.confirmPassword ? true : false}
          successMsg="انجام شد"
          {...formik.getFieldProps("confirmPassword")}
        />

        <Button
          onClick={() => {
            navigate("login");
          }}
          className="shadow-none mt-4 p-0"
          type="button"
          variant=""
        >
          ورود به حساب
        </Button>

        <Button
          className={`${styles["submit-btn"]} w-100`}
          onClick={() => setSubmit(true)}
          disabled={submit && !formik.isValid ? true : false}
          variant="primary"
          type="submit"
        >
          ثبت نام
        </Button>
      </Form>
    </Container>
  );
};

// validate component
RegisterForm.propTypes = {
  // onRegister: PropTypes.func.isRequired,
  // onLogin: PropTypes.func.isRequired,
};

export default RegisterForm;
