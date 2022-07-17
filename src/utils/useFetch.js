import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = ({ url, values, method = "POST" }) => {
  const [data, setData] = useState({});
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const requestOptions = {
    method: method,
    headers: { "Content-Type": "application/json" },
    data: values,
    withCredentials: true,
    url: url,
  };

  useEffect(() => {
    setLoading(true);
    axios(requestOptions)
      .then((response) => {
        return response.json();
      })
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, error, loading };
};
