import axios from "axios";
import React, { useEffect, useState } from "react";
import urls from "../common/urls";

export const useAuth = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  if (!user) {
    axios.get(urls.auth.profile(), { withCredentials: true }).then((res) => {
      if (res.status === 200) {
        if (res.headers["content-type"] === "text/html;charset=UTF-8") {
          return [{}, false];
        }
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
      } else {
        return [{}, false];
      }
    });
  }

  return [user, user != null];
};

export function logout() {
  localStorage.removeItem("user");
  axios.post(urls.auth.logout(), {}, { withCredentials: true }).then((res) => {
    if (res.status === 200) {
      if (res.headers["content-type"] === "text/html;charset=UTF-8") {
        return res;
      }
    }
  });
}

function setInfoToStorage(values) {
  values.forEach((key, item) => {
    localStorage.setItem("key", "value");
  });
}
