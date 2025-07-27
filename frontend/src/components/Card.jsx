import React, { useContext, useState } from "react";
import { FireBaseContext } from "../context/FireBaseContext";

export const Card = () => {
  const [formData, setData] = useState({});
  const [longUrl, setLongUrl] = useState(null)
  const [mode, setMode] = useState(false);
  const [shorten, setShorten] = useState(false);
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = useContext(FireBaseContext);
  const checkValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      console.log(error);

      return false;
    }
  };
  const handleSubmit = async () => {
    // console.log("submit ");
    // notify();
    if (!checkValidUrl(formData.url)) return;
    setShorten(!shorten);

    try {
      setLongUrl(formData.url)
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/shorten`, {
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
    setShorten(!shorten);
    // console.log();
  };

  const saveUrl = async () => {
    if (!checkValidUrl(formData.url)) return;


    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/saveUrl`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: longUrl, userEmail: user?.email }),
      });
      const data = await res.json();
      setSaved(!saved)
    
      console.log(data);
    } catch (error) {
      console.log(error);
    }

  };

  const copyToClipboard = () => {
    if (!formData.url) return;
    navigator.clipboard.writeText(formData.url);
    setCopied(true);
  };

  const handleClear = () => {
    setData({});
    setMode(false);
    setShorten(!shorten);
  };
  return (
    <div className=" w-full h-auto  p-8 font-mono flex   justify-center">
      <div className="bg-bgCardBlack text-white p-8 rounded-4xl w-full max-w-2xl grid grid-cols-1 gap-4  ">
        <div className=" ">
          <h1 className="sm:text-3xl text-xl font-bold">Shorten a long url</h1>
          <h1 className="sm:text-xl ">No credit Required.</h1>
        </div>
        <div className="">
          {mode ? (
            <>
              <div className=" rounded-xl  ">
                <p className="sm:text-2xl text-md font-bold  mb-4">
                  Your shorter link is here
                </p>

                <div className="grid sm:grid-cols-12 grid-cols-1 gap-2 ">
                  <input
                    // ref={inputRef}
                    type="text"
                    value={formData.url}
                    readOnly
                    className="w-full px-5 
                    sm:col-span-10
                    py-3 border
                     border-gray-300 rounded-xl font-semibold   focus:outline-none focus:ring-3"
                  />
                  <div className=" sm:col-span-2 ">
                    <button
                      onClick={copyToClipboard}
                      className="bg-darkGrey text-white  py-3 px-4
                    rounded-xl  hover:bg-lightGrey hover:cursor-pointer"
                    >
                      {!copied ? "Copy" : "Copied"}
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-xl font-bold">Paste your long link here</h1>
              {!shorten ? (
                <input
                  type="text "
                  className="border border-gray-300 w-full rounded-xl h-12 mt-3 px-4 font-semibold
              hover:border-gray-700 focus:outline-none  focus:ring-2 "
                  placeholder="https://www.example.com/your-long-url"
                  onChange={(e) =>
                    setData({ ...formData, url: e.target.value })
                  }
                  value={formData.url}
                ></input>
              ) : (
                <h1 className="text-xl">Please Wait ... </h1>
              )}
            </>
          )}
        </div>

        {mode ? (
          <div className=" grid sm:grid-cols-12 grid-cols-1 gap-3">
            <button
              className="bg-darkGrey  sm:col-span-4 col-span-1  text-white  py-1 rounded-xl 
          hover:bg-lightGrey hover:cursor-pointer self-start"
              onClick={handleClear}
            >
              <span className="text-lg font-semibold">Shorten New Link</span>
            </button>
            {user ? <button
              className="bg-darkGrey  sm:col-span-2 col-span-1 text-white  py-1 rounded-xl 
          hover:bg-lightGrey hover:cursor-pointer self-start"
              onClick={saveUrl}
            >
              <span className="text-lg font-semibold">{!saved ? "Save" : "Saved"} </span>
            </button> : null}
          </div>
        ) : (
          <div className=" grid sm:grid-cols-12 grid-cols-1">
            <button
              className="bg-darkGrey  sm:col-span-4  text-white  py-2  rounded-xl 
          hover:bg-lightGrey hover:cursor-pointer  self-start"
              onClick={() => handleSubmit()}
            >
              <span className="text-lg font-semibold">Get Your Link</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
