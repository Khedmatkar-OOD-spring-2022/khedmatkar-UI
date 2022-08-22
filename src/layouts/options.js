import React from "react";
import { AiFillNotification } from "react-icons/ai";
import { FaFileUpload } from "react-icons/fa";
import {
  FiAlertCircle,
  FiArchive,
  FiMap,
  FiPenTool,
  FiTablet,
} from "react-icons/fi";
import { IoListCircleSharp } from "react-icons/io5";
import { MdCreateNewFolder } from "react-icons/md";

export const CustomerSidebar = [
  {
    title: "ثبت درخواست خدمت",
    to: "/dashboard/make-request",
    htmlBefore: (
      <MdCreateNewFolder size={"1.4em"} style={{ marginLeft: "5px" }} />
    ),
  },
  {
    title: "فهرست درخواست خدمت ها",
    htmlBefore: (
      <IoListCircleSharp size={"1.4em"} style={{ marginLeft: "5px" }} />
    ),
    to: "/dashboard/request-list",
  },
  {
    title: "فهرست آدرس ها",
    htmlBefore: <FiMap size={"1.4em"} style={{ marginLeft: "5px" }} />,
    to: "/dashboard/location",
  },
  {
    title: "ارزیابی",
    htmlBefore: <FiArchive size={"1.4em"} style={{ marginLeft: "5px" }} />,
    to: "/dashboard/evaluation",
  },
  {
    title: "گزارش مشکل فنی",
    htmlBefore: <FiArchive size={"1.4em"} style={{ marginLeft: "5px" }} />,
    to: "/dashboard/technicalissues",
  },
  {
    title: "اعلانات",
    htmlBefore: (
      <AiFillNotification size={"1.4em"} style={{ marginLeft: "5px" }} />
    ),
    to: "/dashboard/notification",
  },
];

export const SuperAdminSidebar = [
  {
    title: "فهرست مدیران سامانه",
    htmlBefore: <FiPenTool size={"1.4em"} style={{ marginLeft: "5px" }} />,
    to: "/admin/list",
  },
  {
    title: "فهرست درخواست خدمت ها",
    htmlBefore: <FiTablet size={"1.4em"} style={{ marginLeft: "5px" }} />,
    to: "/admin/request-list",
  },
  {
    title: "مدیریت تخصص های سامانه",
    htmlBefore: <FiArchive size={"1.4em"} style={{ marginLeft: "5px" }} />,
    to: "/admin/speciality-managment",
  },
  {
    title: "بررسی مدارک متخصصان",
    htmlBefore: <FiArchive size={"1.4em"} style={{ marginLeft: "5px" }} />,
    to: "/admin/speciality-approve",
  },
  {
    title: "مدیریت ارزیابی ",
    htmlBefore: <FiArchive size={"1.4em"} style={{ marginLeft: "5px" }} />,
    to: "/admin/evaluation",
  },
  {
    title: "مشکلات فنی",
    htmlBefore: <FiArchive size={"1.4em"} style={{ marginLeft: "5px" }} />,
    to: "/admin/technicalissues",
  },
  {
    title: "تنظیمات سامانه",
    htmlBefore: <FiArchive size={"1.4em"} style={{ marginLeft: "5px" }} />,
    to: "/admin/system-settings",
  },
  {
    title: "پیشنهادات و انتقادات",
    htmlBefore: <FiArchive size={"1.4em"} style={{ marginLeft: "5px" }} />,
    to: "/admin/feedbacks",
  },
  {
    title: "اعلانات",
    htmlBefore: <FiAlertCircle size={"1.4em"} style={{ marginLeft: "5px" }} />,
    to: "/admin/notification",
  },
];
export const SpecialistSidebar = [
  {
    title: "فهرست درخواست خدمت ها",
    htmlBefore: <FiTablet size={"1.4em"} style={{ marginLeft: "5px" }} />,
    to: "/dashboard/request-list",
  },
  {
    title: "بارگذاری مدارک",
    htmlBefore: <FaFileUpload size={"1.4em"} style={{ marginLeft: "5px" }} />,
    to: "/dashboard/addSpecialty",
  },
  {
    title: "ارزیابی",
    htmlBefore: <FiArchive size={"1.4em"} style={{ marginLeft: "5px" }} />,
    to: "/dashboard/evaluation",
  },
  {
    title: "گزارش مشکل فنی",
    htmlBefore: <FiArchive size={"1.4em"} style={{ marginLeft: "5px" }} />,
    to: "/dashboard/technicalissues",
  },
  {
    title: "اعلانات",
    htmlBefore: <FiAlertCircle size={"1.4em"} style={{ marginLeft: "5px" }} />,
    to: "/dashboard/notification",
  },
];

export function getSideBarWithPermission(per) {
  if (!per) {
    return [];
  }
  const permissions = per.permissions;
  const adminSideBar = [];
  if (contains(permissions, "SERVICE_W"))
    adminSideBar.push(SuperAdminSidebar[0]);

  if (contains(permissions, "SPECIALTY_W"))
    adminSideBar.push(SuperAdminSidebar[2]);
  if (contains(permissions, "VALIDATE_CERTIFICATE_W"))
    adminSideBar.push(SuperAdminSidebar[3]);
  if (contains(permissions, "QUESTIONNAIRE_RW"))
    adminSideBar.push(SuperAdminSidebar[4]);
  if (contains(permissions, "TECHNICAL_ISSUE_RW"))
    adminSideBar.push(SuperAdminSidebar[5]);
  if (contains(permissions, "FEEDBACK_RW"))
    adminSideBar.push(SuperAdminSidebar[7]);
  if (contains(permissions, "ROOT")) adminSideBar.push(SuperAdminSidebar[6]);

  adminSideBar.push(SuperAdminSidebar[8]);
  return adminSideBar;
}
function contains(a, obj) {
  console.log(a, obj);

  var i = a.length;
  while (i--) {
    if (a[i] === obj) {
      return true;
    }
  }
  return false;
}
