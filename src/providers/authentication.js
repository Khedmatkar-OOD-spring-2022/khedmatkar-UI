import { useEffect, useState } from "react";

export const useAuth = () => {
  const isLoggedIn = true;
  return [
    {
      username: "Erfanfi79",
      serviceType: "",
      role:"customer"
    },
    isLoggedIn,
  ];
};
