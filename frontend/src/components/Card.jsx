import React, { useState } from "react";

export const Card = () => {
  const [formData, setData] = useState({});
  const [mode, setMode] = useState(false);
  const checkValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      console.log(error);

      return false;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (!checkValidUrl(formData.url)) return;

    try {
      const res = await fetch("http://localhost:5000/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: formData.url }),
      });
      const data = await res.json();
      setData({ ...formData, url: data.url });
      setMode(true);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    // console.log();
  };

  const copyToClipboard = () => {
    if (!formData.url) return;
    navigator.clipboard.writeText(formData.url);
  };

  const handleClear = () => {
    setData({});
    setMode(false);
  };
  return (
    <div className="bg-white w-full max-w-4xl h-auto rounded-4xl p-8 shadow-lg">
      <form className=" flex flex-col gap-3.5" onSubmit={handleSubmit}>
        <div className="b mt-4">
          <h1 className="text-3xl font-bold">Shorten a long url</h1>
          <h1 className="text-xl">No credit Required.</h1>
        </div>
        <div className="mt-8">
          {mode ? (
            <>
              <div className="bg-white rounded-xl  ">
                <h1 className="text-xl font-bold text-gray-800 mb-4">
                  Your shorter link is here
                </h1>

                <div className="flex items-center space-x-3">
                  <input
                    // ref={inputRef}
                    type="text"
                    value={formData.url}
                    readOnly
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl font-semibold text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-100 hover:border-gray-700"
                  />
                  <button
                    onClick={copyToClipboard}
                    className="bg-blue-700 text-white p-3 rounded-xl w-[12rem]
          hover:bg-black hover:cursor-pointer"
                  >
                    copy
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-xl font-bold">Paste your long link here</h1>
              <input
                type="text "
                className="border border-gray-300 w-full rounded-xl h-14 mt-3 px-5 font-semibold
             hover:bg-gray-100 hover:border-gray-700 "
                placeholder="https://www.example.com/your-long-url"
                onChange={(e) => setData({ ...formData, url: e.target.value })}
                value={formData.url}
              ></input>
            </>
          )}
        </div>
        <div className="">
          {mode ? (
            <div className="flex gap-3.5">
              <button
                className="bg-blue-700 text-white p-3 rounded-xl w-[12rem]
          hover:bg-black hover:cursor-pointer"
                onClick={handleClear}
              >
                <span className="text-lg font-semibold">Shorten New Link</span>
              </button>
            </div>
          ) : (
            <button
              className="bg-blue-700 text-white p-3 rounded-xl w-[12rem]
          hover:bg-black hover:cursor-pointer"
            >
              <span className="text-lg font-semibold">Get Your Link</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
