import React from "react";
import { useFetch } from "./UseFetch";
const url = "http://universities.hipolabs.com/search?country=United+States";
const CustomHook = () => {
  const { loading, data } = useFetch(url);
  return <>{loading ? "Loading..." : JSON.stringify(data)}</>;
};

export default CustomHook;
