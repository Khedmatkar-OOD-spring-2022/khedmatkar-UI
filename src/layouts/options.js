import React from "react";
import {
  FiEdit,
  FiTablet,
  FiAlertCircle,
  FiPenTool,
  FiUser,
  FiArchive,
  FiMessageCircle,
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
    title: "پیام ها",
    htmlBefore: <FiMessageCircle />,
    to: "/dashboard/chat",
  },
  {
    title: "اعلانات",
    htmlBefore: <FiAlertCircle />,
    to: "/dashboard/notification",
  },
];
export const AdminSidebar = [
  {
    title: "Dashboard",
    to: "/blog-overview",
    htmlBefore: <FiEdit />,
  },
  {
    title: "Add New Post",
    htmlBefore: <FiArchive />,
    to: "/add-new-post",
  },
  {
    title: "Forms & Components",
    htmlBefore: <FiPenTool />,
    to: "/components-overview",
  },
  {
    title: "Tables",
    htmlBefore: <FiTablet />,
    to: "/tables",
  },
  {
    title: "User Profile",
    htmlBefore: <FiUser />,
    to: "/user-profile-lite",
  },
  {
    title: "اعلانات",
    htmlBefore: <FiAlertCircle />,
    to: "/notification",
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
    title: "پیشنهادات و انتقادات",
    htmlBefore: <FiArchive />,
    to: "/admin/feedbacks",
  },
  {
    title: "اعلانات",
    htmlBefore: <FiAlertCircle />,
    to: "/admin/notification",
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
    title: "پیام ها",
    htmlBefore: <FiMessageCircle />,
    to: "/dashboard/chat",
  },
  {
    title: "اعلانات",
    htmlBefore: <FiAlertCircle />,
    to: "/dashboard/notification",
  },
];
