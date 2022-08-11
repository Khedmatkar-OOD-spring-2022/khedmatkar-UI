export function getRequestStatusMessage(status) {
  switch (status) {
    case "CANCELED":
      return "کنسل شد";
    case "WAITING_FOR_CUSTOMER_ACCEPTANCE":
      return "درحال بررسی توسط مشتری";
    case "WAITING_FOR_SPECIALIST_ACCEPTANCE":
      return "درحال بررسی توسط متخصص";
    case "IN_PROGRESS":
      return "درحال اجرا";
    case "EVALUATION":
      return "ارزیابی";
    case "DONE":
      return "اتمام یافته";
    default:
      break;
  }
}
