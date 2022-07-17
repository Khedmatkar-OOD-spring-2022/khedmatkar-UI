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
    to: "/components-overview",
  },
  {
    title: "فهرست درخواست خدمت ها",
    htmlBefore: <FiTablet />,
    to: "/tables",
  },
  {
    title: "بررسی مدارک",
    htmlBefore: <FiArchive />,
    to: "/add-new-post",
  },
  {
    title: "پیام ها",
    htmlBefore: <FiMessageCircle />,
    to: "/chat",
  },
  {
    title: "اعلانات",
    htmlBefore: <FiAlertCircle />,
    to: "/notification",
  },
];
export const SpecialistSidebar = [
  {
    title: "فهرست خدمت های قبول شده",
    htmlBefore: <FiPenTool />,
    to: "/components-overview",
  },
  {
    title: "فهرست درخواست خدمت ها",
    htmlBefore: <FiTablet />,
    to: "/tables",
  },
  {
    title: "بارگذاری مدارک",
    htmlBefore: <FiArchive />,
    to: "/add-new-post",
  },
  {
    title: "پیام ها",
    htmlBefore: <FiMessageCircle />,
    to: "/chat",
  },
  {
    title: "اعلانات",
    htmlBefore: <FiAlertCircle />,
    to: "/notification",
  },
];
