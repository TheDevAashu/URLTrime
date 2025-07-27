import React from "react";

const Urlcard = (props) => {
  console.log(props);

  const { longUrl, createdAt, shortId } = props;

  const handleCopy = () => {
    navigator.clipboard.writeText(
      import.meta.env.VITE_BACKEND_URL + `/${shortId}`
    );
  };
  let date = new Date(createdAt);
  date = date.toLocaleString("default", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });


  return (
    <div
      className=" w-full flex flex-col gap-4  border border-neutral-800 rounded-2xl p-6 bg-white/10 text-light shadow-md hover:shadow-lg
    shadow-neutral-500/50 scale-95 hover:scale-100 transition duration-300  ease-out delay-100 cursor-pointer"
    >
      <div className="">
        <div className="font-serif">{longUrl.substr(0, 80)}</div>
        <div className="text-2xl font-bold mt-2">
          {import.meta.env.VITE_BACKEND_URL + `/${shortId}`}
        </div>
      </div>
      <div className="flex gap-4.5 ">
        <div>{date} </div>
        <div className="cursor-pointer text-xl">
          <ion-icon name="copy-outline" onClick={handleCopy}></ion-icon>
        </div>
        <div className="cursor-pointer text-xl">
          <ion-icon name="trash-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default Urlcard;
