import { useEffect, useState } from "react";

export const useFetch = ({ url, values, method = "POST" }) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const requestOptions = {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  };

  useEffect(() => {
    setLoading(true);
    fetch(url, {
      requestOptions,
    })
      .then((response) => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, error, loading };
};
