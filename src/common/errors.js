import { toast } from "react-toastify";

const ServerErrors = {
  Unauthorized: "ایمیل یا رمزعبور درست نمی‌باشد.",
};

export function ShowError(error) {
  const message =
    error &&
    error.response &&
    error.response.data &&
    error.response.data.message;
  toast.error(
    message ? message : "سامانه به مشکل خورده لطفا لحظاتی دیگر امتحان کنید.",
    {
      position: toast.POSITION.BOTTOM_RIGHT,
    }
  );
}
