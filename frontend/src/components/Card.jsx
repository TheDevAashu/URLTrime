import React from "react";

export const Card = () => {
  return (
    <div className="bg-white w-full max-w-4xl h-auto rounded-4xl p-8">
      <div className=" flex flex-col gap-3.5">
        <div className="b mt-4">
          <h1 className="text-3xl font-bold">Shorten a long url</h1>
          <h1 className="text-xl">No credit Required.</h1>
        </div>
        <div className="mt-8">
          <h1 className="text-xl font-bold">Paste your long link here</h1>
          <input
            type="text "
            className="border border-gray-300 w-full rounded-xl h-14 mt-3 px-5 font-semibold
             hover:bg-gray-100 hover:border-gray-700 "
            placeholder="https://www.example.com/your-long-url"
          ></input>
        </div>
        <div className="">
          <button
            className="bg-blue-700 text-white p-3 rounded-3xl w-[12rem]
          hover:bg-black hover:cursor-pointer"
          >
            <span className="text-lg font-semibold">Get Your Link</span>
          </button>
        </div>
      </div>
    </div>
  );
};
