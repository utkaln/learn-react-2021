import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [respdata, setRespdata] = useState([]);

  const getData = async () => {
    const resp = await fetch(url);
    const respdata = await resp.json();
    setRespdata(respdata);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { loading, respdata };
};
