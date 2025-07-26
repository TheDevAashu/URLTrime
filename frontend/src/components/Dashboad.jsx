import React, { useContext, useEffect, useState } from "react";
import Urlcard from "./Urlcard";
import { BACKEND_URL } from "../utils/constants";
import { FireBaseContext } from "../context/FireBaseContext";

const Dashboad = () => {
  const { user } = useContext(FireBaseContext)
  const [data, setData] = useState([])
  const fetchData = async () => {
    const res = await fetch(`${BACKEND_URL}/getAllUrl`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userEmail:user?.email }),
    });

    const datac = await res.json();
    setData(datac.urls)
    console.log(datac);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data && data.map((items)=> (
        <Urlcard {...items}/>
      ))}
    </div>
  );
};

export default Dashboad;
