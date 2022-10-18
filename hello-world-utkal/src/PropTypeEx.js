import React from "react";
import { useFetch } from "./UseFetch";
import Product from "./Product";
const url = "https://api.github.com/users/utkaln/repos";
const PropTypeEx = () => {
  const { respdata } = useFetch(url);
  return (
    <div className="product">
      {respdata.map((element) => {
        return <Product key={element.id} {...element} />;
      })}
    </div>
  );
  //return <>{JSON.stringify(data, null, 2)}</>;
};

export default PropTypeEx;
