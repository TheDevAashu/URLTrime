import React from "react";
import { Card } from "./Card";

export const LandingPage = () => {
  return (
    <div className="  w-full grid sm:grid-cols-1">
      <div className=" text-center  flex flex-col items-center  p-14">
        <h2 className="text-white sm:text-6xl text-3xl font-extrabold font-serif">
          Short Links, Big Impact.
        </h2>

        <p className="text-slate-300 sm:text-2xl text-xl max-w-6xl font-mono">
          Instantly transform your long, unwieldy URLs into short, powerful
          links.
          <br />
          Perfect for social media, marketing campaigns, and easy sharing.
        </p>
      
      </div>
      <Card />
    </div>
  );
};
