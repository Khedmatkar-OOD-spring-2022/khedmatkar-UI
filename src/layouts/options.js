import React from "react";
import {
  FiAlertCircle,
  FiArchive,
  FiEdit,
  FiMap,
  FiMessageCircle,
  FiPenTool,
  FiTablet,
} from "react-icons/fi";

export const CustomerSidebar = [
  {
    title: "ثبت درخواست خدمت",
    to: "/dashboard/make-request",
    htmlBefore: <FiEdit />,
  },
  {
    title: "فهرست درخواست خدمت ها",
    htmlBefore: <FiTablet />,
    to: "/dashboard/request-list",
  },
  {
    title: "فهرست آدرس ها",
    htmlBefore: <FiMap />,
    to: "/dashboard/location",
  },

  {
    title: "گزارش مشکل فنی",
    htmlBefore: <FiArchive />,
    to: "/dashboard/technicalissues",
  },
  {
    title: "اعلانات",
    htmlBefore: <FiAlertCircle />,
    to: "/dashboard/notification",
  },
];

export const SuperAdminSidebar = [
  {
    title: "فهرست مدیران سامانه",
    htmlBefore: <FiPenTool />,
    to: "/admin/list",
  },
  {
    title: "فهرست درخواست خدمت ها",
    htmlBefore: <FiTablet />,
    to: "/admin/request-list",
  },
  {
    title: "مدیریت تخصص های سامانه",
    htmlBefore: <FiArchive />,
    to: "/admin/speciality-managment",
  },
  {
    title: "بررسی مدارک متخصصان",
    htmlBefore: <FiArchive />,
    to: "/admin/speciality-approve",
  },
  {
    title: "مشکلات فنی",
    htmlBefore: <FiArchive />,
    to: "/admin/technicalissues",
  },
  {
    title: "تنظیمات سامانه",
    htmlBefore: <FiArchive />,
    to: "/admin/system-settings",
  },
  {
    title: "پیشنهادات و انتقادات",
    htmlBefore: <FiArchive />,
    to: "/admin/feedbacks",
  },
];
export const SpecialistSidebar = [
  {
    title: "فهرست درخواست خدمت ها",
    htmlBefore: <FiTablet />,
    to: "/dashboard/request-list",
  },
  {
    title: "بارگذاری مدارک",
    htmlBefore: <FiArchive />,
    to: "/dashboard/addSpecialty",
  },

  // {
  //   title: "فهرست درخواست خدمت ها",
  //   htmlBefore: <FiTablet />,
  //   to: "/dashboard/request-list",
  // },

  {
    title: "گزارش مشکل فنی",
    htmlBefore: <FiArchive />,
    to: "/dashboard/technicalissues",
  },
  {
    title: "اعلانات",
    htmlBefore: <FiAlertCircle />,
    to: "/dashboard/notification",
  },
];
