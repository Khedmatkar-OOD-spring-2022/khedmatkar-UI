import React from "react";
import { AiFillBug, AiFillNotification, AiOutlineTool } from "react-icons/ai";
import { BsFillPatchCheckFill, BsListCheck } from "react-icons/bs";
import { FaFileUpload } from "react-icons/fa";
import { FiArchive, FiMap } from "react-icons/fi";
import { IoListCircleSharp, IoSettingsSharp } from "react-icons/io5";
import { MdCreateNewFolder } from "react-icons/md";
import {
  RiSurveyFill,
  RiFeedbackFill,
  RiUser2Fill,
  RiSurveyLine,
} from "react-icons/ri";

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
  // {
  //   title: "فهرست آدرس ها",
  //   htmlBefore: <FiMap size={"1.4em"} style={{ marginLeft: "5px" }} />,
  //   to: "/dashboard/location",
  // },
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
    htmlBefore: <RiUser2Fill size={"1.4em"} style={{ marginLeft: "5px" }} />,
    to: "/admin/list",
  },
  {
    title: "فهرست درخواست خدمت ها",
    htmlBefore: (
      <IoListCircleSharp size={"1.4em"} style={{ marginLeft: "5px" }} />
    ),
    to: "/admin/request-list",
  },
  {
    title: "مدیریت تخصص های سامانه",
    htmlBefore: <AiOutlineTool size={"1.4em"} style={{ marginLeft: "5px" }} />,
    to: "/admin/speciality-managment",
  },
  {
    title: "بررسی مدارک متخصصان",
    htmlBefore: (
      <BsFillPatchCheckFill size={"1.4em"} style={{ marginLeft: "5px" }} />
    ),
    to: "/admin/speciality-approve",
  },
  {
    title: "مدیریت ارزیابی ",
    htmlBefore: <RiSurveyFill size={"1.4em"} style={{ marginLeft: "5px" }} />,
    to: "/admin/evaluation",
  },
  {
    title: "مشکلات فنی",
    htmlBefore: <AiFillBug size={"1.4em"} style={{ marginLeft: "5px" }} />,
    to: "/admin/technicalissues",
  },
  {
    title: "تنظیمات سامانه",
    htmlBefore: (
      <IoSettingsSharp size={"1.4em"} style={{ marginLeft: "5px" }} />
    ),
    to: "/admin/system-settings",
  },
  {
    title: "پیشنهادات و انتقادات",
    htmlBefore: <RiFeedbackFill size={"1.4em"} style={{ marginLeft: "5px" }} />,
    to: "/admin/feedbacks",
  },
  {
    title: "اعلانات",
    htmlBefore: (
      <AiFillNotification size={"1.4em"} style={{ marginLeft: "5px" }} />
    ),
    to: "/admin/notification",
  },
  {
    title: "فهرست ارزیابی ",
    htmlBefore: <BsListCheck size={"1.4em"} style={{ marginLeft: "5px" }} />,
    to: "/admin/evaluation-list",
  },
];
export const SpecialistSidebar = [
  {
    title: "فهرست درخواست خدمت ها",
    htmlBefore: (
      <IoListCircleSharp size={"1.4em"} style={{ marginLeft: "5px" }} />
    ),
    to: "/dashboard/request-list",
  },
  {
    title: "بارگذاری مدارک",
    htmlBefore: <FaFileUpload size={"1.4em"} style={{ marginLeft: "5px" }} />,
    to: "/dashboard/addSpecialty",
  },
  {
    title: "گزارش مشکل فنی",
    htmlBefore: <AiFillBug size={"1.4em"} style={{ marginLeft: "5px" }} />,
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

export function getSideBarWithPermission(per) {
  if (!per && !per.permissions) {
    return [];
  }
  const permissions = per.permissions;
  const adminSideBar = [];
  if (contains(permissions, "ROOT")) adminSideBar.push(SuperAdminSidebar[0]);

  if (contains(permissions, "SERVICE_W"))
    adminSideBar.push(SuperAdminSidebar[1]);

  if (contains(permissions, "SPECIALTY_W"))
    adminSideBar.push(SuperAdminSidebar[2]);
  if (contains(permissions, "VALIDATE_CERTIFICATE_W"))
    adminSideBar.push(SuperAdminSidebar[3]);
  // if (contains(permissions, "QUESTIONNAIRE_RW"))
  //   adminSideBar.push(SuperAdminSidebar[9]);
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
  var i = a.length;
  while (i--) {
    if (a[i] === obj) {
      return true;
    }
  }
  return false;
}
