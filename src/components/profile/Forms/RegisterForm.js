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
import { toast } from "react-toastify";

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
        .required("نام واردنشده است")
        .max(15, "نام‌ باید حداکثر ۱۵ حرف باشد")
        .min(4, "نام‌ باید حداقل ۴ حرف باشد"),
      lastName: string()
        .required("نام خانوادگی واردنشده است")
        .max(15, "نام‌خانوادگی باید حداکثر ۱۵ حرف باشد")
        .min(4, "نام‌خانوادگی باید حداقل ۴ حرف باشد"),
      email: string()
        .email("ایمیل وارد نشده است")
        .required("ایمیل واردنشده است"),
      password: string()
        .required("رمزعبور واردنشده است")
        .min(4, "رمزعبور باید حداقل ۴ حرف باشد"),

      confirmPassword: string()
        .required("تایید رمزعبور واردنشده است")
        .oneOf([ref("password")], "تایید رمزعبور مطابقت ندارد"),
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
      fetch("http://localhost:8080/register", requestOptions).then((response) => {
        if (response.status === 200) {
          navigate("/login");
        }
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
