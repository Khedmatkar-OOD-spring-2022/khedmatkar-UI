export function getPermissionLabel(permission) {
  for (let i = 0; i < permissions.length; i++) {
    const element = permissions[i];
    if (element.permission === permission) {
      return element.label;
    }
  }
}
const permissions = [
  { permission: "VALIDATE_CERTIFICATE_W", label: "تعیین وضعیت مدارک متخصص" },
  { permission: "SPECIALTY_W", label: "ایجاد تخصص" },
  { permission: "USER_PROFILE_RW", label: "تغییر و مشاهده پروفایل کاربران" },
  { permission: "TECHNICAL_ISSUE_RW", label: "دسترسی به مشکلات سامانه" },
  { permission: "SERVICE_W", label: "ایجاد درخواست خدمت" },
  { permission: "QUESTIONNAIRE_RW", label: "ایجاد و مشاهده ارزیابی" },
  { permission: "USER_LIST_RW", label: "مشاهده و تغییر کاربران سامانه" },
  { permission: "FEEDBACK_RW", label: "مشاهده ی پیشنهادات و انتقادات" },
];
