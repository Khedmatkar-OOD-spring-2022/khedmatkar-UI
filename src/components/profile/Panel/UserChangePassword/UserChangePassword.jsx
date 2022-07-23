import { useState } from "react";

// import other component
import FormInput from "../../Forms/FormInput";

// import other pkg
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { string, object, ref } from "yup";

const UserChangePassword = ({ password, onChangeInfo }) => {
  const [submit, setSubmit] = useState(false);

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema: object({
      newPassword: string().required("please enter your new password"),

      confirmNewPassword: string()
        .required("please enter your confirm new password")
        .oneOf([ref("newPassword")], "your confirm new password must match"),
    }),
    onSubmit: (values, { setFieldError }) => {
      onChangeInfo(values.newPassword);
    },
  });

  return (
    <>
      <Form
        className="mt-5"
        noValidate
        onSubmit={formik.handleSubmit}
        dir="rtl"
      >
        <FormInput
          type="password"
          inpClass="px-3 py-2"
          className="p-0 mt-3"
          name="newPassword"
          controlId="new-password-input"
          text="رمزعبور جدید "
          placeholder="رمزعبور جدید خود را وارد کنید"
          valid={submit && !formik.errors.newPassword ? true : false}
          errMsg={formik.errors.newPassword || ""}
          invalid={submit && formik.errors.newPassword ? true : false}
          successMsg="done"
          {...formik.getFieldProps("newPassword")}
        />
        <FormInput
          type="password"
          inpClass="px-3 py-2"
          className="p-0 mt-3"
          name="confirmNewPassword"
          controlId="confirm-new-password-input"
          text="تایید رمزعبور جدید"
          placeholder="رمزعبور جدید خود را تایید کنید"
          valid={submit && !formik.errors.confirmNewPassword ? true : false}
          errMsg={formik.errors.confirmNewPassword || ""}
          invalid={submit && formik.errors.confirmNewPassword ? true : false}
          successMsg="done"
          {...formik.getFieldProps("confirmNewPassword")}
        />
        <Button
          variant="primary"
          disabled={submit && !formik.isValid ? true : false}
          className="mt-5 py-2 px-4"
          type="submit"
          onClick={() => setSubmit(true)}
        >
          بروزرسانی رمزعبور
        </Button>
      </Form>
    </>
  );
};

export default UserChangePassword;
