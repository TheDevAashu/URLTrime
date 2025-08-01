import React, { useContext, useEffect, useState } from "react";
import Urlcard from "./Urlcard";
import { FireBaseContext } from "../context/FireBaseContext";

const Dashboad = () => {
  const { user } = useContext(FireBaseContext);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/getAllUrl`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userEmail: user?.email }),
    });

    const datac = await res.json();
    setData(datac.urls);
    console.log(datac);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" mt-20 w-[90%] m-auto">
      <div className="grid md:grid-cols-2 md:gap-4">{data && data.map((items) => <Urlcard {...items} />)}</div>
    </div>
  );
};

export default Dashboad;
