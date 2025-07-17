import React from "react";
import { Card } from "./Card";

export const LandingPage = () => {
  return (
    <div className="bg-bglanding h-screen w-full flex flex-col items-center justify-center gap-10">
      <div className=" text-center  flex flex-col items-center gap-5">
        <h2 className="text-white text-5xl font-extrabold">
          Short Links, Big Impact.
        </h2>

        <p className="text-slate-300 text-2xl max-w-6xl">
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
