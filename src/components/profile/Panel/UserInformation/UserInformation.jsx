import { useState } from "react";

// import other component
import FormInput from "../../Forms/FormInput";

// import other pkg
import { Form, Row, Col, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { object, string, date } from "yup";
import PropTypes from "prop-types";

// import utils
import { getStorage } from "./../../../../utils/storage";

const UserInformation = ({
  username,
  firstName,
  lastName,
  email,
  birthday,
  onChangeInfo,
}) => {
  const [submit, setSubmit] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: firstName ? firstName : "",
      lastName: lastName ? lastName : "",
      email,
      birthday,
    },
    validationSchema: object({
      firstName: string().max(10, "your fisrt name must be 10 or less"),
      lastName: string().max(10, "your fisrt name must be 10 or less"),
      email: string()
        .required("please enter your email")
        .email("invalid email"),
    }),
    onSubmit: ({ firstName, lastName, email, birthday }, { setFieldError }) => {
      onChangeInfo(firstName, lastName, email);
    },
  });

  return (
    <>
      <Form noValidate onSubmit={formik.handleSubmit} dir="rtl">
        <Row className="mt-5 px-3 justify-content-between">
          <FormInput
            xs={12}
            lg
            as={Col}
            inpClass="py-2"
            className="p-0"
            name="firstName"
            controlId="first-name-input"
            text="نام"
            placeholder="Arash"
            size="sm"
            invalid={
              formik.values.firstName === ""
                ? false
                : submit && formik.errors.firstName
                ? true
                : false
            }
            errMsg={formik.errors.firstName || ""}
            valid={
              formik.values.firstName === ""
                ? false
                : submit && !formik.errors.firstName
                ? true
                : false
            }
            successMsg="done"
            {...formik.getFieldProps("firstName")}
          />
          <FormInput
            xs={12}
            lg
            as={Col}
            inpClass="py-2"
            className="p-0 ml-lg-5 mt-3 mt-lg-0"
            name="lastName"
            controlId="last-name-input"
            text="نام خانوادگی"
            placeholder="Karimi"
            size="sm"
            invalid={
              formik.values.lastName === ""
                ? false
                : submit && formik.errors.lastName
                ? true
                : false
            }
            errMsg={formik.errors.lastName || ""}
            valid={
              formik.values.lastName === ""
                ? false
                : submit && !formik.errors.lastName
                ? true
                : false
            }
            successMsg="done"
            {...formik.getFieldProps("lastName")}
          />
        </Row>

        <Row className="mt-3 mt-lg-4 px-3">
          <FormInput
            xs={12}
            lg
            as={Col}
            inpClass="py-2"
            className="p-0"
            name="email"
            controlId="email-input"
            text="ایمیل"
            placeholder="Enter your Email"
            size="sm"
            errMsg={formik.errors.email || ""}
            successMsg="done"
            invalid={submit && formik.errors.email ? true : false}
            valid={submit && !formik.errors.email ? true : false}
            {...formik.getFieldProps("email")}
          />
          <FormInput
            xs={12}
            lg
            as={Col}
            inpClass="py-2"
            className="p-0 ml-lg-5 mt-3 mt-lg-0"
            name="birthday"
            controlId="birthday-input"
            text="تاریخ تولد"
            size="sm"
            placeholder="Enter your birthday"
            type="date"
            invalid={submit && formik.errors.birthday ? true : false}
            errMsg={formik.errors.birthday || ""}
            valid={submit && !formik.errors.birthday ? true : false}
            successMsg="done"
            {...formik.getFieldProps("birthday")}
          />
        </Row>
        <Button
          onClick={() => setSubmit(true)}
          disabled={submit && !formik.isValid ? true : false}
          variant="primary"
          className="mt-5 py-2 px-4"
          type="submit"
        >
          به‌روزرسانی
        </Button>
      </Form>
    </>
  );
};

// validate the component
UserInformation.propTypes = {
  // username: PropTypes.string.isRequired,
  // firstName: PropTypes.string.isRequired,
  // lastName: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  // birthday: PropTypes.string.isRequired,
  // onChangeInfo: PropTypes.func.isRequired,
};

export default UserInformation;
