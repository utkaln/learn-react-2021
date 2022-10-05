import React, { useState, useEffect } from "react";
const url = "https://api.spacexdata.com/v5/launches/latest";
const UEConditional = () => {
  const [userData, SetUserData] = useState({});
  const [isLoading, SetIsLoading] = useState(true);
  const [isErr, SetIsErr] = useState(false);
  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status < 300) {
          return resp.json();
        } else {
          SetIsLoading(false);
          SetIsErr(true);
        }
      })
      .then((data) => {
        const { name, date_local } = data;
        const showFlightData = {
          fname: name,
          fdate: date_local,
        };
        SetUserData(showFlightData);
        SetIsLoading(false);
        SetIsErr(false);
      })
      .catch((error) => {
        console.log("Error from fetch then -> ", error);
      });
  }, []);
  if (isLoading) {
    return (
      <>
        <h3>Loading ...</h3>
      </>
    );
  } else if (isErr) {
    return (
      <>
        <h2>404</h2>
        <h3>Error Occured !</h3>
      </>
    );
  } else {
    return (
      <>
        <h3>Recent SpaceX Mission</h3>

        <h2>{userData.fname}</h2>
        <h3>{userData.fdate}</h3>
      </>
    );
  }
};
export default UEConditional;
