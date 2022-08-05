import { useState } from "react";

// import styles of this component
import styles from "./Forms.module.css";

// import other component
import FormInput from "./FormInput";

// import other pkgs
import { Container, Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { object, string } from "yup";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const LoginForm = ({ onRegister, onLogin }) => {
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: object({
      email: string()
        .email("ایمیل صحیح نیست")
        .required("لطفا ایمیل خود را وارد کنید"),
      password: string()
        .required("لطفا رمزعبور خود را وارد کنید")
        .min(4, "رمزعبور باید بیشتر از ۴ حرف باشد"),
    }),
    onSubmit: ({ email, password }, { setFieldError }) => {
      const details = {
        email: email,
        password: password,
      };
      var formBody = [];
      for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        data: formBody,
        url: "http://localhost:8080/login",
        withCredentials: true,
      };
      axios(requestOptions).then((response) => {
        if (response.status === 200) {
          navigate("/dashboard");
        }
        console.log(response)
      }).catch((error) => {
        toast.error(error && error.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
    },
  });

  return (
    <Container
      fluid
      className={`${styles.container} d-flex justify-content-center align-items-center px-5`}
      dir="rtl"
    >
      <Form noValidate className={styles.form} onSubmit={formik.handleSubmit}>
        <h2>ورود به سامانه خدمتکار</h2>

        <FormInput
          className="mb-4"
          name="email"
          controlId="email-input"
          text="ایمیل"
          placeholder="ایمیل خود را وارد کنید..."
          errMsg={formik.errors.email || ""}
          invalid={submit && formik.errors.email ? true : false}
          valid={submit && !formik.errors.email ? true : false}
          {...formik.getFieldProps("email")}
        />

        <FormInput
          className="mb-4"
          name="password"
          controlId="password-input"
          text="رمزعبور"
          placeholder="رمزعبور خود را وارد کنید..."
          type="password"
          errMsg={formik.errors.password || ""}
          invalid={submit && formik.errors.password ? true : false}
          valid={submit && !formik.errors.password ? true : false}
          {...formik.getFieldProps("password")}
        />

        <Button
          onClick={() => navigate('/auth/register')}
          className="shadow-none mt-4 p-0"
          variant=""
        >
          ساخت حساب جدید
        </Button>

        <Button
          className={`${styles["submit-btn"]} w-100`}
          onClick={() => setSubmit(true)}
          disabled={submit && !formik.isValid ? true : false}
          variant="primary"
          type="submit"
        >
          ورود
        </Button>
      </Form>
    </Container>
  );
};

LoginForm.propTypes = {
  // onRegister: PropTypes.func.isRequired,
  // onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
