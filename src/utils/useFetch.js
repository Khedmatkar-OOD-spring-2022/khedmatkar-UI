import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url, method, values = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const requestOptions = {
    method: method,
    data: values,
    withCredentials: true,
    url: url,
  };

  useEffect(() => {
    setLoading(true);
    axios(requestOptions)
      .then((response) => {
        return response.data;
      })
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
    console.log(data);
  }, [url]);

  return { data, error, loading };
};

